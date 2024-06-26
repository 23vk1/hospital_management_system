import { catchAsyncErrors } from "../middleware/catchAsyncErrors.middleware.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import { User } from "../model/userSchema.model.js";
import { generateToken } from "../utils/jwtToken.js";
import cloudinary from 'cloudinary';

export const patientRegister = catchAsyncErrors(async (req, res, next) => {
    const { firstName, lastName, email, phone, nic, dob, gender, password, role } = req.body;

    if (!firstName || !lastName || !email || !phone || !nic || !dob || !gender || !password || !role) {
        return next(new ErrorHandler("please fill full form", 400));
    }

    let user = await User.findOne({ email });
    if (user) {
        return next(new ErrorHandler("User Already Registerd", 400));
    }
    user = await User.create({
        firstName, lastName, email, phone, nic, dob, gender, password, role
    });
    generateToken(user, "User Registerd", 200, res);
});


export const login = catchAsyncErrors(async (req, res, next) => {
    const { email, password, confirmPassword, role } = req.body;
    if (!email || !password || !confirmPassword || !role) {
        return (next(new ErrorHandler("please provide all details", 400)));
    }
    if (password !== confirmPassword) {
        return (next(new ErrorHandler("password and confirm password do not match", 400)));

    }
    const user = await User.findOne({ email }).select("+password")

    if (!user) {
        return (next(new ErrorHandler("invalid password or email", 400)));
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return (next(new ErrorHandler("invalid password or email", 400)));
    }
    if (role !== user.role) {
        return (next(new ErrorHandler("User with this role not found", 400)));
    }
    generateToken(user, "User Logedin successfully", 200, res);

});


export const addNewAdmin = catchAsyncErrors(async (req, res, next) => {
    const { firstName, lastName, email, phone, nic, dob, gender, password } = req.body;

    if (!firstName || !lastName || !email || !phone || !nic || !dob || !gender || !password) {
        return next(new ErrorHandler("please fill full form", 400));
    }

    const isRegistered = await User.findOne({ email })
    if (isRegistered) {
        return (next(new ErrorHandler(`${isRegistered.role} with this email already existes `, 400)));
    }
    const admin = await User.create({
        firstName, lastName, email, phone, nic, dob, gender, password, role: "Admin"
    })
    res.status(200).json({
        success: true,
        message: "New Admin Registered"
    })

})


export const getAllDoctors = catchAsyncErrors(async (req, res, next) => {
    const doctors = await User.find({ role: "Doctor" });
    res.status(200).json({
        success: true,
        doctors
    })
});

export const getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        user
    })
});

export const logoutAdmin = catchAsyncErrors(async (req, res, next) => {

    res.status(200).cookie("adminToken", "", {
        httpOnly: true,
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "Admin Logged Out Successfully"
    })
});
export const logoutPatient = catchAsyncErrors(async (req, res, next) => {

    res.status(200).cookie("patientToken", "", {
        httpOnly: true,
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "Patient Logged Out Successfully"
    })
});


export const addNewDoctor = catchAsyncErrors(async (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler(" Doctor Avatar Required", 400));
    }
    const { docAvatar } = req.files;
    const allowedFormates = ["image/png", "image/jpeg", "image/webp", "image/jpg"];
    if (!allowedFormates.includes(docAvatar.mimetype)) {
        return next(new ErrorHandler("File Formate Is Not Supported", 400));
    }
    const { firstName, lastName, email, phone, nic, dob, gender, password, doctorDepartment } = req.body;
    if (!firstName || !lastName || !email || !phone || !nic || !dob || !gender || !password || !doctorDepartment) {
        return next(new ErrorHandler("please provide full details", 400));
    }
    const isRegisterd = await User.findOne({ email });
    console.log(isRegisterd)
    if (isRegisterd) {
        return (next(new ErrorHandler(`${isRegisterd.role} Already Registerd With This Email `, 400)));
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(docAvatar.tempFilePath);
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.error("Cloudinary Error", cloudinaryResponse && cloudinaryResponse.error || "Unknown Cloudinary error");
    }

    const doctor = await User.create({
        firstName, lastName, email, phone, nic, dob, gender, password, doctorDepartment, role: "Doctor", docAvatar: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url
        }
    });
    res.status(200).json({
        success: true,
        message: " New Doctor Registered!"
    });
});




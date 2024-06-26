import { catchAsyncErrors } from "../middleware/catchAsyncErrors.middleware.js";
import ErrorHandler from "../middleware/errorMiddleware.js";
import { Message } from "../model/messageSchema.model.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
    const { firstName, lastName, email, phone, message } = req.body;
    if (!firstName || !lastName || !email || !phone || !message) {
        return next(new ErrorHandler("please Fill Full form"),400);
        
        // res.status(400).json({
        //     success: false,
        //     message: "please fill full form"
        // });
    }
    await Message.create({ firstName, lastName, email, phone, message });
    res.status(200).json({
        success: true,
        message: " message send successfully!"
    });
});

export const getAllMessages = catchAsyncErrors(async(req, res, next)=>{
    const messages = await Message.find();
    res.status(200).json({
        success:true,
        messages
    });
});




import mongoose from "mongoose"
import validator from "validator"

const appointmentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "first name must contains atleast 3 characters!"],
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "last name must contains atleast 3 characters!"],
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: props => `${props.value} is not a valid email address`
        },
        unique: true,
        trim: true
    },
    phone: {
        type: Number,
        validate: {
            validator: function (value) {
                // Custom validation function to check if the phone number is valid
                const stringValue = value.toString();
                return validator.isMobilePhone(stringValue, 'any', { strictMode: false }) && stringValue.length === 10; // Allow any type of phone number format
            },
            message: `{VALUE} is not a valid phone number, Mobile Number must be 10 digits`
        }
    },
    nic: {
        type: String,
        required: true,
        minlength: [13, "min length of NIC is 13 "],
        maxlength: [13, "max length of NIC is 13 "],
        trim: true
    },
    dob:{
        type: Date,
        required:[true, "Dob is required"]
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female","Other"]
    },
    appointment_date:{
        type:String,
        required : true,
    },
    department:{
        type : String,
        required : true
    },
    doctor:{
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        }
    },
    hasVisited:{
        type : Boolean,
        default : false
    },
    doctorId:{
        type : mongoose.Schema.ObjectId,
        required:true
    },
    patientId:{
        type : mongoose.Schema.ObjectId,
        required:true
    },
    address:{
        type : String,
        required : true
    },
    status:{
        type : String,
        enum:["Pending","Accepted","Rejected"],
        default:"Pending",
        required : true
    }



}, {timestamps:true})



export const Appointment = mongoose.model("appointment",appointmentSchema)



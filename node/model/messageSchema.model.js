import mongoose from "mongoose";
import validator from "validator";


const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:[3, "first name must contains atleast 3 characters!"],
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        minlength:[3, "last name must contains atleast 3 characters!"],
        trim:true
    },
    email:{
        type:String,
        required:true,
        validate: {
            validator: validator.isEmail,
            message:props=> `${props.value} is not a valid email address`
          },
        unique:true,
        trim:true
    },
    phone: {
        type:Number,
        validate: {
          validator: function(value) {
            // Custom validation function to check if the phone number is valid
            const stringValue = value.toString();
            return validator.isMobilePhone(stringValue, 'any', { strictMode: false }) && stringValue.length === 10; // Allow any type of phone number format
          },
          message: `{VALUE} is not a valid phone number, Mobile Number must be 10 digits`
        }
      },
    message:{
        type:String,
        required:true,
        maxlength:[100,"max length of mesege is less than 100 character "],
        trim:true
    }
},{timestamps:true});



export const Message = mongoose.model("Message",messageSchema);


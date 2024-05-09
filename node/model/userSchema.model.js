import mongoose from 'mongoose';
import JWT from 'jsonwebtoken';
import bcrypt from "bcrypt";
import validator from 'validator';

const userSchema = new mongoose.Schema({
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
    password:{
        type : String,
        required:true,
        validate: {
            validator: function(value) {
                // Validate length
                if (!validator.isLength(value, { min: 8, max: 16 })) {
                  return false;
                }
                // Validate at least one uppercase letter
                if (!/[A-Z]/.test(value)) {
                  return false;
                }
                // Validate at least one lowercase letter
                if (!/[a-z]/.test(value)) {
                  return false;
                }
                return true;
              },
              message: 'Password must be between 8 and 16 characters long and contain at least one uppercase and one lowercase letter'
          },
        select:false
    },
    role:{
        type:String,
        required:true,
        enum:["Admin","Doctor","Patient"]
    },
    doctorDepartment:{
        type:String,

    },
    docAvatar:{
        public_id:String,
        url:String

    }
}, { timestamps: true });

userSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

userSchema.methods.generateJWTToken = function(){
    return JWT.sign({id:this._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRES
    })
}





export const User = mongoose.model("User", userSchema);


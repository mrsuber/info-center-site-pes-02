import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required:[true, "Please add your name"],
    trim: true,
    maxlength:[20, "Your name is up to 20 chars long."]
  },
  account:{
    type:String,
    required:[true,"Please add your email or phone number"],
    trim:true,
    unique:true
  },
  password:{
    type:String,
    required:[true,"Please add your password"],
    trim:true,
  },
  avatar:{
    type:String,
    default:"https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"

  },
  type:{
    type:String,
    default:'normal' //social //phone number
  },
  isAdmin:{type:Boolean,default:false},
  isSuperAdmin:{type:Boolean,default:false},
},{timestamps:true})

export default mongoose.model('User', userSchema)

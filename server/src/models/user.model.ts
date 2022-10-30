import { Document, Schema, model, Model } from 'mongoose'
import bcrypt from 'bcryptjs'
import isEmail from 'validator/lib/isEmail'
import jwt from 'jsonwebtoken'

interface IUser {
  name: string
  email: string
  password: string
  lastName: string
  location: string
}
interface IUserMethods extends IUser, Document {
  createJWT(): string
  comparePasswords(password: string): boolean
}
interface IUserStatic extends Model<IUserMethods> {}
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 30,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, 'Please provide an email address'],
    validate: {
      validator: isEmail,
      message: 'Please provide a valid email',
    },
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, 'Please enter a password'],
    select: false,
  },
  lastName: {
    type: String,
    maxlength: 30,
    trim: true,
    default: 'lastName',
  },
  location: {
    type: String,
    maxlength: 30,
    trim: true,
    default: 'my location',
  },
})

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

UserSchema.methods.comparePasswords = async function (
  newPassword: string
): Promise<boolean> {
  const match = await bcrypt.compare(newPassword, this.password)
  console.log(match)
  return match
}

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_LIFE,
  })
}

export default model<IUserMethods>('User', UserSchema)

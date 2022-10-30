import express, { Express, Request, Response, NextFunction } from 'express'
import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from 'http-status-codes'
import { BadRequestError } from '../errors'
import { UnauthenticatedError } from '../errors/authErrors'
import User from '../models/user.model'

const register = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body
  const location = 'job location'
  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all values')
  }
  const emailAlreadyExists = await User.findOne({ email })
  if (emailAlreadyExists) {
    throw new BadRequestError('Email already in use, must be unique.')
  }
  const user = await User.create({ name, email, password })

  if (!user) {
    throw new BadRequestError('User is not created')
  }
  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      location: user.location,
    },
    token,
  })
}

const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body
  if (!email || !password)
    throw new BadRequestError('Please provide all values')
  const user = await User.findOne({ email }).select('+password')
  console.log(user)
  if (!user) throw new UnauthenticatedError('Incorrect Credentials')
  const isMatchPassword = await user.comparePasswords(password)
  if (!isMatchPassword) throw new UnauthenticatedError('Incorrect Credentials')
  user.password = ''
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user, token })
}

const updateUser = (req: Request, res: Response): void => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Please provide all values')
  }
}

export { register, login, updateUser }

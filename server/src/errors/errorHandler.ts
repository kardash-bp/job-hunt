import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { Error as MongooseError } from 'mongoose'
import { MongoServerError } from 'mongodb'
interface CustomErrorProps {
  message: string
  statusCode: StatusCodes
}
const errorHandler = (
  err: CustomErrorProps | MongoServerError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err)
  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong,try again later.',
  }
  if (
    err instanceof MongooseError.ValidationError &&
    err.name === 'ValidationError'
  ) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',')
  } else if ((err as MongoServerError).code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST
    defaultError.msg = `${Object.values(
      (err as MongoServerError).keyValue
    )} is already being used`
  }
  res.status(defaultError.statusCode).json({ msg: defaultError.msg })
}
export default errorHandler

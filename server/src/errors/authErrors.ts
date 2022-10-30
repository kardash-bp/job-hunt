import { StatusCodes } from 'http-status-codes'
import CustomError from './customError'

export class UnauthenticatedError extends CustomError {
  public readonly statusCode: StatusCodes

  constructor(message: string) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}
export class UnauthorizedError extends CustomError {
  public readonly statusCode: StatusCodes

  constructor(message: string) {
    super(message)
    this.statusCode = StatusCodes.FORBIDDEN
  }
}

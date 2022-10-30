import { StatusCodes } from 'http-status-codes'
import CustomError from './customError'

class BadRequestError extends CustomError {
  public readonly statusCode: StatusCodes
  constructor(message: string) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}
export default BadRequestError

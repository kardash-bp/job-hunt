import { StatusCodes } from 'http-status-codes'
import CustomError from './customError'

class NotFoundError extends CustomError {
  public readonly statusCode: StatusCodes
  constructor(message: string) {
    super(message)
    this.statusCode = StatusCodes.NOT_FOUND
  }
}
export default NotFoundError

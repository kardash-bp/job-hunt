import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const url = process.env.MONGO!

class Database {
  constructor() {
    this.connect()
  }
  private connect() {
    mongoose
      .connect(url)
      .then(() => {
        console.log('Database connection successful')
      })
      .catch((err) => {
        console.error('Database connection error: ' + err.message)
      })
  }
}
export default new Database()

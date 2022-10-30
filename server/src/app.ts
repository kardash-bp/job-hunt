import express, { Express, Request, Response, NextFunction } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import compression from 'compression'
import { notFound } from './errors'
import { errorHandler } from './errors'
import authRouter from './routes/authRoutes'
import jobsRouter from './routes/jobsRoutes'
const app: Express = express()

app.use(helmet())
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(compression())
app.use(express.json())
// error testing----------------------------------------------------------
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.use('/v1/auth', authRouter)
app.use('/v1/jobs', jobsRouter)

app.use(notFound)
app.use(errorHandler)

//* use with errorHandlerClass
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   console.log('Error encountered:', err.message || err)

//   next(err)
// })
// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   errorHandler.handleError(err, res)
// })

export default app

import express, { Express, Request, Response, NextFunction } from 'express'

const createJob = (req: Request, res: Response): void => {
  res.send('create job')
}

const getAllJobs = (req: Request, res: Response): void => {
  res.send('All Jobs')
}

const updateJob = (req: Request, res: Response): void => {
  res.send('update job')
}

const deleteJob = (req: Request, res: Response): void => {
  res.send('delete job')
}

const showStats = (req: Request, res: Response): void => {
  res.send('Show stats')
}

export { createJob, getAllJobs, updateJob, deleteJob, showStats }

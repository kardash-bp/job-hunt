import express, { Express, Request, Response, NextFunction } from 'express'

const register = (req: Request, res: Response): void => {
  res.send('register user')
}

const login = (req: Request, res: Response): void => {
  res.send('login user')
}

const updateUser = (req: Request, res: Response): void => {
  res.send('update user')
}

export { register, login, updateUser }

import axios from 'axios'
import { Dispatch } from 'react'
import { baseUrl } from '../config'
import { addUserToLocalStorage } from '../utils/localStorage'
import { ContextState } from './appContext'

export interface Action {
  type: string
  payload: ContextState
}
export interface IUser {
  name: string
  email: string

  lastName?: string
  location?: string
}
export interface IRegUser {
  name: string
  email: string
  password: string
  location?: string
}
export interface ILogin {
  email: string
  password: string
}
export enum Types {
  ShowAlert = 'SHOW_ALERT',
  HideAlert = 'HIDE_ALERT',
  RegisterStart = 'REGISTER_START',
  RegisterSuccess = 'REGISTER_SUCCESS',
  RegisterError = 'REGISTER_ERROR',
  LoginStart = 'LOGIN_START',
  LoginSuccess = 'LOGIN_SUCCESS',
  LoginError = 'LOGIN_ERROR',
}
const clearAlert = (dispatch: any) => {
  setTimeout(() => {
    dispatch({ type: Types.HideAlert })
  }, 2500)
}
export const displayAlert = (dispatch: any) => {
  dispatch({ type: Types.ShowAlert })
  clearAlert(dispatch)
}
export const registerUser = async (
  regData: IRegUser,
  dispatch: Dispatch<any>
): Promise<void> => {
  dispatch({ type: Types.RegisterStart })

  try {
    const { data } = await axios.post(`${baseUrl}/v1/auth/register`, regData)
    const { user, token } = data
    dispatch({
      type: Types.RegisterSuccess,
      payload: { user, token },
    })
    addUserToLocalStorage(user, token)
  } catch (err) {
    let errMsg = 'Something went wrong.'
    if (axios.isAxiosError(err)) {
      errMsg = err.response?.data.msg
    }
    console.log(err)
    dispatch({ type: Types.RegisterError, payload: errMsg })
  }
  clearAlert(dispatch)
}
export const loginUser = async (
  logData: ILogin,
  dispatch: Dispatch<any>
): Promise<void> => {
  dispatch({ type: Types.LoginStart })
  try {
    const { data } = await axios.post(`${baseUrl}/v1/auth/login`, logData)
    const { user, token } = data
    dispatch({
      type: Types.LoginSuccess,
      payload: { user, token },
    })
    addUserToLocalStorage(user, token)
  } catch (err) {
    let errMsg = 'Something went wrong.'
    if (axios.isAxiosError(err)) {
      errMsg = err.response?.data.msg
    }
    console.log(err)
    dispatch({ type: Types.LoginError, payload: errMsg })
  }
  clearAlert(dispatch)
}

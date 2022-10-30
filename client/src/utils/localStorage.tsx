import { IUser } from '../context/actions'

export const addUserToLocalStorage = (user: IUser, token: string): void => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
}
export const removeFromLocalStorage = (): void => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}
export const getFromLocalStorage = (name: string): IUser | string | null => {
  if (localStorage.getItem(name)) {
    if (name === 'token') {
      return localStorage.getItem('token')
    } else {
      return JSON.parse(localStorage.getItem(name)!)
    }
  }
  return null
}

import { useContext, createContext, useReducer, Dispatch } from 'react'
import { getFromLocalStorage } from '../utils/localStorage'
import { IUser } from './actions'
import { reducer } from './reducer'

export interface ContextState {
  isLoading: boolean
  showAlert: boolean
  alertText: string
  alertType: string
  user: IUser
  token: string
  jobLocation: string
}
export type AppContextType = {
  state: ContextState
  dispatch: Dispatch<any>
}
const user = getFromLocalStorage('user') as IUser
const token = getFromLocalStorage('token') as string
export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user
    ? { ...user }
    : { name: '', email: '', lastName: '', location: '' },
  token: token ? token : '',
  jobLocation: 'unknown',
}
type Props = {
  children: React.ReactNode
}
const AppContext: AppContextType = {
  state: { ...initialState },
  dispatch: () => null,
}
export const GlobalContext = createContext(AppContext)
export const UseAppContext = () => useContext(GlobalContext)

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

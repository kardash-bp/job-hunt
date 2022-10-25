import { useContext, createContext, useState, useReducer } from 'react'
import { JsxElement } from 'typescript'

export interface ContextState {
  isLoading: boolean
  showAlert: boolean
  alertText: string
  alertType: string
}
export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
}
type Props = {
  children: React.ReactNode
}
const AppContext = createContext(initialState)

export const useAppContext = useContext(AppContext)

export const AppProvider = ({ children }: Props) => {
  const [state, setState] = useState(initialState)
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

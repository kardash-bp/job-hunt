import { useContext, createContext, useReducer, Dispatch } from 'react'
import { reducer } from './reducer'

export interface ContextState {
  isLoading: boolean
  showAlert: boolean
  alertText: string
  alertType: string
}
export type AppContextType = {
  state: ContextState
  dispatch: Dispatch<any>
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

import { ContextState } from './appContext'
import { Action, Types } from './actions'

export const reducer = (state: ContextState, action: Action): ContextState => {
  switch (action.type) {
    case Types.ShowAlert:
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: 'Please provide all values!',
      }
    case Types.HideAlert:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      }
    case Types.RegisterStart:
      return {
        ...state,
        isLoading: true,
      }
    case Types.RegisterSuccess:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'User Registered. Redirecting...',
      }
    case Types.RegisterError:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: `${action.payload}`,
      }
    case Types.LoginStart:
      return {
        ...state,
        isLoading: true,
      }
    case Types.LoginSuccess:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'You are successfully logged in. Redirecting...',
      }
    case Types.LoginError:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: `${action.payload}`,
      }
    default:
      throw new Error(`no such action: ${action.type}`)
  }
}

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
    default:
      throw new Error(`no such action: ${action.type}`)
  }
}

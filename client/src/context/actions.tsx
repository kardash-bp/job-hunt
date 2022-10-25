import { ContextState } from './appContext'
export interface Action {
  type: string
  payload: ContextState
}
export enum Types {
  ShowAlert = 'SHOW_ALERT',
  HideAlert = 'HIDE_ALERT',
}
const clearAlert = (dispatch: any) => {
  setTimeout(() => {
    dispatch({ type: Types.HideAlert })
  }, 3000)
}
export const displayAlert = (dispatch: any) => {
  dispatch({ type: Types.ShowAlert })
  clearAlert(dispatch)
}

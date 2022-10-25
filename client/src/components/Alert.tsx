import React from 'react'
import { UseAppContext } from '../context/appContext'

const Alert = () => {
  const {
    state: { alertType, alertText },
  } = UseAppContext()
  return <div className={`alert alert-${alertType}`}>{alertText}</div>
}

export default Alert

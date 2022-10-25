import { ChangeEvent } from 'react'
interface FormInputProps {
  name: string
  value: string
  type: string
  labelText: string
  handleChange: (e: ChangeEvent) => void
}
const FormInput = ({
  name,
  value,
  type,
  labelText,
  handleChange,
}: FormInputProps) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        className='form-input'
        name={name}
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}

export default FormInput

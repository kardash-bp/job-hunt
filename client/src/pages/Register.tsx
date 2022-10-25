import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { Alert, FormInput, Logo } from '../components'

import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    margin-left: 0.5rem;
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  const handleChange = (e: ChangeEvent) => {
    console.log(e)
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert />}
        {!values.isMember && (
          <FormInput
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
            labelText='name'
          />
        )}
        <FormInput
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          labelText='email'
        />
        <FormInput
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          labelText='password'
        />
        <button type='submit' className='btn btn-block'>
          submit{' '}
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' className='member-btn' onClick={toggleMember}>
            {!values.isMember ? 'Login' : 'Register'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register

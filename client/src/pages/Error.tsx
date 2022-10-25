import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/images/error-page.jpg'
import styled from 'styled-components'

const Wrapper = styled.main`
  text-align: center;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`
const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Sorry, that page can't be found.</h3>
        <p>We looked everywhere</p>
        <Link to='/'>Go to homepage</Link>
      </div>
    </Wrapper>
  )
}

export default Error

import React from 'react'
import logo from '../assets/images/job-search.png'
import styled from 'styled-components'

const Wrapper = styled.div`
  img {
    height: 50px;
    width: auto;
  }
`

const Logo = () => {
  return (
    <Wrapper>
      {' '}
      <img src={logo} alt='job hunt' className='logo' />
    </Wrapper>
  )
}

export default Logo

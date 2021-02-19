import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login.js'
import LogoImage from './LogoImage'
// import Counter from './../Counter'

const Home = () => {
  const { username } = useSelector((store) => store.loginReducer)

  return <h1 style={{ textAlign: 'center' }}>
    Welcome {username} to our music store!
      <LogoImage size='large' />
    {/* <Counter />  */}
  </h1>

}

export default Home
import React, {useState, useEffect} from 'react'
import '../styles/homePage.css'
import { useSelector } from 'react-redux'
//import Login from './Login.js'
import LogoImage from './LogoImage'


const Home = () => {
  const { username } = useSelector((store) => store.loginReducer)

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    let timeId = setInterval(() => tick(), 1000)
    return function cleanup() {
      clearInterval(timeId)
    }
  })

  function tick() {
    setTime(new Date())
  }

  return <h1 style={{ textAlign: 'center' }} id='homeTitle'>
    <br></br>
    Welcome {username} to our music store!
    <h1>{time.toLocaleTimeString()}</h1>
      <LogoImage size='large' />
    {/* <Counter />  */}
  </h1>

}

export default Home
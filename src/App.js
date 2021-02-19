import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home.js'
import Songs from './components/Songs.js'
import Albums from './components/Albums.js'
import Artists from './components/Artists.js'
import AboutUs from './components/AboutUs.js'
import Menu from './components/Menu.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'

function App() {
  const { username, password } = useSelector(state => state.loginReducer)
  const userAuth = username || localStorage.getItem('username')
  const passAuth = password || localStorage.getItem('password')


  return (
    <BrowserRouter>
      {(userAuth && passAuth) ? <>
        <Menu />

        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/logout'>
            <Logout />
          </Route>

          <Route path='/songs'>
            <Songs />
          </Route>

          <Route path='/albums'>
            <Albums />
          </Route>

          <Route path='/artists'>
            <Artists />
          </Route>

          <Route path='/contact'>
            <AboutUs />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>

          {/* when no matches are found for the browser route */}
          <Route path='*'>
            <NotFound />
          </Route>

        </Switch>
      </>
      :
      <Login />
  }
    </BrowserRouter>
  )
}

const NotFound = () => {
  return <div>Error 404!</div>
}

export default App
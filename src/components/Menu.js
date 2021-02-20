import React, { useState, useEffect } from 'react'
import '../styles/menu.css'
import { Nav, Navbar, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LogoImage from './LogoImage'



const Menu = () => {

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

  return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" activeKey='/login' className='menuBar'>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link to="/"><LogoImage size='small' /></Link>
        <Nav.Link className='main-nav' activeClassName='main-nav-avtive' href="/">Home</Nav.Link>
        <Nav.Link className='main-nav' activeClassName='main-nav-avtive' href="/songs">Songs</Nav.Link>
        <Nav.Link className='main-nav' activeClassName='main-nav-avtive' href="/albums">Albums</Nav.Link>
        <Nav.Link className='main-nav' activeClassName='main-nav-avtive' href="/artists">Artists</Nav.Link>
      </Nav>

      <Nav className='sideNav'>
        <Nav.Link className='main-nav' activeClassName='main-nav-avtive' href="/contact">Contact</Nav.Link>
        <Nav.Link className='main-nav' activeClassName='main-nav-avtive' href="/logout">Logout</Nav.Link>
        <span>{time.toLocaleTimeString()}</span>
      </Nav>


    </Navbar.Collapse>

  </Navbar>


}

export default Menu
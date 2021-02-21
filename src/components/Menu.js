import React from 'react'
import '../styles/menu.css'
import { Nav, Navbar, NavLink } from 'react-bootstrap'
import LogoImage from './LogoImage'


const Menu = () => {

  

  return (
    <Navbar bg="light" expand="lg" className='menuBar'>
                <Navbar.Brand href="/" id='logoImg'><LogoImage size='small' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" id='justifyMenuBar'>
                    <Nav className="mr-auto">
                        <NavLink className='main-nav' activeClassName='mainNavAvtive' href="/">Home</NavLink>
                        <NavLink className='main-nav' activeClassName='mainNavAvtive' href="/songs">Songs</NavLink>
                        <NavLink className='main-nav' activeClassName='mainNavAvtive' href="/albums">Albums</NavLink>
                        <NavLink className='main-nav' activeClassName='mainNavAvtive' href="/artist">Artist</NavLink>
                    </Nav>
                    
                    <Nav>
                        <NavLink className='main-nav' activeClassName='main-nav-avtive' href="/Contact">Contact</NavLink>
                        <NavLink className='main-nav' activeClassName='main-nav-avtive' href="/logout">Logout</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
  )
}

export default Menu
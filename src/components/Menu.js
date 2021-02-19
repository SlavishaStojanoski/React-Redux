import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LogoImage from './LogoImage'

const styledLink = {
  textDecoration: 'none',
  marginRight: '0.5rem'  
}

const Menu = () => {
  return <Nav activeKey="/login">
    <Nav.Item>
      <Link to='/' style={styledLink}>Home</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to='/songs' style={styledLink}>Songs</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to='/albums' style={styledLink}>Albums</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to='/artists' style={styledLink}>Artists</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to='/contact' style={styledLink}>Contact</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to='/logout' style={styledLink}>Logout</Link>
    </Nav.Item>
    <Nav.Item>
      <LogoImage size='small' />
    </Nav.Item>
  </Nav>
}

export default Menu
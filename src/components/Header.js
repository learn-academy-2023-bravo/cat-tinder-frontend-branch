import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { NavLink as RRNavLink } from 'react-router-dom'
import logo from '../assets/branch-logo.png'

function Header(args) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar expand='md' container='xl'>
        <NavbarBrand to='/' tag={RRNavLink}>
          <img
            src={logo}
            width={80}
            height={80}
            style={{ marginRight: '1rem' }}
          />{' '}
          Branch
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <NavLink to='/treeindex' tag={RRNavLink}>All Trees</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/treenew' tag={RRNavLink}>New Tree</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header

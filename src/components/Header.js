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
import logo from '../assets/branch-logo.png'

function Header(args) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar expand='md' container='xl'>
        <NavbarBrand href='/'>
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
              <NavLink href='/treeindex'>All Trees</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/treenew'>New Tree</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/treeshow'>View a Tree</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/treeedit'>Edit a Tree</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header

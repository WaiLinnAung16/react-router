import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Nav.css'
const Nav = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/services'}>Serviecs</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>
            <li><NavLink to={'/nest'}>Nest</NavLink></li>
        </ul>
    </div>
  )
}

export default Nav
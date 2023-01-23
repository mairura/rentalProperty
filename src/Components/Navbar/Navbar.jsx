import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav_container'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/tenants'>Tenants</Link>
                </li>
                <li>
                    <Link to='/landlord'>Landlords</Link>
                </li>
                <li>
                    <Link to='/contactus'>Contact Us</Link>
                </li>
            </ul>
    </div>
  )
}

export default Navbar
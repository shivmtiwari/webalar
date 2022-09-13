import React, { useState } from 'react'
import './Navbar.css'
import '../../App.css'
import { Link } from 'react-router-dom'



const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/'>
                        <div className="icon">
                            <i class="fa-sharp fa-solid fa-square"></i>
                            <i class="fa-solid fa-circle"></i>
                            <i class="fa-solid fa-circle"></i>
                        </div>
                        <p>logoispum</p>
                    </Link>
                </div>
                <ul className={click ? "nav-menu active" : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-link'>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-link'>Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <button>Get Started</button>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<i class="fa-solid fa-xmark" size={20} style={{ color: '#000000' }}></i>) : (<i class="fa-solid fa-bars" size={20} style={{ color: '#000000' }}></i>)}

                </div>
            </nav>
        </header>
    )
}

export default Navbar

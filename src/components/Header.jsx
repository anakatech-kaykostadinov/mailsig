import React from 'react'
import logo from '../images/header-logo.png'
function Header() {
    return (
        <header className='ms-main__header'>
            <div>
                <img src={logo} alt="Header Logo" />
            </div>
            <div>
                <h3>AnakaMail</h3>
            </div>
        </header>
    )
}

export default Header

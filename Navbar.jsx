import React, { useState } from 'react'
import './Navbar.css'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='navbar-container'>
            <div onClick={() => setIsOpen(!isOpen)} className='drop-down'>
                Category
                {isOpen &&
                    <div className='drop-down-list'>
                        <div className='item'>
                            Mobile
                        </div>
                        <div className='item'>
                            Laptop
                        </div>
                        <div className='item'>
                            TV
                        </div>
                    </div>}

            </div>
            <div className='search-container'> <input placeholder='search' /> </div>
            <button className='search-button' >Search</button>
        </div>
    )
}

export default Navbar
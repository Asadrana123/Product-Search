import React, { useState } from 'react'
import './Navbar.css'
function Navbar({ onSearch }) {
    const [isOpen, setIsOpen] = useState(false);
    const [tempCategory, setTempCategory] = useState('All');
    const [tempSearch, setTempSearch] = useState('');

    return (
        <div className='navbar-container'>
            <div onClick={() => setIsOpen(!isOpen)} className='drop-down'>
                {tempCategory}
                {isOpen && (
                    <div className='drop-down-list'>
                        {['All', 'Mobiles', 'Laptops', 'TVs'].map(cat => (
                            <div key={cat} className='item' onClick={() => setTempCategory(cat)}>
                                {cat}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className='search-container'>
                <input
                    placeholder='search name, price, etc...'
                    value={tempSearch}
                    onChange={(e) => setTempSearch(e.target.value)}
                />
            </div>

            <button
                className='search-button'
                onClick={() => onSearch(tempCategory, tempSearch)}
            >
                Search
            </button>
        </div>
    );
}
export default Navbar
import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Card from './Card'
const arr = [1, 2, 3, 4, 5]
function App() {
    return (
        <div className='main'>
            <Navbar />
            <div className='cards-contianer'>
                {arr.map((_, index) => {
                    return <Card key={index} />
                })}
            </div>
        </div>
    )
}

export default App
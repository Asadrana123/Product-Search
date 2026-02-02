import React from 'react'
import './App.css'
import Navbar from './Navbar'
import productData from './data.json';
import { useState } from 'react';
import Card from './Card'
function App() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeSearch, setActiveSearch] = useState('');

   
    const handleSearch = (selectedCat, searchInput) => {
        setActiveCategory(selectedCat);
        setActiveSearch(searchInput);
    };

    const filteredProducts = productData.products.filter(product => {
        const matchesCategory = activeCategory === 'All' || product.category === activeCategory;

        const searchLower = activeSearch.toLowerCase();
        const matchesSearch =
            product.name.toLowerCase().includes(searchLower) ||
            product.category.toLowerCase().includes(searchLower) ||
            product.price.toString().includes(searchLower) ||
            product.description.some(line => line.toLowerCase().includes(searchLower));

        return matchesCategory && matchesSearch;
    });

    return (
        <div className='main'>
            <Navbar onSearch={handleSearch} />
            <div className='cards-contianer'>
                {filteredProducts.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default App
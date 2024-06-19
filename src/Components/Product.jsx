import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { furnitureData } from './Data';
import { FaBars } from "react-icons/fa";
import { GiInvertedDice4 } from "react-icons/gi";

const Product = () => {
    const [data, setData] = useState(furnitureData);
    const [input, setInput] = useState('');
    const [category, setCategory] = useState('All');

    const handleCategory = (category) => {
        setCategory(category);
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const filteredData = data.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(input.toLowerCase());
        const matchesCategory = category === 'All' || item.category === category;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className=''>
            <div className=' bg-orange-200'>
                <div className=' container mx-auto py-16 '>
                    <h1 className='text-4xl text-orange-800 font-bold'>
                        Home / Products
                    </h1>
                </div>
            </div>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
               
            <div className='flex justify-center'>
    <div className='text-center'>
        <p className='text-5xl font-bold'>Products Found</p>
        <div className='flex justify-center'>
            <hr className='w-1/2 border-t-4 border-orange-800 mt-4'/>
        </div>
    </div>
</div>
               

                <div className='flex mt-7'>
                    <div className='w-full sm:w-1/4 border-r-2 border-orange-800 me-[100px] '>
                        <div className='sticky top-[50px]'>
                            <input
                                type='text'
                                value={input}
                                onChange={handleChange}
                                className='px-2 py-1 my-2 bg-gray-100 w-full sm:w-[160px] sm:ml-2'
                                placeholder='Search'
                            />
                            <h3 className='text-2xl font-bold mt-2 pl-4'>Category</h3>
                            <ul className='leading-8 text-3xl  pl-4  '>
                                {['All', 'Office', 'Kitchen', 'Bedroom', 'Dining', 'Kids'].map((cat) => (
                                    <li
                                        key={cat}
                                        className={ `cursor-pointer ${category === cat ? 'font-bold' : ''} text-xl`} 
                                        onClick={() => handleCategory(cat)}
                                    >
                                        {cat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='w-full sm:w-3/4 flex justify-around flex-wrap mt-5'>
                        {filteredData.map((item) => (
                            <div key={item.id} className='w-full sm:w-[48%] lg:w-[30%] mb-8'>
                                <Link to={`/products/${item.id}`}>
                                    <img
                                        className='w-full h-[200px] object-cover hover:brightness-75 transition-all duration-300'
                                        src={item.image}
                                        alt={item.name}
                                    />
                                    <div className='flex justify-between py-3'>
                                        <p>{item.name}</p>
                                        <p className='text-orange-400'>{item.price}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

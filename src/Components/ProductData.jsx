import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { furnitureData } from './Data';
import { IoStar, IoStarOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const ProductData = ({AddToCart}) => {
    const { id } = useParams();
    const product = furnitureData.find(item => item.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleAddToCart = () => {
        AddToCart({ ...product, quantity }); // Call addToCart function with product and quantity
        alert(`${product.name} added to cart!`);
    };


    const navigate = useNavigate();

    const onNavigate = () => {
        navigate('/products');
    };

    return (
        <div className='mb-10'>
            <div className='bg-orange-200'>
                <div className='py-16 container mx-auto lg:px-0'>
                    <h1 className='text-4xl text-orange-800 font-bold'>
                        Home / Products / <span className='text-black'>{product.name}</span>
                    </h1>
                </div>
            </div>
            <div className='container mx-auto my-9 lg:px-0'>
                <button className='bg-yellow-900 text-white p-2 rounded-md' onClick={onNavigate}>
                    BACK TO PRODUCTS
                </button>
            </div>
            <div className='container mx-auto flex '>
                <div className='flex flex-col justify-between gap-9 lg:px-0 lg:flex-row'>
                    <div className='w-full lg:w-1/2'>
                        <img className='w-full h-auto object-cover' src={product.image} alt="" />
                    </div>
                    <div className='w-full lg:w-1/2 '>
                        <h1 className='text-4xl font-bold'>{product.name}</h1>
                        <div className='flex text-yellow-500 my-3 items-center text-md'>
                            <IoStar /><IoStar /><IoStar /><IoStar /><IoStarOutline /> <span className='text-black'>(100 customer reviews)</span>
                        </div>
                        <p className='text-xl text-yellow-900 font-bold my-2'>{product.price}</p>
                        <p className='opacity-80'>{product.description}</p>
                        <div className='flex  my-4 '>
                            <p className='font-semibold text-lg'>Available:</p> <span className='pl-9'>In Stock</span>
                        </div>
                        <div className='flex  my-4 '>
                            <p className='font-semibold text-lg'>SKU :</p> <span className='pl-9'>{product.id}</span>
                        </div>
                        <div className='flex  my-4 border-b-2 pb-4'>
                            <p className='font-semibold text-lg'>Brand :</p> <span className='pl-9'>Caressa</span>
                        </div>
                        <div className='flex items-center my-4'>
                            <button onClick={decrease} className=' px-2 py-1 rounded-md '><FaMinus className='text-2xl' /></button>
                            <span className='mx-4 text-2xl font-bold'>{quantity}</span>
                            <button onClick={increase} className=' px-2 py-1 rounded-md text-2xl'><FaPlus /></button>
                        </div>
                        <Link to ='/cart'>
                            <button onClick={handleAddToCart}  className='bg-orange-400 text-white p-2 rounded-md '>ADD TO CART</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductData;

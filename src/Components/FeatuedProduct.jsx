import React from 'react';
import { IoStar, IoStarOutline } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';
import { furnitureData } from './Data';

const FeatuedProduct = () => {
  const { id } = useParams();
  const product = furnitureData.find(item => item.id === parseInt(id));

  if (!product) {
    return (
      <div>Product not found</div>
    );
  }

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <div className='mb-10'>
      <div className='bg-orange-200'>
        <div className='py-16 max-w-7xl mx-auto'>
          <h1 className='text-4xl text-orange-800 font-bold'>Home / Products / <span className='text-black'>{product.name}</span></h1>
        </div>
      </div>
      <div className='container mx-auto my-9'>
        <button className='bg-yellow-900 text-white p-2 rounded-md' onClick={onClick}>BACK TO PRODUCTS</button>
      </div>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row'>
        <div className='lg:w-1/2'>
          <img className='w-full h-auto object-cover' src={product.image} alt={product.name} />
        </div>
        <div className='lg:w-1/2 mt-6 lg:mt-0 lg:pl-12'>
          <h1 className='text-4xl font-bold'>{product.name}</h1>
          <div className='flex text-yellow-500 my-3 items-center text-md'>
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStarOutline /> <span className='text-black'>(100 customer reviews)</span>
          </div>
          <p className='text-xl text-yellow-900 font-bold my-2'>${product.price.toFixed(2)}</p>
          <p className='opacity-80'>{product.description}</p>
          <div className='flex my-4'>
            <p className='font-semibold text-lg'>Available:</p>
            <span className='pl-4'>{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
          </div>
          <div className='flex my-4'>
            <p className='font-semibold text-lg'>Category:</p>
            <span className='pl-4'>{product.category}</span>
          </div>
          <div className='flex my-4 border-b-2 pb-4'>
            <p className='font-semibold text-lg'>Description:</p>
            <span className='pl-4'>{product.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatuedProduct;

import React, { useState } from 'react';
import { furnitureData } from './Data';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState(furnitureData);
  const navigate = useNavigate();

  const onHandleChange = () => {
    navigate('/products');
  };

  return (
    <>
      <div className='container mx-auto flex flex-col lg:flex-row items-center my-12 lg:my-24 justify-between px-4 lg:px-0'>
        <div className='lg:w-[50%] flex flex-col mb-8 lg:mb-28'>
          <h1 className='text-3xl lg:text-5xl text-slate-800 font-bold'>
            Design Your <br /> Comfort Zone
          </h1>
          <p className='opacity-80 leading-6 lg:leading-9 text-lg lg:text-xl mt-4 lg:mt-8'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
          </p>
          <button onClick={onHandleChange} className='py-2 bg-orange-600 w-24 lg:w-28 text-white rounded-md mt-4 lg:mt-3'>
            SHOP NOW
          </button>
        </div>

        <div className='w-full lg:w-[50%] flex justify-center lg:justify-end'>
          <img className='w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] object-cover' src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg" alt="" />
        </div>
      </div>

      <div className='bg-gray-200 py-10'>
        <div className='container mx-auto px-4 lg:px-0'>
          <div className='flex flex-col relative'>
            <h3 className='text-3xl lg:text-4xl font-bold text-center text-blue-900 pt-6 lg:pt-9'>
              Featured Products
            </h3>
            <div className='bg-orange-700 h-1.5 w-[80px] lg:w-[120px] mx-auto mt-2'></div>
          </div>

          <div className='flex flex-col lg:flex-row lg:justify-around items-center mt-8 lg:mt-20'>
            {data.slice(0, 3).map((item, id) => (
              <div className='mt-10 lg:mt-0 w-full lg:w-[30%] flex justify-center' key={id}>
                <Link to={`/${item.id}`} className='block w-full'>
                  <img className='w-full h-[200px] object-cover hover:brightness-75 transition-all duration-300' src={item.image} alt="" />
                  <div className='flex justify-between py-3'>
                    <p>{item.name}</p>
                    <p className='text-orange-400'>{item.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className='flex justify-center'>
            <button onClick={onHandleChange} className='bg-orange-400 py-2 px-3 text-white rounded-md mt-4'>
              ALL PRODUCTS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

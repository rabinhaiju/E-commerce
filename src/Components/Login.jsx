import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-gray-100'>
      <div className='w-full sm:w-[90%] lg:w-[50%] max-w-[600px] bg-white p-8 shadow-md rounded-lg'>
        <h1 className='text-3xl font-bold mb-6 text-center'>Login</h1>
        <div className='mb-4'>
          <label htmlFor='email' className='block mb-2'>
            Email
          </label>
          <input
            type='text'
            id='email'
            className='w-full px-3 py-2 border rounded-md'
            style={{ borderColor: '#ccc' }}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block mb-2'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='w-full px-3 py-2 border rounded-md'
            style={{ borderColor: '#ccc' }}
          />
        </div>
        <div className='flex flex-col sm:flex-row gap-3'>
          <button className='w-full sm:w-auto bg-yellow-900 text-white py-2 px-4 rounded-md mb-2 sm:mb-0'>
            Login
          </button>
          <button className='w-full sm:w-auto bg-yellow-900 text-white py-2 px-4 rounded-md'>
            Guest User
          </button>
        </div>
        <div className='flex items-center justify-center mt-4'>
          <p className='text-sm text-gray-600'>Not a member yet?</p>
          <Link to='/signup' className='ml-2 text-blue-400'>Sign up here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

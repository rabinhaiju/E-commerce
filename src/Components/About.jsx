import React from 'react';

const About = () => {
  return (
    
    <div className='mb-10'>
      <div className='bg-orange-200'>
        <div className='py-16 container mx-auto px-4 lg:px-0'>
          <h1 className='text-2xl lg:text-4xl text-orange-800 font-bold'>Home / About</h1>
        </div>
      </div>
      
      <div className='container mx-auto my-9 px-4 lg:px-0 lg:flex lg:gap-10 '>
        <div className='flex-1'>
          <img className='w-full h-[600px] object-cover' src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f6786a3aca992.jpeg' alt=''/>
        </div>
        <div className='flex-1 '>
          <h1 className='text-2xl lg:text-4xl font-bold mt-4 lg:mt-0'>Our Story</h1>
          <p className='opacity-80 mt-4 lg:mt-6 lg:text-xl lg:leading-[35px] '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
        </div>
      </div>
    </div>
  );
}

export default About;

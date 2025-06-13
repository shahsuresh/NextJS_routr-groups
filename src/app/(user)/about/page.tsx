import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <>

   <div className='text-3xl font-bold text-center'>Our Team</div>
   <div className='flex flex-row gap-5'>
  {Array.from({length: 5}).map((_, index) => (
    <div key={index} className='w-75 h-75 bg-emerald-500 rounded-3xl p-3 shadow-2xl relative flex flex-col items-center justify-center'>
    <h1 className='text-3xl font-bold text-center'>Dia Mirza</h1>
    <p className='text-2xl font-bold text-amber-300   text-center'>Software Developer</p>
    <Image src="/profile1.jpg" alt="Suresh Shah" width={150} height={150} className=' object-cover rounded-b-full '/>
   </div>
  ))}
   
   </div>
    
    </>
  )
}

export default AboutPage
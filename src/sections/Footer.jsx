import React from 'react'

const Footer = () => {
  return (
    <section className='bg-slate-100 flex justify-end w-full gap-40 px-20 py-5'>
      <div className='flex flex-col'>
        <h3 className='font-medium text-md'>Quick Links</h3>
        <a className='text-sm'>Home </a>
        <a className='text-sm'>About Us </a>
        <a className='text-sm'>Services </a>
        <a className='text-sm'>Blog </a>
        <a className='text-sm'>Privacy Policy </a>
        
      </div>
      <div className='flex flex-col'>
        <h3 className='font-medium text-md'>Customer Service</h3>
        <a className='text-sm'>Contact Us </a>
        <a className='text-sm'>FAQ </a>
        <a className='text-sm'>Product Information </a>
        <a className='text-sm'>Help & Support </a>
        <a className='text-sm'>Essential Documentations </a>
        
      </div>
      <div className='flex flex-col'>
        <h3 className='font-medium text-md'>Contact Information</h3>
        <a className='text-sm'>2118 Thornridge Cir. Syracuse, </a>
        <a className='text-sm'>Connecticut 35624 </a>
        <a className='text-sm'>(702) 555-0122 </a>
        <a className='text-sm'>amaspace01@gmail.com </a>
      </div>
    </section>
  )
}

export default Footer
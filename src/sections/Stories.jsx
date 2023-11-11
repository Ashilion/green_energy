import React from 'react'
import { Button } from '../components/ui/button'

const Stories = () => {
  return (
    <section className='flex flex-col w-full p-20'>
      <div className='flex justify-between w-full'>
        <h2 className='text-6xl font-palanquin max-w-[500px]'>Our Stories Speak to the Effectiveness of our Services</h2>
        <p className='text-xl max-w-[400px]'>Have questions or need more information? We're here to help. Contact us today to discuss your green energy needs.</p>
      </div>
      <div className='mt-10'>
        <Button variant="secondary" size="lg">BOOK A FREE CONSULTATION</Button>
        </div>
    </section>
  )
}

export default Stories
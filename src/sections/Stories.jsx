import React from 'react'
import { Button } from '../components/ui/button'
import ImageCard from '../components/ImageCard'

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
      <div className='min-h-[300px]  mt-10 flex justify-center'  >
        <div className={`bg-cover bg-center bg-[url("assets/panneaux.jpg")] rounded-full flex-none w-[200px] h-[200px]  top-15 left-[420px]`} ></div>
        <div className={`bg-cover bg-center bg-[url("assets/moulin.jpg")] rounded-full flex-none w-[180px] h-[180px]  top-0 right-20`}></div>
        <div className={`bg-cover bg-center bg-[url("assets/panneaux.jpg")] rounded-full flex-none w-[150px] h-[150px]  bottom-0 left-[200px]`}></div>
        <div className={`bg-cover bg-center bg-[url("assets/moulin.jpg")] rounded-full flex-none w-[130px] h-[130px]  bottom-20 right-[200px]`}></div>
        <div className={`bg-cover bg-center bg-[url("assets/moulin.jpg")] rounded-full flex-none w-[500px] h-[330px] `}></div>
      </div>

      <div className='mt-20 w-full flex justify-center'>
        <h1 className='text-6xl  text-center'>Knowledge is Power 
          <br />
          Especially when it's Green
        </h1>
      </div>
      <div className='flex w-full mt-20 gap-10'>
        <div className=' flex flex-col flex-1 min-h-[400px]  rounded-3xl'>
          <h3 className='text-lg font-medium'>The Benefits of Solar Energy</h3>
          <p className='text-md my-4'>Discover how solar energy works, its incredible benefits...</p>
          <ImageCard />
        </div>
        <ImageCard />
        <div className='flex flex-col flex-1 min-h-[400px]  rounded-3xl'>
          <h3 className='text-lg font-medium'>A Greener Way to Get Around</h3>
          <p className='text-md my-4'> Dive into the world of electric vehicles, their environmental…</p>
          <ImageCard />
        </div>
        <ImageCard />
      </div>
    </section>
    
  )
}

export default Stories
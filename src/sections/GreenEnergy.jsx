import React from 'react'
import { Button } from '../components/ui/button'
import { arrowRight } from '../assets/icons'
import ImageCard from '../components/ImageCard'

const GreenEnergy = () => {
  return (
    <section className='flex-col w-full '>
      <div className='flex'>
      <div className=' flex-1 p-10'>
        <p className=' font-montserrat max-w-sm'>At Clean Energy Solutions, we are passionate about the environment and commited to providing sustainable energy solutions for a better tomorrow</p>
      </div>
      <div className='flex-1 flex-col p-10'>
        <h1 className='flex-1 text-6xl'>We Strive to Lead the Way in the Green Energy Industry</h1>
        <div className='flex flex-1 mt-8 gap-10 items-center'>
          <Button variant="secondary" size="lg" >GET IN TOUCH</Button>
          <a className='flex gap-4 cursor-pointer'> SEE OUR SERVICES  <img width={16}src={arrowRight}/></a>
        </div>
      </div>
      </div>
      <div className='flex flex-1 p-10 gap-5 '>
        <div className='flex flex-auto gap-5 min-h-[200px]'>
          <ImageCard />
          <div className='flex-1 max-w-xs'>
            <p>We take pride in delivering reliable, cost effective, and environmentally friendly alternatives to traditional power sources</p>
          </div>
        </div>
        <div className='flex-1'></div>
      </div>
      <div className='grid grid-cols-4  gap-5 p-10'>
        <ImageCard />
        <div className='bg-[#e3c1fd] rounded-3xl col-span-2 p-10'>
          <h2 className='text-6xl font-palanquin  '>Explore Our Portfolio of Succesful Green Energy Projects</h2>
          <p className='text-xl mt-16'>Showcasing our dedication to sustainability and the positive impact we've had on local communities. See how we've made a difference.</p>
        </div>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <div className= 'rounded-3xl col-span-2 bg-card-background p-20'>
          <h3 className='text-3xl text-montserrat '>Over The Last <br/>Decade</h3>
          <div className='flex mt-10 items-center'>
            <p className='flex-1 text-8xl font-bold text-palanquin'>50 %</p>
            <p className='flex-1 text-lg text-montserrat mr-5 '>Renewable energy capacity has grown</p>
          </div>
          <a className='flex gap-4 cursor-pointer mt-10 '> SEE STATISTICS <img width={16}src={arrowRight}/></a>
        </div>
      </div>
    </section>
  )
}

export default GreenEnergy
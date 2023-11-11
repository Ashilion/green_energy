import React from 'react'
import ImageCard from '../components/ImageCard'
import { Button } from '../components/ui/button'
import { leftCurret, rightCurret } from '../assets/icons'

const Hero = () => {
  return (
    <div className='flex w-full min-h-[70vh] bg-slate-100 '>
      
      <div className=' bg-card-background flex-1 m-10 rounded-3xl p-12'>
        <h2 className='text-8xl font-palanquin'>Welcome to Clean Energy Solutions</h2>
        <p className=' text-lg mt-5 mb-5 font-montserrat'>Powering the future, Sustainably</p>
        <Button>LEARN MORE</Button>
      </div>
      <div className='flex flex-1 flex-col m-10 '>
        <ImageCard image={"moulin.jpg"} />
        <div className='flex flex-1 pt-10' >
            <ImageCard image={"moulin.jpg"} />
          <div className='flex flex-col flex-1 pl-10 justify-between gap-10 h-full' >
            <p className='font-montserrat'>With a focus on innovation and ecofriendly practices, we strive to lead the way in the green energy industry</p>
            <div className='flex gap-4'>
              <div className='rounded-full w-8 h-8 flex justify-center items-center bg-white'><img width={16} height={16} src={leftCurret}/></div>
              <div className='rounded-full w-8 h-8 flex justify-center items-center bg-white'><img width={16} height={16} src={rightCurret}/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Hero
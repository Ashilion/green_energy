import React from 'react'
import { Button } from '../components/ui/button'
import {Input} from '../components/ui/input'
import { InstagramLogoIcon , TwitterLogoIcon, GitHubLogoIcon, FigmaLogoIcon} from '@radix-ui/react-icons'


const Contact = () => {
  return (
    <section className='flex w-full max-lg:flex-col'>
      <div className=' bg-card-background flex-1 m-10 rounded-3xl p-12 min-h-[400px]'>
        <div className='flex flex-col justify-between h-full'>
          <div>
            <h2 className='text-xl font-bold font-palanquin'>Lamaspace</h2>
            <p className=' text-sm mt-5 mb-5 font-montserrat max-w-sm'>
              Join us in making a positive impact on the
              environment. Request a free consultation
              and let us help you transition to clean,
              renewable energy sources. Together, we can
              build a cleaner, greener future for all.
            </p>
          </div>
          <div className='flex gap-10'>
            <InstagramLogoIcon/>
            <TwitterLogoIcon />
            <GitHubLogoIcon />
            <FigmaLogoIcon />
          </div>
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-end pl-20 p-12'>
        <h1 className='text-4xl'>Stay Informed</h1>
        <Input placeholder ="Enter your email" type="email" className="mt-8 rounded-full"/>
        <Button variant="secondary" className="mt-4">SUBSCRIBE NOW</Button>
      </div>

    </section>
  )
}

export default Contact
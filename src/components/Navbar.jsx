import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const data = [
    {
      name: "Home",
      lien:"#test"
    },
    {
      name: "About",
      lien:"#test"
    },
    {
      name: "Feature",
      lien:"#test"
    },
    {
      name: "Contact",
      lien:"#test"
    },
    {
      name: "Blog",
      lien:"#test"
    },
    {
      name: "Product",
      lien:"#test"
    }
  ]
  return (
    <header className = "px-4 py-8 absolute z-10 w-full bg-slate-100">
      <nav className='flex flex-row justify-between items-center max-container'>
        <div className='' >
          <img src={logo} alt='logo' />
        </div>

        <ul className='mt-3 flex flex-1 justify-end items-center max-lg:hidden gap-7 '>
          {data.map((item)=>(
            <li className='font-montserrat leading-normal text-lg text-slate-gray'>
              <a href={item.lien}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
    </nav>
    </header>
  )
}

export default Navbar
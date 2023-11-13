/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <nav className='w-full bg-[#0a192f] text-white h-20 p-2 flex justify-between items-center' >

        <div>
        <h1 className='text-4xl'>navBar.co</h1>
        </div>

        <ul className='hidden md:flex gap-2'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Skills</li>

        </ul>

        {/* hamburgermenu  */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {/* <FaBars/> */}
            {!open ? <FaBars/> : <FaTimes/> }
        </div>

      {/* mobile menu  */}
      <ul className={!open ? "hidden" : ' absolute top-0 left-0 flex flex-col w-full h-screen bg-[#0a192f] justify-center items-center'}>
            <li className="py-4 text-4xl">Home</li>
            <li className="py-4 text-4xl">About</li>
            <li className="py-4 text-4xl">Contact</li>
            <li className="py-4 text-4xl">Skills</li>

        </ul>

    </nav> 
  )
}

export default Navbar
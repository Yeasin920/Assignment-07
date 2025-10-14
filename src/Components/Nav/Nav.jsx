import { useState } from 'react'


function Nav() {


  return (
    <>
     <div className="navbar bg-base-100 shadow-sm">
        <div className=' flex justify-between w-[1440px] mx-auto '>

        
  <a className=" text-[24px] font-bold items-center">CS — Ticket System</a>
   
   <div className='flex gap-4 items-center'>
    <ul tabIndex="-1"
        className="flex gap-4 text-gray-600">
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
      </ul>
      <button className='btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>+ New Ticket</button>
        </div>
   </div>
</div>
    </>
  )
}

export default Nav

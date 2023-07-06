"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {

  const handleSignIn = () =>{}
  
  return (
    <div className='w-full z-10 absolute'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center
      sm:px-16 px-6 py-4'>
        <Link href="/" className='flex justify-center items-center'
        >

  
        </Link>

        <CustomButton
        title="Sign In"
        btntype='button'
        containerStyles='text-primary-blue rounded-full 
        bg-white min-w-[130px]'
        handleClick={handleSignIn}
        />

      </nav>
       
    </div>
  )
}

export default Navbar
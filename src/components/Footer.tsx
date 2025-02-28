import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-600 flex items-center bottom-0 absolute w-full justify-between text-gray-200 text-center py-4">
      <a className='text-sm hover:text-white hover:text-bold ml-5' href="#">DISCLAIMER</a>
      <a className='text-sm hover:text-white hover:text-bold' href="#">REIS</a>
      <a className='text-sm hover:text-white hover:text-bold' href="#">RBS</a>
      <a className='text-sm hover:text-white hover:text-bold' href="#">ICMS</a>
      <a className='text-sm hover:text-white hover:text-bold' href="#">TMS</a>
      <p>&copy; {2021} CRIS. All rights reserved.</p>
      <a className='text-sm hover:text-white hover:text-bold' href="#">NGET</a>
      <a className='text-sm hover:text-white hover:text-bold' href="#">RCT</a>
      <a className='text-sm hover:text-white hover:text-bold' href="#">WECRS</a>
      <a className='text-sm hover:text-white hover:text-bold' href="#">FOIS</a>
      <a className='text-sm hover:text-white hover:text-bold mr-5' href="#">NDMA</a>
    </footer>
  )
}

export default Footer
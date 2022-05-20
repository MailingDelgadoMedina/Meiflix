
import React from 'react'
import '../../src/App.css'

function Nav() {
  return (
    <div className='nav fixed top-0 p-3 w-full h-16 z-100 bg-nflb ease-in duration-100'>
      <div className='nav-contents flex justify-between'>

      <img 
      className='fixed left-0 w-40 top-0 cursor-pointer object-contain pl-5'
      src="https://res.cloudinary.com/programandoconmei/image/upload/v1653033495/meiflix/tlclear_yftfie.png"
              alt="Logo"
                />
        <img
        className='w-8 h-8 fixed right-5 cursor-pointer'
        src='https://res.cloudinary.com/programandoconmei/image/upload/v1652774834/meiflix/avatar_u3wclb.jpg'
        alt='avatar'
        />


      </div>


            </div>
  )
}

export default Nav
import React from 'react'

export default function Footer() {
    return (
      <div className='w-full h-[264px] shadow-md bg-[#222] absolute flex p-5 justify-between items-center'>
          <div className='flex-1 font-bold text-2xl'>
              HerTech
          </div>
  
          <div className='flex justify-evenly flex-1 text-base'>
              <Link to="/">
                  <p >Job Listing</p>
              </Link>
  
              <Link to="/login">
                  <p>Find a mentor</p>
              </Link>
  
              <Link to="/signup">
                  <p>Find a community</p>
              </Link>
  
              <p>More</p>
              <Button size="small" variant="contained">Post a job</Button>
              
  
          </div>
      </div>
    )
  }
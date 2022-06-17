import React from 'react'
import Hero_image from '../images/Hero_img.png'


import {ReactComponent as Audi} from '../images/Audi.svg'
import {ReactComponent as Netflix} from '../images/Netflix.svg'
import {ReactComponent as Maxar} from '../images/Maxar.svg'
import {ReactComponent as SpaceX} from '../images/SpaceX.svg'
import {ReactComponent as Netflix2} from '../images/netflix2.svg'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const commonStyles = {
  bgcolor: '#D9D9D9',
  m: 1,
  borderColor: '#D9D9D9',
  width: '2px',
  height: '2rem',
};

const classNames = {
  bigText:"text-md",
  smallText:"text-sm"
}
export default function Home() {
  return (
   <div className='w-full h-screen '>
     <div className='w-full h-[600px] bg-[#101225] top-[115px] flex'>
       <div className='m-10'>
       <h1 className='text-white font-bold text-7xl'>Hire <span className='text-violet-700'>female</span> tech-talent on demand</h1>
       <p className='text-white text-lg'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries </p>
       <div className='flex gap-3 mt-4'>
         <Button style={{borderRadius: '30px', textTransform: 'none', backgroundColor: '#3754DB'}} size="small" variant="contained">Get started</Button>
         <Button style={{borderRadius: 30, textTransform: 'none', backgroundColor: '#E1E8FF', color: '#5770E2'}} size="small" variant="contained">See job listing</Button>
       </div>
       <div class="flex gap-3 mt-4">
         <div className='text-white flex flex-col '><span className={classNames.bigText}>100k+</span> <span className={classNames.smallText}>Jobs listed</span></div>
         <span><Box sx={{ ...commonStyles, borderLeft: 1 }} /></span>
         <div className='text-white flex flex-col'><span className={classNames.bigText}>262+</span> <span className={classNames.smallText}>Members</span></div>
         <span ><Box sx={{ ...commonStyles, borderLeft: 1 }} /></span>
         <div className='text-white flex flex-col'><span className={classNames.bigText}>5+</span> <span className={classNames.smallText}>Countries</span></div>
       </div>

       </div>
       <div>
       <img src= {Hero_image} alt='hero_image' className='mt-7'></img>

       </div>
       
      
     </div>
    {/* <h1 className='text-4xl font-bold text-gray-600'>Home</h1> */}
    <h2>COMPANIES HIRING ON HER TECH</h2>
    <div className='flex justify-between gap-2 '>
      <Audi opacity={0.5}/>
      <Netflix/>
      <Maxar opacity={0.5}/>
      <Audi opacity={0.5}/>
      <SpaceX opacity={0.5}/>
      <Audi opacity={0.5}/>
      <Netflix2 opacity={0.5}/>
      <SpaceX opacity={0.5}/>
    </div>

    <div className='w-[723px] h-[928px] bg-[#F7FAFC] rounded-[32px] mt-10'>
      <h2 className='font-semibold text-2xl'>1,000,000+ jobs available for you</h2>
      <p>Lorem ipsum is the placeholder commonly used in the graphic</p>
      

    </div>
   </div>
  )
}


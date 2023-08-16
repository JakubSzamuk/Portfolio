import React, { useEffect, useRef } from 'react'
import { motion, useDragControls } from 'framer-motion'
import { start } from 'repl'
import { Browsers, DeviceMobile, HardDrives } from '@phosphor-icons/react'

type PropObject = {
  icon: string,
  title: string,
  description: string
}

const Service = (props: PropObject) => {


  return (
    <div className={`w-full h-full hover:shadow-xl shadow-xl md:shadow-none transition-all rounded-lg p-4 ${props.title ? "" : "collapse"} justify-center items-center`}>
      <div className='h-full w-full flex items-center flex-col sm:flex-row items-center justify-center'>
        <div className='rounded-full slightContrast p-2'>
          {props.icon == "browser" ? <Browsers aria-label='Browser Icon' size={44} color="#ddd" /> : props.icon == "hosting" ? <HardDrives aria-label='Server Icon' size={44} color="#ddd" /> : props.icon == "app" ? <DeviceMobile aria-label='Mobile Phone Icon' size={44} color="#ddd" /> : <></>}
        </div>
        <div className='h-full p-4 mt-4 sm:mt-0 sm:ml-4 flex w-[80vw] sm:w-full slightContrast rounded-lg flex-col'>
          <h2 className='textCol displayFont text-2xl'>{props.title}</h2>
          <p className='textCol serifFont text-[15px] mt-1'>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Service

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
    <div className={`w-full h-48 hover:shadow-xl shadow-xl md:shadow-none transition-all rounded-lg p-4 ${props.title ? "" : "collapse"}`}>
      <div className='h-full flex items-center'>
        <div className='rounded-full slightContrast p-2'>
          {props.icon == "browser" ? <Browsers size={44} color="#ddd" /> : props.icon == "hosting" ? <HardDrives size={44} color="#ddd" /> : props.icon == "app" ? <DeviceMobile size={44} color="#ddd" /> : <></>}
        </div>
        <div className='h-full p-4 ml-4 flex w-full slightContrast rounded-lg flex-col'>
          <h2 className='textCol displayFont text-2xl'>{props.title}</h2>
          <p className='textCol serifFont text-[15px] mt-1'>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Service

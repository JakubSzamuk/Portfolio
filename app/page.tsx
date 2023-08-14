'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ProjectPost from './ProjectPost'
import axios from 'axios'

export default function Home() {

  const [currentPosts, setCurrentPosts] = useState()  

  const fetchData = async () => {
    axios.get("/api/projects").then((res) => {
      setCurrentPosts(res.data)
    })
  }
  console.log(currentPosts)
  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div className='w-screen flex flex-col md:items-center'>



      <div className='md:w-[87vw] 2xl:w-[60vw] shadow-xl mt-16 md:mt-32 items-center flex flex-col lg:p-16'>
        <div className='relative w-[82vw] lg:w-[80vw] xl:w-[50vw]'>
          <h1 className='textCol displayFont text-[8vw] sm:text-4xl md:text-6xl sm:w-full md:w-[48vw]'>Web <br className='sm:hidden' /> Design, Developement, implementation.</h1>
          <div className='flex flex-col sm:flex-row w-full items-center mt-2'>
            <p className='textCol serifFont w-full sm:w-[65%] md:w-[85%]'>Hello, My name is Jakub Szamuk, I am a full stack developer studying in college.</p>
            <div className='textCol flex-row flex border-b-[1px] w-[20%] sm:w-[15%] md:w-[15%] mt-4 sm:mt-0 justify-center items-center pr-1 static sm:absolute right-0'>
              <span className="material-symbols-outlined">location_on</span>
              <p>Leeds</p>
            </div>
          </div>
          <div className='flex mt-2 w-full items-center'>
            <a className='textCol text-4xl' href='https://github.com/JakubSzamuk' target='_blank'><ion-icon name="logo-github"></ion-icon></a>
            <a className='textCol text-4xl' href='https://stackoverflow.com/users/21986240/jakub-szamuk' target='_blank'><ion-icon name="logo-stackoverflow"></ion-icon></a>
          </div>
          <div className='mt-2'>
            <p className='textCol displayFont text-3xl'>About me</p>
            <p className='textCol serifFont mt-4 text-xl'>I am a young developer and engineer studying at college, I have worked a lot with javascript frameworks like react, react native and nextjs. I love creating websites (and drinking coffee ☕!), see my work below!</p>
            <p className='textCol displayFont text-3xl mt-8'>My skillset:</p>
            <ul className='pl-4 textCol grid grid-rows-6  sm:grid-rows-3 grid-flow-col sm:h-[10vh] sm:max-h-[10vh] list-disc serifFont text-xl'>
              <li>React</li>
              <li>React-Native</li>
              <li>Nextjs</li>
              <li>Firebase</li>
              <li>Pocketbase</li>
              <li>SQL</li>
              <li>Git</li>
              <li>Github</li>
              <li>Vite</li>
            </ul>

            <p className='textCol displayFont text-3xl mt-8'>
              My Projects:
            </p>
            <div className='grid mt-8 gap-2'>
              {currentPosts ? currentPosts.map((project: object) => <ProjectPost githublink={project.githubLink} id={project.id} title={project.Title} description={project.description} mobileApp={project.mobileApp} hostingLink={project.hostingLink} date={project.date} image={project.image} />) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

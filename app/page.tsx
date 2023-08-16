'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ProjectPost from './ProjectPost'
import axios from 'axios'
import Service from './Service'
import { StringMappingType } from 'typescript'

type Post = {
  id: string,
  githubLink: string,
  Title: string,
  mobileApp: boolean,
  date: string,
  image: string,
  hostingLink: string,
  description: string,
}
type Service = {
  title: string,
  description: string,
  icon: string
}

export default function Home() {

  const [currentPosts, setCurrentPosts] = useState<Post[]>()  
  const [services, setServices] = useState<Service[]>()

  const fetchData = async () => {
    axios.get("/api/projects").then((res) => {
      setCurrentPosts(res.data)
    })
    axios.get("/api/services").then((res) => {
      setServices(res.data)
    })
  }

  console.log(services)
  useEffect(() => {
    fetchData()
  }, [])
  
  // let services = [
  //   {
  //     title: "Web Developement",
  //     description: "I can create a perfect, performant website that is fully accessible with full SEO for maximum potential and a content-management system for an affordable price!",
  //     icon: "browser",
  //   },
  //   {
  //     title: "App developement",
  //     description: "I can create a beautiful, fast app for android and ios packed full of features to your specification quickly!",
  //     icon: "app",
  //   },
  //   {
  //     title: "Hosting",
  //     description: "I can help you setup hosting with HTTPS and a domain for your website or include it with a website I created for you!",
  //     icon: "hosting",
  //   },
  //   {
  //     title: "",
  //     description: "",
  //     icon: "",
  //   },
  // ]

  return (
    <div className='w-screen flex flex-col md:items-center'>
      <div className='md:w-[87vw] 2xl:w-[60vw] shadow-xl mt-16 md:mt-32 items-center flex flex-col lg:p-16'>
        <div className='relative w-[82vw] lg:w-[80vw] xl:w-[50vw]'>
          <h1 className='textCol displayFont text-[8vw] sm:text-4xl md:text-6xl sm:w-full md:w-[48vw]'>Web <br className='sm:hidden' /> Design, Developement, <span className='accentCol'>implementation.</span></h1>
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
            <h2 className='textCol displayFont text-3xl'>About me:</h2>
            <p className='textCol serifFont mt-4 text-xl'>I am a young developer and engineer studying at college, I have worked a lot with javascript frameworks like react, react native and nextjs. I love creating websites (and drinking coffee ☕!), see my work below!</p>
            <h3 className='textCol displayFont mt-8 text-3xl'>Services I offer:</h3>
            <div className='grid grid-flow-row 2xl:grid-cols-2 2xl:grid-rows-2 mt-4 w-full justify-center'>
              {services ? services.map((service, index) => (<Service key={index} {...services[index]}/>)) : null}
            </div>
            <p className='displayFont textCol text-xl mt-4'>If you are interested be sure to contact me!</p>
            <h4 className='textCol displayFont text-3xl mt-8'>My skillset:</h4>
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

            <h5 className='textCol displayFont text-3xl mt-8'>
              My Projects:
            </h5>
            <div className='grid mt-8 gap-2'>
              {currentPosts ? currentPosts.map((project) => <ProjectPost githublink={project.githubLink} id={project.id} title={project.Title} description={project.description} mobileApp={project.mobileApp} hostingLink={project.hostingLink} date={project.date} image={project.image} />) : null}
            </div>
            <h6 className='textCol displayFont text-3xl mt-8'>
              Contact me!
            </h6>
            <p className='textCol mt-4 serifFont text-xl'>Interested in working with me?</p>
            <div className='flex flex-col md:flex-row justify-center gap-[8vh] mt-6'>
              <div className='textCol serifFont text-[4.5vw] sm:text-xl bg-secondary rounded-lg p-8'>
                <p>Send me an email!</p>
                <a className='displayFont w-full' href='mailto:lavaproofJakub1@gmail.com'>lavaproof<br className='visible sm:hidden' />Jakub1@gmail.com</a>
              </div>
              <div className='textCol serifFont text-xl bg-secondary rounded-lg p-8'>
                <p>Or call me!</p>
                <p className='displayFont'>07498714126</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

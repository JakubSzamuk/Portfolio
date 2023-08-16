'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

export default function ProjectPost(props: any) {
  return (
    <a className="hover:shadow-2xl shadow-2xl xl:shadow-none w-[80vw] xl:w-[50vw] 2xl:w-[84%] p-8 hover:cursor-pointer flex flex-col 2xl:flex-row rounded-3xl transition-all" aria-label="Link to the websites Hosting" href={props.hostingLink}> 
      <div className={`flex rounded-2xl justify-center w-full overflow-clip ${props.mobileApp ? " min-w-min 2xl:w-[44rem]" : "2xl:w-[44rem]"}`}>
        {props ? (
          <Image className="2xl:w-full" width={100} alt={`${props.altText}`} height={60} id="image" src={`/storage/${props.id}/${props.image[0]}`} />
        ) : null}
      </div>
      <div className="flex flex-col 2xl:ml-4 w-full mt-4 2xl:mt-0">
        <div className="flex relative flex-col">
          <h5 className="textCol text-[8vw] sm:text-4xl displayFont">{props.Title}</h5>
          <a aria-label="Repository Link to Github" href={`${props.githublink}`} className="textCol sm:absolute self-end text-3xl"><ion-icon name="logo-github"></ion-icon></a>
          <h5 className="self-end textCol displayFont text-xl">{props.date}</h5>
        </div>
        <p className="textCol displayFont text-xl mt-4">{props.description}</p>
      </div>
    </a>
  )
}

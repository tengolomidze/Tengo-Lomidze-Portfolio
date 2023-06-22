import icon from "../assets/icon.webp"
import { useState} from "react";
import sitesJson from "../sites.json" 

import Site from "./Site";

import { AiOutlinePoweroff } from 'react-icons/ai';
import { BiMessageAlt } from 'react-icons/bi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { BsFacebook,BsLinkedin, BsGithub, BsYoutube } from 'react-icons/bs';




const Nav = (props:any) => {
    const date = new Date();
    const showTime = date.getHours().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
    + ':' + date.getMinutes().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })

    const showDay = date.getDay().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      }) + "/" + date.getMonth().toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      }) + "/" + date.getFullYear()

    const [isNews, setIsNews] = useState(false)
    const [isMenu, setIsMenu] = useState(false)

 
    return (
        <>
            <div className=" z-10 flex items-center justify-between fixed h-10 w-screen bottom-0 left-0  bg-white dark:bg-zinc-900 bg-opacity-100">
                <div className="flex items-center h-full">
                    <div onClick={() => setIsMenu(!isMenu)} className=" hover:bg-gray-300 dark:hover:bg-zinc-700 bg-opacity-70 duration-200  h-full py-1 flex items-center justify-center">
                        <img  src="https://evo.audio/wp-content/uploads/2016/05/Windows-10-Icon.png" className="h-3/4 mx-3" alt="tengo"/> 
                    </div>
                    
                </div>

                <div className="h-full flex justify-center items-center  px-2">
                    <div onClick={() => props.setDark(!props.dark)} className="dark:text-white h-full flex justify-center flex-col hover:bg-gray-400 dark:hover:bg-zinc-700 duration-300 bg-opacity-70 px-2">
                        {props.dark ? <MdDarkMode className="dark:text-white text-2xl"/> : <MdLightMode className="dark:text-white text-2xl"/> }
                    </div>
                    <div className="dark:text-white h-full flex justify-center flex-col hover:bg-gray-400 dark:hover:bg-zinc-700 duration-300 bg-opacity-70 px-2">
                        <p className="text-xs text-center">{showTime}</p>
                        <p className="text-xs text-center">{showDay}</p>
                    </div>
                    <div onClick={() => setIsNews(!isNews)} className="h-full flex justify-center flex-col hover:bg-gray-300 dark:hover:bg-zinc-700 duration-200 bg-opacity-70">
                        <BiMessageAlt className="dark:text-white text-2xl mx-3"/>
                    </div>
                </div>
                
            </div>

            <div className={"p-2 overflow-y-auto  w-72 h-screen fixed right-0 bottom-0 bg-white dark:text-white dark:bg-zinc-900 bg-opacity-75 dark:bg-opacity-75 flex flex-col items-center justify-start duration-500 " + (isNews ? "" : "translate-x-full")}>
                <p className="mt-10 mb-4 dark:text-zinc-200">My other websites:</p>
                
                {sitesJson.map((site, i) => {
                        return <Site key={i} site={site}/>
                })}
                <div className="w-full my-20"></div>
                
            </div>

            <div className={"max-w-[500px] w-5/6 h-[450px] fixed left-0 bottom-0 bg-white dark:bg-zinc-900 bg-opacity-75 dark:bg-opacity-75 flex flex-col items-start justify-between duration-500 " + (isMenu ? "" : "translate-y-full")}>
                
                <div className="flex w-full h-full items-center flex-row justify-center">
                    <div className="flex w-12 h-full items-center flex-col justify-end p-1 bg-zinc-600 dark:bg-zinc-400 dark:bg-opacity-10 bg-opacity-10">
                        <div className="my-1 flex items-center justify-center w-10 h-10 rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-300 dark:hover:bg-opacity-30 hover:bg-opacity-30 duration-200 p-1">
                            <img  src={icon} className="w-full rounded-full" alt="tengo"/> 
                        </div>
                        <div onClick={() => {window.close()}} className="my-1 flex items-center justify-center w-10 h-10 rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-300 dark:hover:bg-opacity-30 hover:bg-opacity-30 duration-200 p-1">
                            <AiOutlinePoweroff  className=" text-2xl text-black dark:text-white"/>
                        </div>
                    </div>
                    <div className="w-full h-full grid grid-nav p-3">
                        <div onClick={() => window.location.href = "https://www.facebook.com/tengo.lomidze.98"} className="h-28 w-28 cursor-pointer flex items-center justify-center  bg-gray-500 hover:bg-white dark:hover:bg-zinc-900 dark:bg-opacity-20 hover:bg-opacity-20  dark:hover:bg-opacity-20 bg-opacity-20 duration-200">
                            <BsFacebook className=" text-sky-500 text-7xl bg-white dark:bg-zinc-900 dark:opacity-75 rounded-full" />
                        </div>
                        <div onClick={() => window.location.href = "https://www.linkedin.com/in/tengo-lomidze-261195232/"} className="h-28 w-28 cursor-pointer flex items-center justify-center  bg-gray-500 hover:bg-white dark:hover:bg-zinc-900 dark:bg-opacity-20 hover:bg-opacity-20  dark:hover:bg-opacity-20 bg-opacity-20 duration-200">
                            <BsLinkedin className=" text-blue-600 text-7xl bg-white dark:bg-zinc-900 rounded-xl" />
                        </div>
                        <div onClick={() => window.location.href = "https://github.com/tengolomidze"} className="h-28 w-28 cursor-pointer flex items-center justify-center  bg-gray-500 hover:bg-white dark:hover:bg-zinc-900 dark:bg-opacity-20 hover:bg-opacity-20  dark:hover:bg-opacity-20 bg-opacity-20 duration-200">
                            <BsGithub className=" text-zinc-400 text-7xl bg-white dark:bg-zinc-900 rounded-full" />
                        </div>
                        <div onClick={() => window.location.href = "https://www.youtube.com/channel/UC8aX2w3VwIpbXWAOe6RxQ6A"} className="h-28 w-28 cursor-pointer flex items-center justify-center  bg-gray-500 hover:bg-white dark:hover:bg-zinc-900 dark:bg-opacity-20 hover:bg-opacity-20  dark:hover:bg-opacity-20 bg-opacity-20 duration-200">
                            <BsYoutube className=" text-red-500 text-7xl" />
                        </div>
                        <div onClick={() => window.location.href = "https://www.instagram.com/lomidze_tengo_"} className="h-28 w-28 cursor-pointer flex items-center justify-center  bg-gray-500 hover:bg-white dark:hover:bg-zinc-900 dark:bg-opacity-20 hover:bg-opacity-20  dark:hover:bg-opacity-20 bg-opacity-20 duration-200">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" className="  text-violet-400  w-20 h-20 bg-white dark:bg-zinc-900 rounded-3xl" />
                        </div>
                    </div>
                </div>

                <div className="w-full h-10"></div>
            </div>
        </>
        
    )
}

export default Nav
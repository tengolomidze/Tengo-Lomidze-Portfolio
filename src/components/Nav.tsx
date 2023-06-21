import news from "../assets/news.webp"
import icon from "../assets/icon.webp"
import { useState} from "react";

import { AiOutlinePoweroff } from 'react-icons/ai';

const Nav = () => {
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
            <div className=" z-10 flex items-center justify-between fixed h-10 w-screen bottom-0 left-0  bg-white bg-opacity-100">
                <div className="flex items-center h-full">
                    <div onClick={() => setIsMenu(!isMenu)} className=" hover:bg-gray-300 bg-opacity-70 duration-200  h-full py-1">
                        <img  src="https://evo.audio/wp-content/uploads/2016/05/Windows-10-Icon.png" className="h-full mx-3" alt="tengo"/> 
                    </div>
                    
                </div>

                <div className="h-full flex justify-center items-center  px-2">
                    <div className="h-full flex justify-center flex-col hover:bg-gray-400 duration-300 bg-opacity-70 px-2">
                        <p className="text-xs text-center">{showTime}</p>
                        <p className="text-xs text-center">{showDay}</p>
                    </div>
                    <div onClick={() => setIsNews(!isNews)} className="h-full flex justify-center flex-col hover:bg-gray-300 duration-200 bg-opacity-70">
                        <img alt="news" src={news} className="h-1/2 mx-3"/>
                    </div>
                </div>
                
            </div>

            <div className={"p-2 w-64 h-screen fixed right-0 bottom-0 bg-white bg-opacity-75 flex flex-col items-center justify-start duration-500 " + (isNews ? "" : "translate-x-full")}>
                <p className="mt-16 mb-4">My other websites:</p>

                <a className="w-full" href="https://tic-tac-toe-by-tengo.netlify.app/"><div className="h-14 w-full flex items-center justify-around my-2 bg-zinc-700 bg-opacity-20 rounded-lg p-2">
                    <img className="h-full" src="/ttt.webp"/>
                    <p className="text-lg text-center">Tic-Tac-Toe</p>
                </div></a>

                <a  className="w-full" href="https://canvas-by-tengo.netlify.app"><div className="h-14 w-full flex items-center justify-around my-2 bg-zinc-700 bg-opacity-20 rounded-lg p-2">
                    <img className="h-full" src="/canvas.webp"/>
                    <p className="text-lg text-center">Canvas</p>
                </div></a>

                <a className="w-full" href="https://canvas-particles-by-tengo.netlify.app/"><div className="h-14 w-full flex items-center justify-around my-2 bg-zinc-700 bg-opacity-20 rounded-lg p-2">
                    <img className="h-full" src="/particles.png"/>
                    <p className="text-lg text-center">Canvas Particles</p>
                </div></a>

                <a className="w-full" href="https://distancetraveled.netlify.app"><div className="h-14 w-full flex items-center justify-around my-2 bg-zinc-700 bg-opacity-20 rounded-lg p-2">
                    <img className="h-full" src="/distance.png"/>
                    <p className="text-lg text-center">Distance Traveled</p>
                </div></a>
            </div>

            <div className={"max-w-[500px] w-5/6 h-96 fixed left-0 bottom-0 bg-white bg-opacity-75 flex flex-col items-start justify-between duration-500 " + (isMenu ? "" : "translate-y-full")}>
                
                <div className="flex w-full h-full items-center flex-row justify-center">
                    <div className="flex w-12 h-full items-center flex-col justify-end p-1 bg-zinc-600 bg-opacity-10">
                        <div className="my-1 flex items-center justify-center w-10 h-10 rounded-md hover:bg-zinc-800 hover:bg-opacity-30 duration-200 p-1">
                            <img  src={icon} className="w-full rounded-full" alt="tengo"/> 
                        </div>
                        <div onClick={() => {window.close()}} className="my-1 flex items-center justify-center w-10 h-10 rounded-md hover:bg-zinc-800 hover:bg-opacity-30 duration-200 p-1">
                            <AiOutlinePoweroff  className=" text-2xl text-black"/>
                        </div>
                    </div>
                    <div className="w-full h-full"></div>
                </div>

                <div className="w-full h-10"></div>
            </div>
        </>
        
    )
}

export default Nav
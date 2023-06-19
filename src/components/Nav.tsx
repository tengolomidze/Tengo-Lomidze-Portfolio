import news from "../assets/news.png"
import icon from "../assets/icon.png"
import { useState } from "react";

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
                        <img  src={icon} className="h-full mx-3 rounded-full"/> 
                    </div>
                    <div className=" hover:bg-gray-300 bg-opacity-70 duration-200  h-full py-1">
                        <img src="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/172206i70472167E79B9D0F/image-size/large?v=v2&px=999" className="h-full mx-3"/>
                    </div>
                </div>

                <div className="h-full flex justify-center items-center  px-2">
                    <div className="h-full flex justify-center flex-col hover:bg-gray-400 duration-300 bg-opacity-70 px-2">
                        <p className="text-xs text-center">{showTime}</p>
                        <p className="text-xs text-center">{showDay}</p>
                    </div>
                    <div onClick={() => setIsNews(!isNews)} className="h-full flex justify-center flex-col hover:bg-gray-300 duration-200 bg-opacity-70">
                        <img src={news} className="h-1/2 mx-3"/>
                    </div>
                </div>
                
            </div>

            <div className={"w-64 h-screen fixed right-0 bottom-0 bg-white bg-opacity-75 flex flex-col items-start justify-between duration-500 " + (isNews ? "" : "translate-x-full")}>

            </div>

            <div className={"w-96 h-96 fixed left-0 bottom-0 bg-white bg-opacity-75 flex flex-col items-start justify-between duration-500 " + (isMenu ? "" : "translate-y-full")}>
            </div>
        </>
        
    )
}

export default Nav
import Nav from "./Nav"
import bgImg from "../assets/bg.webp"
import Windows from "./Windows"
import Applications from "./Applications"
import { useState } from "react"



const Screen = (props:any) => {
    const [refreshTrigger, setRefreshTrigger] = useState(0)
    const [dark, setDark] = useState(true)


    const openNewWindow = (name:string, img:string) => {
        const w = (window.innerHeight > window.innerWidth) ? window.innerWidth  * 0.9 : window.innerHeight * 0.9
        
        let b = true
        for(let i = 0; i < props.windows.length; i++){
            if(props.windows[i] !== null && props.windows[i] !== undefined){
                if(props.windows[i].name === name){
                    b = false
                }
            }
        }

        if(b){
            props.windows.push({
                name: name,
                img: img,
                pos: {x: (window.innerWidth - w)/2, y: (window.innerHeight - w * 0.75)/2}, 
                resizePos: {x: (window.innerWidth - w)/2 + w -24, y: (window.innerHeight - w * 0.75)/2 + w * 0.75 -24}, 
                size: {x: w, y: w * 0.75},
                data: [],
                opened: true
            })
        }
        
    }

    return (
        <div 
            style={ {backgroundImage: `url(${bgImg})`} } 
            className={"w-screen h-screen bg-cover bg-center" + (dark ? " dark" : "")}
        >   
            <Applications refreshTrigger={refreshTrigger} setRefreshTrigger={setRefreshTrigger} openNewWindow={openNewWindow}/>
            <Windows refreshTrigger={refreshTrigger} windows={props.windows} setRefreshTrigger={setRefreshTrigger}/>
            <Nav dark={dark} setDark={setDark}/>
        </div>
    )
}

export default Screen
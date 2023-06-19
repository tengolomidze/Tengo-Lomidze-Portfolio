import Nav from "./Nav"
import bgImg from "../assets/bg.jpg"
import Window from "./Window"
import Application from "./Application"

import { useState } from "react";
import appsJson from "../apps.json"

const Screen = () => {
    const size = {x: Math.floor(window.innerWidth / 48), y: Math.floor(window.innerHeight / 56)}

    appsJson.length = size.x * size.y
    const [apps, setApps] = useState(appsJson)

    return (
        <div 
            style={ {backgroundImage: `url(${bgImg})`} } 
            className="w-screen h-screen bg-cover bg-center"
        >   
            <div className="fixed top-0 left-0 w-full h-full">
                {apps.map((app, i) => 
                {
                    return app ? <Application apps={apps} setApps={setApps} key={i} name={app.name} img={app.img} pos={i} size={size} /> : null
                }
                )}
            </div>
            <Window/>

            <Nav/>
        </div>
    )
}

export default Screen
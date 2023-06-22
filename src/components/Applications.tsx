import { useState } from "react";
import appsJson from "../apps.json"
import Application from "./Application"

const Applications = (props:any) => {
    const appSize = {x: 67, y: 100}
    const size = {x: Math.floor(window.innerWidth / appSize.x), y: Math.floor(window.innerHeight / appSize.y)}
    
    const [apps, setApps] = useState(appsJson.concat(Array(size.x * size.y - appsJson.length).fill(null)))

    return (
        <div className="fixed top-0 left-0 w-full h-full">
            {apps.map((app, i) => 
            {
                return app ? <Application refreshTrigger={props.refreshTrigger} setRefreshTrigger={props.setRefreshTrigger} openNewWindow={props.openNewWindow} appSize={appSize} apps={apps} setApps={setApps} key={i} name={app.name} img={app.img} pos={i} size={size} /> : null
            }
            )}
        </div>
    )
}

export default Applications
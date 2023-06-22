import Window from "./Window"
import {useState, useEffect} from "react"

const Windows = (props:any) => {
    
    
    const [_state, setState] = useState({value: 10});

    const forceUpdate = () => {
        setState(prev => {
            return {...prev}
        })
    }

    useEffect(() => {
        forceUpdate()
      }, [props.refreshTrigger]);

    return (
        <div className="w-full h-full">
            {props.windows.map((window:any, i:number) => 
                    {
                        return window ? (window.opened ? <Window setRefreshTrigger={props.setRefreshTrigger} forceUpdate={forceUpdate} i={i} windows={props.windows} key={i} name={window.name} img={window.img}/> : null) : null
                    }
                    )
            }
        </div>
    )
}

export default Windows
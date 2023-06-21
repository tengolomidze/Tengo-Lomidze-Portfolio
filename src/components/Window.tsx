
import { FiMaximize } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { VscChromeMinimize } from 'react-icons/vsc';
import Draggable from 'react-draggable';

import Skills from './pages/Skills';
import Projects from './pages/Projects';
import TengoLomidze from './pages/TengoLomidze';
const Window = (props:any) => {

    const handleClick = () => {
        props.windows.push( props.windows.splice(props.i, 1)[0]);
        props.forceUpdate()
    }
    

    const handleClose = () => {
        props.windows.push( props.windows.splice(props.i, 1)[0]);
        props.windows.pop()
    }
    const handleStart = () => {
    }
    const handleDrag = (_e:any, data:any) => {
        props.windows[props.i].pos.x += data.deltaX
        props.windows[props.i].pos.y += data.deltaY
        props.windows[props.i].resizePos.x += data.deltaX
        props.windows[props.i].resizePos.y += data.deltaY
        props.forceUpdate()
    }
    const handleStop = () => {

    }

    const handleResizeStart = () => {
    }
    const handleResizeDrag = (_e:any, data:any) => {
        props.windows[props.i].resizePos.x += data.deltaX
        props.windows[props.i].resizePos.y += data.deltaY

        props.windows[props.i].size.x += data.deltaX
        props.windows[props.i].size.y += data.deltaY
        props.forceUpdate()
    }
    const handleResizeStop = () => {
    }

    const handleFullScreen = () => {
        props.windows[props.i].pos.x = 0
        props.windows[props.i].pos.y = 0

        props.windows[props.i].resizePos.x = window.innerWidth - 24
        props.windows[props.i].resizePos.y = window.innerHeight - 64

        props.windows[props.i].size.x = window.innerWidth
        props.windows[props.i].size.y = window.innerHeight - 40

        props.forceUpdate()
    }
    const handleMinimize = () => {
        const w = (window.innerHeight > window.innerWidth) ? window.innerWidth  * 0.9 : window.innerHeight * 0.9

        props.windows[props.i].resizePos.x += w  - props.windows[props.i].size.x
        props.windows[props.i].resizePos.y += w * 0.75 - props.windows[props.i].size.y

        props.windows[props.i].size.x = w 
        props.windows[props.i].size.y = w * 0.75

        props.forceUpdate()
    }

    const getPage = (name:string) => {
        switch(name){
            case "skills":
                return <Skills />
            case "projects":
                return <Projects/>
            case "Tengo Lomidze":
                return <TengoLomidze w={props.windows[props.i].size.x}/>
            default: 
                return <></>
        }
    }

    return (
        <>
            <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            bounds= {{left: -50, top: 0, right: window.innerWidth - 50, bottom: window.innerHeight-100}}
            position={props.windows[props.i].pos}
            grid={[1, 1]}
            scale={1}
            onStart={handleStart}
            onDrag={handleDrag}
            onStop={handleStop}
            >
                
                <div onClick={handleClick} style={{width: props.windows[props.i].size.x, height: props.windows[props.i].size.y, zIndex: props.z }} className='flex flex-col items-start justify-center fixed bg-gray-100 rounded-md border-2 border-gray-400 overflow-auto' >
                    <div className='h-8 w-full bg-white flex items-center justify-center '>
                        <div className='w-full h-full handle relative  z-10 flex p-1 items-center justify-start select-none'>
                            <img alt='file' src={props.img} className='h-full mx-2 pointer-events-none' />
                            <p className='text-xs ml-2'>C:\{props.name}</p>
                        </div>

                        <div className='h-full flex items-center justify-center'>

                            
                            {
                                props.windows[props.i].size.x >= window.innerWidth ? 
                                    <div onClick={handleMinimize} className='hover:bg-gray-300 rounded-md bg-opacity-20 duration-200 h-full flex items-center justify-center px-3'>
                                        <VscChromeMinimize   className=" text-md  text-gray-600"/>
                                    </div>
                                :
                                    <div onClick={handleFullScreen} className='hover:bg-gray-300 rounded-md bg-opacity-20 duration-200 h-full flex items-center justify-center px-3'>
                                        <FiMaximize  className=" text-md   text-gray-600"/>
                                    </div>
                            }
                           

                            <div onClick={handleClose}  className='hover:bg-gray-300 rounded-md bg-opacity-20 duration-200 h-full flex items-center justify-center px-3'>
                                <GrClose  className=" text-md  text-gray-600"/>
                            </div>
                        </div>
                    </div> 
                    <div style={{width: props.windows[props.i].size.x - 10}} className='h-full w-full flex items-center justify-center overflow-y-auto p-2'>
                        {getPage(props.name)}
                    </div>  
                </div>
            </Draggable>
            <Draggable
                axis="both"
                handle=".resize-handle"
                defaultPosition={{x: 0, y: 0}}
                bounds= {{left: props.windows[props.i].pos.x + 250, top: props.windows[props.i].pos.y + 150, right: window.innerWidth, bottom: window.innerHeight}}
                position={props.windows[props.i].resizePos}
                grid={[1, 1]}
                scale={1}
                onStart={handleResizeStart}
                onDrag={handleResizeDrag}
                onStop={handleResizeStop}
            >
                <div className='w-6 h-6  bg-zinc-600 opacity-70 rounded-sm rounded-br-md fixed resize-handle'>

                </div>
            </Draggable>  
        </>
  )
}

export default Window
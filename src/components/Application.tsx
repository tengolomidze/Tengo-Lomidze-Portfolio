import Draggable from 'react-draggable';

const Application = (props:any) => {
    let position = {x: props.pos % props.size.y * 48, y: Math.floor(props.pos/props.size.y) * 56}

    const handleStart = (e:any, data:any) => {

    }
    const handleDrag = (e:any, data:any) => {
        position.x += data.deltaX
        position.y += data.deltaY
    }
    const handleStop = (e:any, data:any) => {
        setApps()
    }
   
    return (
        <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        bounds= {{left: 0, top: 0, right: window.innerWidth - 48, bottom: window.innerHeight-56}}
        position={position}
        grid={[1, 1]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
        >
            <div className="p-1 w-12 h-14 m-1 flex flex-col fixed top-0 left-0 items-center justify-evenly handle">
                <img className="w-full pointer-events-none" unselectable='on'  src={props.img}/>
                <p className="select-none text-sm text-center text-white">{props.name}</p>
            </div>
        </Draggable>
    )
}

export default Application
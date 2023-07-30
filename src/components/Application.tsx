import Draggable from 'react-draggable';

const Application = (props:any) => {
    let position = {x: props.pos % props.size.x * props.appSize.x, y: Math.floor(props.pos/props.size.x) * props.appSize.y}
    let clickPos = {x: 0, y:0}

    const handleStart = (_e:any, data:any) => {
        clickPos = {x: data.x, y: data.y}
    }

    const handleDrag = (_e:any, data:any) => {
        position.x += data.deltaX
        position.y += data.deltaY
    }
    const handleStop = (_e:any, data:any) => {
        let newPos = Math.floor((position.x + props.appSize.x/2)/props.appSize.x) + Math.floor((position.y + props.appSize.y/2)/props.appSize.y) * props.size.x

        if(props.apps[newPos] !== null){
            newPos = props.pos
        }
        
        if(clickPos.x === data.x && clickPos.y === data.y){
            props.openNewWindow(props.name, props.img)
            props.setRefreshTrigger(props.refreshTrigger + 1)
        }else{
            props.setApps((prev:any) =>
            prev.map((el:any, i:number) => {
                if(i === newPos){
                    return props.apps[props.pos]
                }else if (i === props.pos){
                    return null
                }else{
                    return el
                }
        }));
        }
    }
   
    return (
        <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        bounds= {{left: 0, top: 0, right: window.innerWidth - props.appSize.x, bottom: window.innerHeight-props.appSize.y}}
        position={position}
        grid={[1, 1]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
        >
            <div style={{width: props.appSize.x, height: props.appSize.y}} className=" text-raleway hover:bg-zinc-700  hover:bg-opacity-30 rounded-md placeholder:m-1 flex flex-col fixed top-0 left-0 items-center justify-evenly handle">
                <img alt='file' className=" rounded-md w-3/4 h-1/2 box-content pointer-events-none" unselectable='on'  src={props.img}/>
                <p className="leading-3 tracking-tight select-none text-sm text-center text-white">{props.name}</p>
            </div>
        </Draggable>
    )
}

export default Application
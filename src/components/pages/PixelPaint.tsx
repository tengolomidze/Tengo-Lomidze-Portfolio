import { useRef,useEffect } from 'react'

const PixelPaint = (props:any) => {
    const canvasRef = useRef(null)
    let clicked = false

    useEffect(() => {
        const canvas:any = canvasRef.current
        const context = canvas.getContext('2d')

        context.fillStyle = '#ffffff'
        context.fillRect(0, 0, context.canvas.width, context.canvas.height)

        window.addEventListener("pointerdown", () => {clicked = true})
        window.addEventListener("mouseup", () => {clicked = false})

        for(let i = 0; i < props.window.data.length; i++){
            context.fillStyle = props.window.data[i].color
            context.fillRect( props.window.data[i].x, props.window.data[i].y, 10, 10)
        }

        window.addEventListener("touchmove", (e) => {
            if(clicked){
                context.fillStyle = '#0f0f0f'
                context.fillRect(e.changedTouches[0].clientX - props.window.pos.x - 14, e.changedTouches[0].clientY - props.window.pos.y - 45, 10, 10)
                props.window.data.push({x: e.changedTouches[0].clientX - props.window.pos.x - 12, y: e.changedTouches[0].clientY - props.window.pos.y - 40, color: "#0f0f0f"})
                
            }
        })
        window.addEventListener("pointermove", (e) => {
            if(clicked){
                context.fillStyle = '#0f0f0f'
                context.fillRect(e.clientX - props.window.pos.x - 14, e.clientY - props.window.pos.y - 45, 10, 10)
                props.window.data.push({x: e.clientX - props.window.pos.x - 12, y: e.clientY - props.window.pos.y - 40, color: "#0f0f0f"})
                
            }
        })
    }, [])

    return (
        <div className='w-full h-full flex items-start justify-start'>
            <canvas className=' pointer-events-none'  ref={canvasRef} {...props}/>
        </div>
    )
}

export default PixelPaint

import { FiMaximize } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { VscChromeMinimize } from 'react-icons/vsc';
import Draggable from 'react-draggable';
import useWindowDimensions from '../scripts/useWindowDimensions';

const Window = () => {
    const { height, width } = useWindowDimensions();
    
    const w = (height > width) ? width * 0.9 : height * 0.9

    return (
        <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: (window.innerWidth - w)/2, y: (window.innerHeight - w * 0.75)/2}}
        bounds= {{left: -50, top: 0, right: window.innerWidth - 50, bottom: window.innerHeight-50}}
        grid={[1, 1]}
        scale={1}
        >
            
            <div style={{width: w, height: w * 0.75 }}  className='flex flex-col items-center justify-center fixed resize bg-gray-100 rounded-md border-2 border-gray-400 overflow-auto' >
                <div className='h-8 w-full bg-white flex items-center justify-center '>
                    <div className='w-full h-full handle flex p-1 items-center justify-start select-none'>
                        <p className='text-sm'>C:\skills</p>
                    </div>

                    <div className='h-full flex items-center justify-center'>
                        <div className='hover:bg-gray-300 rounded-md bg-opacity-20 duration-200 h-full flex items-center justify-center px-3'>
                            <VscChromeMinimize  className=" text-md  text-gray-600"/>
                        </div>
                        <div className='hover:bg-gray-300 rounded-md bg-opacity-20 duration-200 h-full flex items-center justify-center px-3'>
                            <FiMaximize  className=" text-md   text-gray-600"/>
                        </div>

                        <div className='hover:bg-gray-300 rounded-md bg-opacity-20 duration-200 h-full flex items-center justify-center px-3'>
                            <GrClose className=" text-md  text-gray-600"/>
                        </div>
                    </div>
                </div> 
                <div className='h-full w-full flex items-center justify-center overflow-y-auto'>

                </div>
            </div>
        </Draggable>
  )
}

export default Window
import { TiLocation } from 'react-icons/ti';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineMail } from 'react-icons/ai';

import { BsFacebook } from 'react-icons/bs';


const TengoLomidze = (props:any) => {
  return (
    <div className=" w-full h-full p-5">
        <div className={"flex items-center justify-center w-full " + (props.w < 450 ? "flex-col" : "flex-row")}>
            <img className="w-48 rounded-full" src="/tengo.jpg"></img>
            <div className="m-4 flex flex-col items-start justify-start">
                <p className="text-2xl mb-1">Tengo Lomidze</p>
                <p className='flex items-center text-sm ml-1'><TiLocation className="text-lg mr-1"/> Tbilisi, Georgia</p>
                <p className='flex items-center text-sm ml-1'><AiOutlineMail className="text-lg mr-1"/>lomidzetengo5@gmail.com</p>
                <p className='flex items-center text-sm ml-1 cursor-pointer underline' onClick={() => {window.location.href = "https://github.com/tengolomidze"}}><AiFillGithub className="text-lg mr-1"/>tengolomidze</p>
                <p className='flex items-center text-sm ml-1 cursor-pointer underline' onClick={() => {window.location.href = "https://www.linkedin.com/in/tengo-lomidze-261195232/"}}><AiFillLinkedin className="text-lg mr-1"/>tengo-lomidze-261195232</p>
                <p className='flex items-center text-sm ml-1 cursor-pointer underline' onClick={() => {window.location.href = "https://www.facebook.com/tengo.lomidze.98"}}><BsFacebook className="text-lg mr-1"/>Tengo Lomidze</p>
                <p className='flex items-center text-sm ml-1 cursor-pointer underline' onClick={() => {window.location.href = "https://www.youtube.com/@tengolomidze"}}><AiFillYoutube className="text-lg mr-1"/>Tengo Lomidze</p>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-10">
            <p className='text-xl text-center'>Hello, my name is Tengo Lomidze</p>
            <p className='text-md p-5'>I am 15 years old self-taught web developer. I love making beautiful and responsive sites and games. I have been learning web development for 2 years.</p>
        </div>
    </div>
  )
}

export default TengoLomidze
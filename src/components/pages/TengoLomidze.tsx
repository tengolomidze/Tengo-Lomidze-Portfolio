import { TiLocation } from 'react-icons/ti';
import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineMail } from 'react-icons/ai';

import { BsFacebook } from 'react-icons/bs';


const TengoLomidze = (props:any) => {
  return (
    <div className=" w-full h-full p-5 dark:text-zinc-300">
        <div className={"flex items-center justify-center w-full " + (props.w < 450 ? "flex-col" : "flex-row")}>
            <img className="w-48 rounded-full" src="/tengo.jpg"></img>
            <div className="m-4 flex flex-col items-start justify-start">
                <p className="text-2xl mb-1 dark:text-white">Tengo Lomidze</p>
                <p className='flex items-center text-sm ml-1'><TiLocation className="text-lg mr-1"/> Tbilisi, Georgia</p>
                <p className='flex items-center text-sm ml-1'><AiOutlineMail className="text-lg mr-1"/>lomidzetengo5@gmail.com</p>
                <p className='flex items-center text-sm ml-1 cursor-pointer underline' onClick={() => {window.location.href = "https://github.com/tengolomidze"}}><AiFillGithub className="text-lg mr-1"/>tengolomidze</p>
                <p className='flex items-center text-sm ml-1 cursor-pointer underline' onClick={() => {window.location.href = "https://www.linkedin.com/in/tengo-lomidze-261195232/"}}><AiFillLinkedin className="text-lg mr-1"/>tengo-lomidze-261195232</p>
                <p className='flex items-center text-sm ml-1 cursor-pointer underline' onClick={() => {window.location.href = "https://www.facebook.com/tengo.lomidze.98"}}><BsFacebook className="text-lg mr-1"/>Tengo Lomidze</p>
                <p className='flex items-center text-sm ml-1 cursor-pointer underline' onClick={() => {window.location.href = "https://www.youtube.com/@tengolomidze"}}><AiFillYoutube className="text-lg mr-1"/>Tengo Lomidze</p>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-10">
            <p className='text-xl text-center dark:text-white'>Hello, my name is Tengo Lomidze</p>

            <p className='text-md px-5 my-2 mt-8'>ㅤㅤPassionate and self-taught web developer with a strong inclination towards creativity and problem-solving. At just 15 years old, I've already embarked on a remarkable journey to master the art of web development. Over the past two years, I have devoted myself to honing my skills and crafting visually stunning and responsive websites and games.web development for 2 years.</p>
            <p className='text-md px-5 my-2'>ㅤㅤMy love for web development fuels my dedication to constantly learn and stay updated with the latest industry trends and technologies. I am driven by the desire to create seamless user experiences, combining aesthetics with functionality. Through my projects, I strive to bring ideas to life and leave a lasting impact.</p>
            <p className='text-md px-5 my-2'>ㅤㅤIn addition to my technical skills, I possess a keen eye for detail, a collaborative mindset, and a strong work ethic. I embrace challenges, as they provide opportunities for growth and innovation.</p>
            <p className='text-md px-5 my-2'>ㅤㅤAs I continue my journey, I am open to exciting projects and collaborations that allow me to apply my expertise and expand my horizons.</p>
        </div>
        <div className='w-full h-32'></div>
    </div>
  )
}

export default TengoLomidze
const Project = (props:any) => {
  return (
    <div className="cursor-pointer p-2 flex flex-col items-center justify-center w-16 h-20 rounded-md hover:bg-zinc-600 hover:bg-opacity-40 duration-200"  onClick={() => {window.location.href = props.site.link}}>
        <img className="w-10  rounded-lg"  src={props.site.img} alt="project"/>   
        <p className="text-center text-xs dark:text-white">{props.site.name}</p>
     </div>
  )
}

export default Project
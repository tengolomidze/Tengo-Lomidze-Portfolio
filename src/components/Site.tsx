const Site = (props:any) => {
  return (
    <a  className="w-full" href={props.site.link}>
        <div  className=" w-full flex items-start justify-between my-2 bg-zinc-400 dark:bg-zinc-500 bg-opacity-20 dark:bg-opacity-20 py-2 px-1">
            <img  className="w-8 h-8 mx-4 m-2" src={props.site.img}/>
            <div  className="flex items-center justify-around flex-col ">
                <p  className="text-lg text-center">{props.site.name}</p>
                <p  className="text-xs text-left">{props.site.description}</p>
            </div>
        </div>
    </a>
  )
}

export default Site
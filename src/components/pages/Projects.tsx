const Projects = () => {
  return (
    <div className="folder w-full h-full">
        <div className=" p-2 flex flex-col items-center justify-center w-16 h-20 rounded-md hover:bg-zinc-600 hover:bg-opacity-40 duration-200"  onClick={() => {window.location.href = "https://github.com/M3owMore/Nautillus"}}>
            <img className="w-10 bg-slate-600 rounded-lg"  src="https://raw.githubusercontent.com/M3owMore/Nautillus/main/public/icon.webp" alt="JavaScript"/>   
            <p className="text-center text-xs dark:text-white">Nautillus</p>
        </div>
        <div className=" p-2 flex flex-col items-center justify-center w-16 h-20 rounded-md hover:bg-zinc-600 hover:bg-opacity-40 duration-200"  onClick={() => {window.location.href = "https://github.com/tengolomidze/CrForum"}}>
            <img className="w-10"  src="/crf.webp" alt="JavaScript"/>   
            <p className="text-center text-xs dark:text-white">CrForum</p>
        </div>
        <div className=" p-2 flex flex-col items-center justify-center w-16 h-20 rounded-md hover:bg-zinc-600 hover:bg-opacity-40 duration-200"  onClick={() => {window.location.href = "https://github.com/tengolomidze/Password-Generator-By-Tengo-Lomidze"}}>
            <img className="w-10"  src="https://password-generator-by-tengo.netlify.app/icon.png" alt="JavaScript"/>   
            <p className=" text-center text-xs dark:text-white">Password Generator</p>
        </div>
        <div className=" p-2 flex flex-col items-center justify-center w-16 h-20 rounded-md hover:bg-zinc-600 hover:bg-opacity-40 duration-200"  onClick={() => {window.location.href = "https://github.com/tengolomidze/Tic-Tac-Toe-By-Tengo-Lomidze/tree/main"}}>
            <img className="w-10"  src="/ttt.webp" alt="JavaScript"/>   
            <p className=" text-center text-xs dark:text-white">Tic-Tac-Toe</p>
        </div>
    </div>
  )
}

export default Projects
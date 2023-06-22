import sitesJson from "../../sites.json" 
import Project from "./Project"

const Projects = () => {
  return (
    <div className="folder w-full h-full">
         {sitesJson.map((site, i) => {
                return <Project key={i} site={site}/>
         })}
    </div>
  )
}

export default Projects
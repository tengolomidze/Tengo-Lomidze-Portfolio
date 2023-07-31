import Project from "./Project"
import sitesJson from "../../sites.json"

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
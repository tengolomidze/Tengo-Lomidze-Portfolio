import Project from "./Project"
import { useState, useEffect} from "react";
import axios from "axios";

const Projects = () => {
  const [sitesJson, setSitesJson] = useState([])

  useEffect(() => {
      const getData = async () => {
          const res:any = await axios.get("https://raw.githubusercontent.com/tengolomidze/Tengo-Lomidze-Portfolio/main/src/sites.json")
          setSitesJson(res.data)
      }

      getData()
  }, [])

  return (
    <div className="folder w-full h-full">
         {sitesJson.map((site, i) => {
                return <Project key={i} site={site}/>
         })}
    </div>
  )
}

export default Projects
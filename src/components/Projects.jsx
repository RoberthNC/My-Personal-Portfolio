import Project from "./Project"
import projects from "../data/projects"

const Projects = () => {
  return (
    <div id="projects" className="px-8 py-12">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <br /> <br />
        {/* Container of all projects */}
        <div className="flex flex-col gap-5">
            {/* Component */}
            { projects.map( project => (
                <Project key={project.title} project={project} />
            ) ) }
        </div>
    </div>
  )
}

export default Projects
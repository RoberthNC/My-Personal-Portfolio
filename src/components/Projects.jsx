import { useState } from "react"
import Project from "./Project"
import projects from "../data/projects"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"

const Projects = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLast = currentIndex === projects.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div id="projects" className="px-8 py-12">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <br /> <br />
        {/* Container of all projects */}
        <div className="flex flex-col gap-5">
            {/* Component */}
            <Project key={projects[currentIndex].title} project={projects[currentIndex]}/>
        </div>

        <div className="flex flex-row justify-center items-center gap-8 py-5">
          <BsChevronCompactLeft onClick={prevSlide} size={30} className="scale-[145%] rounded-full p-2 bg-black/20 text-white cursor-pointer" />
          <p>{ currentIndex + 1 }</p>
          <BsChevronCompactRight onClick={nextSlide} size={30} className="scale-[145%] rounded-full p-2 bg-black/20 text-white cursor-pointer" />
        </div>

    </div>
  )
}

export default Projects
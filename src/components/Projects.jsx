import { useState } from "react"
import Project from "./Project"
import projects from "../data/projects"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"

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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div id="projects" className="px-8 py-12">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <br /> <br />
        {/* Container of all projects */}
        <div className="flex flex-col gap-5 relative">
            {/* Component */}
            <Project key={projects[currentIndex].title} project={projects[currentIndex]}/>
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white text-#000 cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
              { projects.map((project, idx) => (
                <div key={idx} onClick={()=>goToSlide(idx)} className="text-2xl cursor-pointer">
                  <RxDotFilled />
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Projects
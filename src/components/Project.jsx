import { useRef } from "react";

const Project = ({project}) => {

  const hasPage = useRef(true);

  if( project.linkPage === "" ){
    hasPage.current = false;
  }

  return (
    <div className="border-x-[1px] border-y-[1px] border-black px-2 py-2 flex flex-col rounded-xl w-5/6 m-auto justify-center items-center shadow-md">
      <img
        src={project.img}
        alt=""
        className="md:w-[40%] md:h-[40%] mb-2 my-auto"
      />
      <div className="flex flex-col gap-3 m-auto">
        <h2 className="text-xl text-center">{project.title}</h2>
        <p>{project.description}</p>
        {/* There will be 1 or more Technologies that have been used in the project */}
        <div className="flex flex-row flex-wrap justify-center gap-3 mt-3">
          { project.stack.map( s => (
            <p key={s} className="bg-[#2e85aa] rounded-[5px] text-white font-bold p-2">
              {s}
            </p>
          ) ) }
        </div>

        <div className="flex md:gap-5 gap-2 justify-center flex-wrap">
          <a
            href={project.linkPage}
            className={`bg-[#ff8e00] text-white font-bold p-4 inline-block mt-5 md:mb-5 transition duration-200 hover:scale-110 transition-delay-100 rounded-xl ${ !hasPage.current ? "hidden":"" }`}
            target="_blank"
          >
            View Page
          </a>
          <a
            href={project.linkRepository}
            className="bg-[#ff8e00] text-white font-bold p-4 inline-block mt-5 md:mb-5 transition duration-200 hover:scale-110 transition-delay-100 rounded-xl"
            target="_blank"
          >
            View Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

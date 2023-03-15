import languagesInformation from "../data/info"
import Skill from "./Skill"

const Skills = () => {

  return (
    <div className="px-8 py-12">
      <h2 className="text-3xl font-bold">My skills</h2>
      <br />
      <div className="grid grid-cols-3 gap-5 md:px-28">
        { languagesInformation.map( language => (
          <Skill key={language.name} language={language}/>
        ) ) }
      </div>
    </div>
  )
}

export default Skills
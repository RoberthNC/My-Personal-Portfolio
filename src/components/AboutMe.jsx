import Pdf from "../assets/pdf/Roberto Núñez - Curriculum Vitae.pdf"
import ProgrammerImg from "../assets/img/Programmer.jpg"

const AboutMe = () => {
  return (
    <div>
      <div>
        <h2>About me</h2>
        <p>I'm Roberto Núñez, Full-Stack Developer</p>
        <p>
          I consider myself as a self-taught person who likes to learn and solve
          challenges, every time I face a new challenge and I need a new
          technology, I inquire about it and I learn it; I I like teamwork, I am
          one of the people who believe that a person can do many things but a
          team can reach limits unimaginable.
        </p>
        <p>
          I am currently learning and perfecting my skills in the technologies
          to be able to carry out more robust works.
        </p>
        <a href={Pdf} download={"CV - Roberto Núñez Casaux"}>Download CV</a>
      </div>
      <img src={ProgrammerImg} alt="Programmer Photo" className="h-2/6 w-2/6 hidden md:inline" />
    </div>
  );
};

export default AboutMe;

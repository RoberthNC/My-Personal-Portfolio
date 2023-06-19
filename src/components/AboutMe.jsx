import Pdf from "../assets/pdf/Roberto Núñez - CV.pdf"
import ProgrammerImg from "../assets/img/Programmer.jpg"

const AboutMe = () => {
  return (
    <div id="about" className="grid md:grid-cols-2">
      <div className="px-8 py-12">
        <h2 className="text-3xl font-bold">About me</h2>
        <br />
        <p className="text-[#2e85aa] font-bold text-xl">I'm Roberto Núñez, Full-Stack Developer</p>
        <br />
        <p>
          I consider myself as a self-taught person who likes to learn and solve
          challenges, every time I face a new challenge and I need a new
          technology, I inquire about it and I learn it; I I like teamwork, I am
          one of the people who believe that a person can do many things but a
          team can reach limits unimaginable.
        </p>
        <br />
        <p>
          I am currently learning and perfecting my skills in the technologies
          to be able to carry out more robust works.
        </p>
        <a href={Pdf} download={"Roberto Núñez - CV"} className="bg-[#ff8e00] text-white font-bold p-4 inline-block mt-5 mb-5 transition duration-200 hover:scale-110 transition-delay-100 rounded-xl">Download CV</a>
      </div>
      <img src={ProgrammerImg} alt="Programmer Photo" className="h-80 w-80 hidden m-auto object-cover md:inline rounded-full" />
    </div>
  );
};

export default AboutMe;

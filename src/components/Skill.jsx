const Skill = ({ language }) => {
  return (
    <div className="border-x-[1px] border-y-[1px] flex flex-col items-center gap-3 p-3 rounded-xl md:w-2/6 m-auto transition duration-150 hover:scale-125 transition-delay-100 shadow-md">
        <img src={language.logo} alt="css" className="h-12 w-12" />
        <p className="block text-center">{language.name}</p>
    </div>
  )
}

export default Skill
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [ visibleMenu, setVisibleMenu ] = useState( false );

    const hiddenNavbar = () => {
        setVisibleMenu(!visibleMenu);
    }

    useEffect(()=>{
      
      function visible(){
        if(window.innerWidth>768){
          setVisibleMenu(false);
        }
      }

      window.addEventListener("resize",visible);

    },[window])

  return (
    <div className="flex flex-col items-center gap-3 py-6 px-9 bg-[#2B3B45] md:flex-row justify-between">
      <div className="animate-bounce font-bold text-xl text-white text-center border-b-2 md:border-none p-2">
        <span className="text-[#ff8e00]">&#60;</span>Roberto Núñez Casaux <span className="text-orange-500">&#47;&#62;</span>
      </div>
      <button onClick={ hiddenNavbar } className="md:hidden">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>
      <div className={`flex flex-col items-center gap-1 md:visible ${ visibleMenu? "hidden" : "" } md:flex-row md:gap-4`}>
        <Link to="/" className="text-lg text-white hover:text-[#ff8e00] font-bold">About me</Link>
        <Link to="/" className="text-lg text-white hover:text-[#ff8e00] font-bold">Skills</Link>
        <Link to="/" className="text-lg text-white hover:text-[#ff8e00] font-bold">Projects</Link>
        <Link to="/" className="text-lg text-white hover:text-[#ff8e00] font-bold">Contact me</Link>
      </div>
    </div>
  );
};

export default Navbar;

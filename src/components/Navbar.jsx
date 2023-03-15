import { HashLink } from 'react-router-hash-link'
import { useEffect, useState } from "react"

import Menu from "../assets/icons/menu.svg"

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
        <img src={Menu} alt="Menu bars" />
      </button>
      <div className={`flex flex-col items-center gap-1 md:visible ${ visibleMenu? "hidden" : "" } md:flex-row md:gap-4`}>
        <HashLink smooth to="/#about" className="text-lg text-white hover:text-[#ff8e00] font-bold">About me</HashLink>
        <HashLink smooth to="/" className="text-lg text-white hover:text-[#ff8e00] font-bold">Skills</HashLink>
        <HashLink smooth to="/" className="text-lg text-white hover:text-[#ff8e00] font-bold">Projects</HashLink>
        <HashLink smooth to="/" className="text-lg text-white hover:text-[#ff8e00] font-bold">Contact me</HashLink>
      </div>
    </div>
  );
};

export default Navbar;

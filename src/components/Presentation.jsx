import { useEffect, useRef } from "react"
import Typed from "typed.js"
import Photo from "../assets/img/Photo.png"

const Presentation = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['Front-End Developer','Back-End Developer','Full-Stack Developer'],
          typeSpeed: 100,
          backSpeed: 100,
          loop: true,
          showCursor: false,
          smartBackspace: true,
          cursorChar: '|'
        });
    
        return () => {
          typed.destroy();
        };
    }, []);


  return (
    <div className="grid bg-[#2e85aa] md:grid-cols-2 px-8 py-12 w-full h-full">
        <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex flex-col gap-3">
                <p className="text-3xl font-bold text-white text-center">Hi, Developers!</p>
                <p className="text-3xl font-bold text-white text-center">I'm Roberto Núñez</p>
                <p className="text-3xl font-bold text-white text-center" ref={el}></p>
                <p className="text-3xl font-bold text-white mt-3">Passionate about programming and gaining new knowledge and experiences that strengthen my professional profile.</p>
            </div>
        </div>
        <img src={Photo} alt="Profile Photo" className="h-60 w-60 object-cover rounded-full m-auto hidden md:inline" />
    </div>
  )
}

export default Presentation
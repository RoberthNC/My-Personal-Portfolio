import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'

import Error from "./Error"
import Ok from "./Ok"

const ContactMe = () => {

    const form = useRef();

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ message, setMessage ] = useState("");

    const [ error, setError ] = useState(false);
    const [ ok, setOk ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        //If there is an error in any field
        if([ name, email, message ].includes("")){
            setError(true);

            setTimeout(()=>{
                setError(false);
            },3000);
            return;
        }

        //Sending the email to my email
        emailjs.sendForm("gmailMessage", "template_qks9a24", form.current, "dJjWkU7ywJcNe-ygn")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setOk(true);

        setTimeout(() => {
            setOk(false);
        }, 3000);

        setName("");
        setEmail("");
        setMessage("");
        setError(false);
    }

    return (
        <div id="contact" className="px-8 py-12">
            <h2 className="text-3xl font-bold text-center">Contact me</h2>
            <br />
            <form onSubmit={ handleSubmit } ref={form} className="mt-3 rounded-xl p-10 flex flex-col gap-5 bg-[#2B3B45] mx-auto md:w-3/6">
                { error && <Error /> }
                { ok && <Ok /> }
                <div className="flex flex-col gap-1">
                    <label className="text-white font-bold" htmlFor="name">Name</label>
                    <input id="name" name="user_name" type="text" placeholder="Type your name here" className="border-black border-x-[1px] border-y-[1px] rounded-[5px] px-1 py-3" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-white font-bold" htmlFor="email">Email</label>
                    <input id="email" name="user_email" type="email" placeholder="Type your email here" className="border-black border-x-[1px] border-y-[1px] rounded-[5px] px-1 py-3" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-white font-bold" htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Type your message here" className="border-black border-x-[1px] border-y-[1px] rounded-[5px] px-1 py-3 h-40 resize-none" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>
                <button type="submit" className="bg-[#ff8e00] text-white font-bold p-4 inline-block mt-5 mb-5 transition duration-200 hover:scale-110 transition-delay-100 rounded-xl md:w-3/5 w-full mx-auto">Send Email</button>
            </form>
        </div>
  )
}

export default ContactMe
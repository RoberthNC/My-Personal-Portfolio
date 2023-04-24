import GuitarLA from "../assets/img/GuitarLA NextJs.png"
import ReduxImg from "../assets/img/Redux CRUD.png"
import CryptoImage from "../assets/img/Cryptocurrency React.png"
import CustomerImage from "../assets/img/Customer Manager React.png"
import WeatherConsoleImage from "../assets/img/Weather Console App.png"
import TodoList from "../assets/img/Todo List Console App.png"

//Importing all the imagenes for each project

const projects = [
    //React Projects    
    {
        img:GuitarLA,
        title:"GuitarLA Next.js",
        description:"Page made with Next.js on Front-End and Strapi as Back-End",
        stack:["Next.js","Strapi","CSS","Fetch"],
        linkPage:"",
        linkRepository:"https://github.com/RoberthNC/GuitarLA-Nextjs"
    },
    {
        img:ReduxImg,
        title:"Redux CRUD",
        description:"Page made with React.js and Redux that allows you to perform CRUD operations.",
        stack:["React.js","Redux","CSS"],
        linkPage:"",
        linkRepository:"https://github.com/RoberthNC/Redux-CRUD"
    },
    {
        img:CryptoImage,
        title:"Cryptocurrency Quote",
        description:"Page made with React.js and Styled Components, Fetch was also used to make requests to a Cryptocurrency API.",
        stack:["React.js","Styled Components","Fetch"],
        linkPage:"",
        linkRepository:"https://github.com/RoberthNC/Cotizador-Cryptomonedas-React"
    },
    {
        img:CustomerImage,
        title:"Customer Manager",
        description:"Project made with React.js and the latest version of React Router DOM, allows to perform CRUD operations with the Clients that are stored in the db.json file and have interactivity with the different pages.",
        stack:["React.js","React Router DOM","Tailwind CSS"],
        linkPage:"",
        linkRepository:"https://github.com/RoberthNC/Administrador-de-Clientes"
    },
    //Node.js Projects
    {
        img:WeatherConsoleImage,
        title:"Interactive weather console",
        description:"Interactive console built with Node.js, using Inquirer for the construction of the console menu, inputs, Axios in order to make HTTP requests and Fs to simulate a database.",
        stack:["Node.js","Inquirer","Fs","Axios"],
        linkPage:"",
        linkRepository:"https://github.com/RoberthNC/Consola-de-Clima"
    },
    {
        img:TodoList,
        title:"Todo-List",
        description:"Console Application using Inquirer package and uuid, also I worked on this project using fs module from nodejs.",
        stack:["Node.js","Inquirer","Uuid","Fs"],
        linkPage:"",
        linkRepository:"https://github.com/RoberthNC/Todo-List"
    }
]

export default projects
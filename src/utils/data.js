import Frontend from '../assets/website-layout.png'
import Backend from '../assets/web-hosting.png'
import Tools from '../assets/settings.png'
import Dsa from '../assets/paper.png'

export const SKILLS = [
    {
        title:"Frontend",
        icon: Frontend,
        skills:[
            {skills:"HTML",percentage:"50%"},
            {skills:"CSS",percentage:"60%"},
            {skills:"JavaScript",percentage:"50%"},
            {skills:"React",percentage:"40%"},

        ]
    },
    {
        title:"Backend",
        icon:Backend,
        skills:[
            {skills:"Node.js",percentage:"50%"},
            {skills:"Express.js",percentage:"60%"},
            {skills:"MongoDB",percentage:"50%"},
        ]
    },
    {
        title:"Tools",
        icon:Tools,
        skills:[
            {skills:"Git & Github",percentage:"50%"},
            {skills:"VS Code",percentage:"70%"},
            {skills:"Responsive Design",percentage:"30%"},
        ]
    },
    {
        title:"DSA",
        icon: Dsa,
        skills:[
            {skills:"DSA",percentage:"40%"}
        ]
    }
]


export const projects = [
    {
      name: "E-commerce Platform",
      description:
        "A fully functional e-commerce platform that enables users to browse products, add items to their cart, and complete purchases. Features include user authentication, order tracking, and a responsive design for mobile and desktop devices.",
      technologies: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Stripe API"
      ],
    },
    {
      name: "Dalle Clone",
      description:
        "A web application that allows users to generate images based on text prompts, similar to OpenAI's DALL-E model. This project leverages a deep learning model to interpret text inputs and produce relevant images, focusing on a simple UI for ease of use.",
      technologies: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express",
        "OpenAI API"
      ],
    },
    {
      name: "Gemini Clone",
      description:
        "A clone of the Gemini platform with a focus on cryptocurrency trading functionalities. Includes features like real-time cryptocurrency price tracking, a simulated trading interface, and a secure user login system for account management.",
      technologies: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express",
      ],
    }
  ];
  
  
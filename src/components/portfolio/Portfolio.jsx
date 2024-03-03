import { useRef } from "react";
import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"Tasky Application",
        img:"taskyapp.png",
        desc:"Tasky Application: Organize Your Tasks Like a Pro! 📝✨.As an intermediate-level project, Tasky combines the power of HTML, CSS, Bootstrap, and JavaScript to create a robust task management app.1)Task Creation and Deletion.2)User-Friendly Interface.3)Task Details.4)Task Edit",
        link:"https://eshwargundla-tasky-app.netlify.app/"
    },
    {
        id:2,
        title:"Lagunitas page",
        img:"beer.png",
        desc:"These is a beer landing page of Lagunitas Beer Landing Page: 🍺🌟 using HTML,CSS,JavaScript.There are special js libraries used in these those are Locomotive(This library adds smooth scrolling effects as you navigate through the page) and GSAP (GreenSock Animation Platform)",
        link:"https://eshwar-beer-landing-page.netlify.app/"
    },
    {
        id:3,
        title:"Landing Page",
        img:"Landing-Page.png",
        desc:"As a web developer passionate about creating engaging user experiences, I recently designed a Landing Page using ReactJS and React Router. The landing page serves as an inviting entry point for users.🚀🌟.Feel free to check out the live version of my landing page on See Demo and experience the seamless navigation! 👩‍💻",
        link:"https://scintillating-druid-9d6cea.netlify.app/"
    },   
    {
        id:4,
        title:"Portfolio",
        img:"./portfolio.png",
        desc:" These is Modern Personal Portfolio Web Template: 🌟🚀 built using the popular React library, Sass and Framer Motion. It provides an easy way for developers, designers, and creatives to showcase their work and skills in a professiona and visually appealing way🎨👩‍💻.",
        link:"#"
    },
    {
        id:5,
        title:"Book Management",
        img:"Book Management.png",
        desc:"These is Library Book Management Project 📚🔍 using Nodejs,Expressjs,Javascript.To check severs communications I have used postman-api.You can access users,books etc. The project allows user management. You can create, update, and delete user profiles📖🚀."
        // link:""
    },
    {
        id:6,
        title:"Netflix Clone",
        img:"./netflix.png",
        desc:"These is a basic Netflix Clone using HTML,CSS.These clones are beginner level projects for any web developers.The project aims to recreate the visual design and layout of the Netflix home page, providing a starting point for creating similar interfaces or learning web development techniques.",
        link:"https://eshwar-netflix.netlify.app/"
    },
    
    
];


const Single = ({item}) =>{
    const ref = useRef();

    const {scrollYProgress} = useScroll({
    target:ref,
    // offset:["start start","end start"]
    });
    const y = useTransform(scrollYProgress,[0,1],[-300, 300]);
    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref = {ref}>
                <img src={item.img} alt="img" />
                </div>
                <motion.div className="textContainer" style = {{y}}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <a href={item.link} target="_blank">
                        <br />
                        <br />
                        <button>See Demo</button>
                    </a>
                </motion.div>
                </div>
            </div>
        </section>
    )

}

const Portfolio = () => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end","start start"]
    });
const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
});

    return (
    <div className="portfolio" ref= {ref}>
        <div className="progress">
            <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item ={item} key={item.id}/>
        ))}
    </div>
    );
};



export default Portfolio;
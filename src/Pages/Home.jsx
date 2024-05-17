import React from 'react'
import Navbar from '../Components/Navbar';
import ParticleContainer from '../Components/ParticleContainer';
import myimg from './images/myimg.jpg';
import aecs from './images/aecs.jpeg';
import sjcem from './images/sjcem.jpg';
import task03 from './images/task03.png';
import stopwath from './images/Stopwatch.png';
import task05 from './images/task05.png';
import calci from './images/simp-cal.png';
import beybladers from './images/beybladers.png';
import housyy from './images/housyy.png';
import studybuddy from './images/study-buddy.png';
import recamovies from './images/recamovies.png';
import tictactoe from './images/tic-tac-toe.png';
import blog from './images/blog.png';
import travebai from './images/TraveBai.png';
import hrkfit from './images/HRKFIT.png';
import farmhelp from './images/Farmhelp.png';
import marvelz from './images/marvelz.png';
import pfl from './images/portfolio-light.png';
import garamtara from './images/garamtara7.png';
import registform6 from './images/registform6.png';
import benverse from './images/benverse5.png';
import cards from './images/card4.png';
import jl from './images/htmlproject3.png';
import mag from './images/myastheticgallery2.png';
import mfp from './images/myfirstpage1.png';
import Timeline from '../Components/Timeline';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import c from './images/letter-c.png';
import cpp from './images/c++.png';
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiFirebase } from "react-icons/si";


function Home() {
    const experiences = [
        {
          companyName: 'Prodigy Info Tech',
          title: 'Frontend Development Intern',
          description1: 'This was a one month online internship in which i had to complete total 5 tasks using the frontend languages like HTML, CSS, JavaScript and i was given the liberty to choose any frameworks like Bootstrap, ReactJS etc.',
          description2: 'I created all the 5 tasks which was assigned for the internship, it was a great learning and developing Experience. And i hosted all the tasks on Vercel so that everyone can see my exceptional work in the internship.',
          date: 'April 2024 - May 2024'
        },
        {
          companyName: 'Nuclear Power Corporation of India Limited',
          title: 'Project Trainee',
          description1: 'This was a one month on-site internship in which i learned about Cybersecurity and Networking, also i was give a task to create a web page for their TMS Network Schema.',
          description2: 'It was a great Workplace Experience, i learned a lot from my mentors and understood the importance of networks, communication, cybersecurity and work culture.',
          date: 'June 2023 - June 2023'
        },
        {
            companyName: 'CodingWiz',
            title: 'Frontend Development Intern',
            description1: 'This was a one month online internship in which i had to develop two websites using the technologies HTML, CSS, JavaScript and Bootstrap.',
            description2: 'The two websites which i had to create were a tours and travel website and another was a gym website, which i developed very well with good user interface and functionality.',
            date: 'May 2023 - June 2023'
          }
      ];
  return (
    <div>
        <Navbar/>
        <div style={{marginTop:"70px"}}>
        <div className="container-fluid">
    <div className="row justify-content-evenly align-content-center" id="home">
    <ParticleContainer/>
        <div className="col-md-4 justify-content-center">
            <img src={myimg} alt="my pic" id='myimg' className="img-fluid mt-4 shadow rounded-circle justify-content-center" data-aos="fade-down" data-aos-duration="1500" data-aos-easing="ease-in-out" />
        </div>
        <div className="col-md-5 text-white align-self-center">
            <p className="mb-0 fs-5 text-info" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">Heyy, I am</p>
            <p className='fs-1 m-0' data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">Haamid Raza Kazi</p>
            <p data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out" className="par fs-4">A passionate Web Developer and a 3rd Year Computer Engineering Student who works in technologies like HTML, CSS, JavaScript, Bootstrap and MERN stack.</p>
            <a href="https://drive.google.com/file/d/1Kyn63nvlEUX54Cz56OiOC_gavshav_EI/view?usp=sharing" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-info fs-5" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">Check My Resume/CV</button></a>
        </div>
    </div>

    {/* about me start */}
    <div className="row" id="about">
        <div className="col-md-12 text-center my-1">
            <h1 className="mt-5" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out"><span className="text-info">About</span> Me</h1>
        </div>
    </div>

    <div className="row justify-content-evenly align-items-center mt-2 mb-4 mx-1 flex-wrap-reverse">

        <div className="col-md-6 bg-info py-3 rounded mx-1" data-aos="flip-up" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <div className="row justify-content-center my-2 mx-0">
                <div className="col-md-10 bg-dark text-white px-2 rounded pt-2">
                    <h3><i className="bi bi-credit-card-2-front"></i> Frontend Development</h3>
                    <p className="par p-2" style={{fontSize:"18px"}}>Working with frontend technologies such as HTML, CSS, Javascript, Bootstrap, Git, NodeJS, ReactJS, MERN. <br /> I become very creative when i dive into the world of developing website and web applications, and the outcomes are very visually appealing with great User Interface.</p>
                </div>
            </div>
        </div>

        <div className="col-md-5 py-3">
            <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">What<span className="me"> I'm able</span> to do?</h2>
            <p data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out" className="par fs-5">I can handle projects related to Frontend Development. If I talk about complexity of the project then it can range from easy to intermediate type of projects. </p>

            <p data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out" className="par fs-5">I have created some projects using technologies like HTML , CSS , Javascript , Bootstrap, NodeJS, ReactJS and MERN stack. Currently I'm nourishing my skills more in Full Stack Development.</p>
            <a href="#projects"><div className="btn btn-outline-info fs-5 mb-3" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">Check my Projects</div></a>
        </div>
    </div>
    {/* about end */}

    {/* skills starts  */}
    <div className="row" id="skills">
        <div className="col-md-12 text-center my-1">
            <h1 className="mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">My <span className="text-info">Skills</span></h1>
        </div>
    </div>

    <div className='row justify-content-evenly mb-3 py-2 px-2'>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out"><FaHtml5 className='text-danger fs-1' title='HTML' /><div>HTML</div></div>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="1300" data-aos-easing="ease-in-out"><FaCss3Alt className='text-info fs-1' title='CSS' /><div>CSS</div></div>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out"><SiJavascript className='text-warning fs-1' title='JavaScript' /><div>JavaScript</div></div>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="1700" data-aos-easing="ease-in-out"><FaBootstrap style={{color:"blueviolet"}} className='fs-1' title='Bootstrap' /><div>Bootstrap</div></div>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><FaGitAlt className='fs-1' style={{color:"orangered"}} title='Git' /><div>Git</div></div>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><FaGithub className='text-secondary fs-1' title='Github' /><div>Github</div></div>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><FaReact className='text-info fs-1' title='ReactJS' /><div>ReactJS</div></div>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out"><DiNodejs className='text-success fs-1' title='NodeJS' /><div>NodeJS</div></div>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2300" data-aos-easing="ease-in-out"><SiMongodb className='text-success fs-1' title='MongoDB' /><div>MongoDB</div></div>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2900" data-aos-easing="ease-in-out"><SiFirebase className='text-warning fs-1' title='Firebase' /><div>Firebase</div></div>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out"><img src={c} className='img-fluid' width={45} alt="C" title='C' /><div>C</div></div>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out"><img src={cpp} className='img-fluid' width={45} alt="C++" title='C++' /><div>C++</div></div>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out"><FaJava className='text-warning fs-1' title='Java' /><div>Java</div></div>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2700" data-aos-easing="ease-in-out"><FaPython className='text-primary fs-1' title='Python' /><div>Python</div></div>
        <div className="col-md-2 text-center py-3 my-2 mb-4 mx-1 px-3 rounded-3 bg-black" data-aos="zoom-in" data-aos-duration="2900" data-aos-easing="ease-in-out"><BiLogoPostgresql className='text-secondary fs-1' title='SQL' /><div>SQL</div></div>
    </div>
    {/* skills ends  */}
    
    {/* my experience starts */}
    <div className="row" id="exp">
        <div className="col-md-12 text-center my-1">
            <h1 className="mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out"><span className="text-info">My </span>Experience</h1>
        </div>
    </div>

    <Timeline experiences={experiences} />

    {/* my experience ends  */}

    {/* my education starts */}
    <div className="row" id="edu">
        <div className="col-md-12 text-center my-1">
            <h1 className="mt-3" data-aos="slide-up" data-aos-duration="1000" data-aos-easing="ease-in-out">My <span className='text-info'>Education</span></h1>
        </div>
    </div>

    <div className="row justify-content-evenly mb-3 py-2 px-3">
        <div className="col-md-3 row bg-black text-white rounded-4 shadow justify-content-around mb-4 py-2" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={aecs} alt="aecs1" className="img-fluid rounded-5 p-2 pt-3" />
            <div className="col-md-10"><h6>Atomic Energy Central School</h6><h6>SSC, CBSE Board</h6></div>
            <div className="col-md-2"><h6>2019</h6><h6>75.8%</h6></div>
        </div>
        <div className="col-md-3 row bg-black text-white rounded-4 shadow justify-content-around mb-4 py-2" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
            <img src={aecs} alt="aejc1" className="img-fluid rounded-5 p-2 pt-3" />
            <div className="col-md-10"><h6>Atomic Energy Junior College</h6><h6>HSC, Maharashtra Board</h6></div>
            <div className="col-md-2"><h6>2021</h6><h6>85.5%</h6></div>
        </div>
        <div className="col-md-3 row bg-black text-white rounded-4 shadow justify-content-around mb-4 py-2" data-aos="zoom-in" data-aos-duration="2500" data-aos-easing="ease-in-out">
            <img src={sjcem} alt="sjcem" className="img-fluid rounded-5 p-2 pt-5 mt-3 mb-3" />
            <div className="col-md-10"><h6>St. John College of Engineering and Management</h6><h6>Mumbai University</h6></div>
            <div className="col-md-2"><h6>2021-2025</h6></div>
        </div>
    </div>
    {/* my education ends */}

    {/* my project start */}
    <div className="row" id="projects">
        <div className="col-md-12 text-center my-1">
            <h1 className="mt-3" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out"><span className='text-info'>My</span> Projects</h1>
        </div>
    </div>

    <div className="row px-3 justify-content-evenly">

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={task05} alt="Weather App" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-4">Weather App</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this webpage for Task-05 as a web development intern at Prodigy Info Tech. I used HTML, CSS, Javascript and Bootstrap to develop this webpage.</p>
            <center><a href="https://weather24.vercel.app/" target="_blank" rel="noreferrer"><div className="btn mt-3 btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={calci} alt="Simple Calculator" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-4">Simple Calculator</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this as a cloud computing mini project at my college. We hosted this Amazon AWS Amplify. I created this using ReactJS and React-Bootstrap. I also hosted this on <a href="https://simp-cal.vercel.app" target='_blank' rel='noreferrer'>Vercel</a>.</p>
            <center><a href="https://main.d39hb9cg0c6zsd.amplifyapp.com/" target="_blank" rel="noreferrer"><div className="btn mt-3 btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={task03} alt="Tic-Tac-Toe" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-4">Tic Tac Toe Game</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this website for Task-03 as a web development intern at Prodigy Info Tech. I used HTML, CSS, Javascript and Bootstrap to develop this application.</p>
            <center><a href="https://tictactoe24.vercel.app/" target="_blank" rel="noreferrer"><div className="btn mt-3 btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={stopwath} alt="Stopwatch" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-4">Stopwatch</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this website for Task-02 as a web development intern at Prodigy Info Tech. I used HTML, CSS, Javascript and Bootstrap to develop this application.</p>
            <center><a href="https://stopwatch24.vercel.app/" target="_blank" rel="noreferrer"><div className="btn mt-3 btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={beybladers} alt="BeyBladers" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-4">Beybladers</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this website for Task-01 as a web development intern at Prodigy Info Tech. I used HTML, CSS, Javascript and Bootstrap to develop this application.</p>
            <center><a href="https://beybladers.vercel.app/" target="_blank" rel="noreferrer"><div className="btn mt-3 btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={housyy} alt="Housyy" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4>Housyy - House Service Providers</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this web application as a Third Year mini project in my college. This is a house service providing web application. I made this using ReactJS and Bootstrap.</p>
            <center><a href="https://housyy24.vercel.app/" target="_blank" rel="noreferrer"><div className="btn btn-outline-info px-5 w-50 rounded-pill">In Progress</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={studybuddy} alt="Study Buddy" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-4">Study Buddy</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this web appplication for VCET Hackathon 2023. This is a platform for student to study with the help of ai and some quizes. This app also provide a to-do list and a chatBot.With my team members, we made this web application using ReactJS, HTML, CSS, JavaScript and Bootstrap.</p>
            <center><a href="https://study-buddy34.vercel.app/" target="_blank" rel="noreferrer"><div className="btn mt-3 btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={recamovies} alt="Recamovies" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-4">Recamovies</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this website as a mini project for my Software Engineering Subject in my College. This is a movie recommendation website. I made this using HTML, CSS, JavaScript and Bootstrap.</p>
            <center><a href="https://recamovies.vercel.app/" target="_blank" rel="noreferrer"><div className="btn mt-3 btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={tictactoe} alt="Tic-Tac-Toe" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-2">Tic-Tac-Toe</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this web app game as a ReactJS project for my Full Stack Development Classes. I made this game using ReactJS.</p>
            <center><a href="https://ti-ta-to.vercel.app/" target="_blank" rel="noreferrer"><div className="btn btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={blog} alt="NPCIL Internship Blog" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-2">My First Blog Post</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this blog post on Wordpress. During my internship at NPCIL we were told to make blogs of each and every day of what we are learning, so that all information is here.</p>
            <center><a href="https://haamidraza037.wordpress.com/" target="_blank" rel="noreferrer"><div className="btn mt-4 btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={travebai} alt="Travebai" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-2">TraveBai</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this website as an Internship Project at CodingWiz. Its a Tours and Travels Website. I used HTML, CSS, JavaScript and Bootstrap to create this website.</p>
            <center><a href="https://travebai.vercel.app/" target="_blank" rel="noreferrer"><div className="btn mt-4 btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={hrkfit} alt="HRKFIT" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-4">HRKFIT</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this website as an Internship Project at CodingWiz. Its a Gym Website. I used HTML, CSS, JavaScript and Bootstrap to create this website.</p>
            <center><a href="https://hrkfit.vercel.app/" target="_blank" rel="noreferrer"><div className="btn btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={farmhelp} alt="Farmhelp" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-2">Farmhelp</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this Web Application as a Mini - Project in Second Year in my College. I made this Web Application using HTML, CSS, Bootstrap, Javascript and Python. I have added OTP verification also in it when user sign in.</p>
            <center><a href="https://farmhelp.vercel.app/" target="_blank" rel="noreferrer"><div className="btn btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={marvelz} alt="Marvelz" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-2">Marvelz</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this site as my Hackathon Project for my Frontend Development classes. It was fun making this site. It took me 6 and a half hours to make this, and hackathon was of 7 hours.</p>
            <center><a href="https://marvelz.vercel.app/" target="_blank" rel="noreferrer"><div className="btn btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={pfl} alt="Portfolio-light" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-2">My Portfolio</h4></center>
            <p className="par bg-scroll rounded-3 p-2">This is my Portfolio. I made this as a portfolio project for my frontend development class. I made this using HTML, CSS, JavaScript and Bootstrap.</p>
            <center><a href="https://portfoliohrk.vercel.app/" target="_blank" rel="noreferrer"><div className="btn btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={garamtara} alt="GaramTara+" className="img-fluid rounded-3 my-2 mb-4" />
            <center><h4 className="mb-2">Garamtara+</h4></center>
            <p className="par bg-scroll rounded-3 p-2">GaraTara+ is a HotStar Clone. I made this webpage as an Bootstrap Project for my Frontend development class.</p>
            <center><a href="https://garamtara.vercel.app/" target="_blank" rel="noreferrer"><div className="btn btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={registform6} alt="Registerform" className="img-fluid rounded-3 my-2 mb-3" />
            <center><h4 className="mb-2">Registration Form</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this registration form as my JS project for my Frontend development class. Its made from HTML, CSS and JavaScript.</p>
            <center><a href="https://registra-form.vercel.app/" target="_blank" rel="noreferrer"><div className="btn btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={benverse} alt="Benverse" className="img-fluid rounded-3 my-2 mb-4" />
            <center><h4 className="mb-3">Benverse</h4></center>
            <p className="par bg-scroll rounded-3 p-2">I created this site as a CSS project for my Frontend development class. Its made from HTML and CSS. I hosted this site on vercel.</p>
            <center><a href="https://benverse.vercel.app/" target="_blank" rel="noreferrer"><div className="btn btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={cards} alt="Cards" className="img-fluid rounded-3 my-2" />
            <center><h4 className="mb-2">Cards</h4></center>
            <p className="par bg-scroll rounded-3 p-2">This is a part of Justice League, when i learnt CSS i Linked this in HTML project.</p>
            <center><a href="https://haamidraza03.github.io/Cards/" target="_blank" rel="noreferrer"><div className="btn btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={jl} alt="Justice League" className="img-fluid rounded-3 my-5" />
            <center><h4 className="mb-1">Justice League</h4></center>
            <p className="par bg-scroll rounded-3 p-2">This is a simple website created with HTML Only. I made this as my HTML project for my Frontend Development Class.</p>
            <center><a href="https://haamidraza03.github.io/Html-Project-FTC/" target="_blank" rel="noreferrer"><div className="btn btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={mag} alt="My Aesthetic Gallery" className="img-fluid rounded-3 my-5" />
            <center><h4 className="mb-1">My Aesthetic Gallery</h4></center>
            <p className="par bg-scroll rounded-3 p-2">This is a simple website created with HTML, CSS and JavaScript. I made this after attending a Masterclass.</p>
            <center><a href="https://haamidraza03.github.io/My-Aesthetic-Gallery/" target="_blank" rel="noreferrer"><div className="btn btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

        <div className="col-md-3 rounded-4 bg-black text-white py-3 my-2 mb-4 mx-2 px-3 shadow-lg" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={mfp} alt="My First Page" className="img-fluid rounded-3 mb-2" />
            <center><h4 className="mb-1">My First Page</h4></center>
            <p className="par bg-scroll rounded-3 p-2">This is a simple website created with HTML, CSS and JavaScript. I made this after attending a Masterclass.</p>
            <center><a href="https://haamidraza03.github.io/My-first-page/" target="_blank" rel="noreferrer"><div className="btn btn-outline-info px-5 w-50 rounded-pill">Visit</div></a></center>
        </div>

    </div>
    {/* my project end */}

     <div className="row justify-content-center bg-black text-center text-white py-3" data-bs-theme="dark">
        <footer className="footer">
            <div>
                Copyright &#169; Portfolio 2024. All Right Reserved.
            </div>
            <div>
                Made with <i className="bi bi-heart-fill"></i> by Haamid Raza Kazi.
            </div>
        </footer>
      </div>
    {/* end of container-fluid */}
  </div>

</div>
</div>
  )
}

export default Home
import React from 'react'
import { FaHtml5 ,FaCss3Alt,FaJsSquare,FaReact,FaNodeJs,FaBootstrap,FaRegFilePdf} from "react-icons/fa";
import Python from "../img/icons8-python.svg"

function About() {
  return (
    <section className='sec-about container' id='about'>
        <h1 className='my-5 text-center text-uppercase'>
          a
          <span className='border-bottom border-2 border-dark'>bout m</span>
          e
          </h1>
        <div className="about-body text-center">
            <p className='w-75 mx-auto fs-4 fw-light'>Hello! My name is Chalermchai wauwai. I’m 26 years old. I'm currently studying for a Bachelor's degree in computer science. I’m interested in creating websites for business. programming language skills HTML CSS Javascript and Python. I have experience with development frameworks & library react node.js bootstrap. </p>
        </div>
        <div className='my-5 text-center'>
          <h2 className='py-2'>Never stop learning new things and constantly improving myself.</h2>
        </div>
        <div className="about-footer my-5 text-center">
            <h5>Technologies I know:</h5>
            <p className='fs-2'>
              <FaHtml5 className='text-danger me-2'/>
              <FaCss3Alt className='text-primary me-2'/>
              <FaJsSquare className='text-warning me-2'/>
              <FaReact className='text-info me-2'/>
              <FaNodeJs className='text-success me-2'/>
              <FaBootstrap className='me-2' style={{color:"#6f42c1"}}/>
              <img style={{width:"2rem"}} src={Python} alt="python" />
            </p>
        </div>
        <div className='about-btn text-center pb-5'>
            <a className='btn btn-primary rounded-2 border border-primary border-2 p-3 me-3 ' href='../../public/Resume.jpg' download><FaRegFilePdf className='fs-5'/>Resume</a>
            <a className='btn btn-outline-primary border border-primary border-2 rounded-2 p-3'href="#contact">Contact</a>
        </div>
    </section>
  )
}

export default About

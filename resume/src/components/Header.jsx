import React from 'react'
import Navbar from './Navbar'
import profile from '../img/profile.jpg'
import { FaDiscord,FaFacebook } from "react-icons/fa";
import '../App.css'

function Header() {

  return (
    <>
        <Navbar/>
        <header className='header d-flex flex-column justify-content-center align-items-center w-100 vh-100'>
            <div className="header-content d-md-flex  align-items-center justify-content-center ">
                <div className="header-img d-flex align-items-center justify-content-center">
                    <img src={profile} className="rounded-4 border border-white border-4" alt="chalermchai wauwai"/>
                </div>
                <div className='mx-5  d-flex flex-column align-items-center'>
                    <div className='header-text text-center text-white text-uppercase my-4'>
                        <h1 className='mt-3'>Chalermchai Wauwai</h1>
                        <h4 className='fw-light'>Front end developer</h4>
                    </div>
                    <div className="header-btn d-flex justify-content-center align-items-center">
                        <a className='btn btn-primary d-flex justify-content-center align-items-center fs-1 me-3' href="https://www.facebook.com/phet.ifrog" target={"_blank"}><FaFacebook className="bi bi-facebook text-light i-nav-hover"/></a>
                        <a className='fs-1 btn btn-primary d-flex justify-content-center align-items-center' href="https://discord.com/users/Milili#7989" target={"_blank"}><FaDiscord className="bi bi-discord text-light i-nav-hover"/></a>
                    </div>  
                </div>
            </div>
            
        </header>
    </>
  )
}

export default Header

import React ,{ useEffect, useState } from 'react'
import '../App.css'

function navbar() {
    const [navscroll,setNavscroll] = useState("navbar-scroll")

    const listenscrollevent = () =>{
        window.scrollY > 100 ? setNavscroll("navbar-scroll") : setNavscroll("navbar-top")
    }

    useEffect (()=>{
        window.addEventListener("scroll", listenscrollevent);
        return () => {
            window.removeEventListener("scroll", listenscrollevent);
          };
    },[])

  return (
    <nav className={`navbar navbar-expand-md navbar-dark ${navscroll}`}>
            <div className="container">
                <a className="navbar-brand fw-bolder fs-2" href="#">CW-PORT</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bolder fs-5">
                        <li className="nav-item me-3">
                            <a className="nav-link nav-hover" aria-current="page" href="#">HOME</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link nav-hover" href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link nav-hover" href="#work">WORK</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link nav-hover" href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
  )
}

export default navbar

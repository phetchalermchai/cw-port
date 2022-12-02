import React from 'react'
import Photo from "../img/portfolio/project-1.jpg"
import { FaGithub ,FaGlobeAsia} from "react-icons/fa";

function Project({name,content,image,github}) {
    console.log(Photo);
  return (
    <div className="col card-group">
        <div className="card">
            <img src={`/src/img/portfolio/`+image+`.png`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    {content}
                </p>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-outline-primary d-flex align-items-center me-2 p-2"><FaGlobeAsia/>Demo</button>
                    <a className="btn btn-primary p-2 d-flex align-items-center" href={github} target={"_blank"}><FaGithub className="me-1"/>Source</a>
                </div>
             </div>
        </div>
    </div>
              
  )
}

export default Project

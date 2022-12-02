import React, { useState } from "react";
import ListProject from "../data/Project";
import Project from "./Project";
import Table from "./Table";

function Portfolio() {
  const [dataproject,setDataproject] = useState(ListProject)
  const [veiwphoto,setViewphoto] = useState(true)
  const [veiwtable,setViewble] = useState(false)
  const [photoactive,setPhotoactive] = useState("active")
  const [tableactive,setTableactive] = useState("")

  const Selectphoto = () =>{
    if(veiwphoto === false) {
      setViewphoto(true)
      setPhotoactive("active")
      setTableactive("")
    }
    setViewble(false)
  }

  const Selecttable = () =>{
    if(veiwtable === false) {
      setViewble(true)
      setPhotoactive("")
      setTableactive("active")
    }
    setViewphoto(false)
  }

  return (
    <section className="container-fuiled sec-port" id="work">
      <div className="port-header text-center ">
        <h1 className="pt-5">
            P
          <span className="border-bottom border-2 border-dark">
          ORTFOLI
          </span>
            O
          </h1>
      </div>
      <div className="port-menu pt-3 text-center">
        <div className="container">
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
              <button onClick={Selectphoto} className={`nav-link ${photoactive}`} href="#">Photo view</button>
            </li>
            <li className="nav-item">
              <button onClick={Selecttable} className={`nav-link ${tableactive}`} href="#table">Table view</button>
            </li>
          </ul>
        </div>
      </div>
      {veiwphoto && <div className="port-card container pb-5 pt-4 ">
        <div className="row row-cols-1 row-cols-md-3 gx-4 gy-5">
              {dataproject.map((data,index)=>{
                return <Project key={index} {...data}/>
              })}
        </div>
      </div>}
      {veiwtable && <Table/>}
    </section>
  );
}

export default Portfolio;

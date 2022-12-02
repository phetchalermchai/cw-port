import React from 'react'
import { FaFacebook ,FaDiscord } from "react-icons/fa";

function Footter() {
  return (
    <div className='container-fuiled mt-5 py-4' style={{background:"#f1f1f1"}}>
      <h4 className='text-center '>STAY CONNECTED</h4>
      <div className='text-center m-3 '>
        <a className='text-secondary' href="https://www.facebook.com/phet.ifrog" target={"_blank"}>
         <FaFacebook className='fs-2 me-3 '/>
        </a>
        <a className='text-secondary' href="https://discord.com/users/Milili#7989" target={"_blank"}>
         <FaDiscord className='fs-2 '/>
        </a>
      </div>
      <div className="container">
        <p className='text-center border-secondary border-top border-bottom p-3'>Designed with ❤️ by <u>Chalermchai Wauwai.</u></p>
      </div>
    </div>
  )
}

export default Footter

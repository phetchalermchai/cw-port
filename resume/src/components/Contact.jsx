import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaMapMarkerAlt,FaMobileAlt,FaLine,FaLocationArrow } from "react-icons/fa";
import Line from "../img/line.jpg"

function Contact() {
    const form = useRef();
    const name = useRef();
    const email = useRef();
    const subject = useRef();
    const messege = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_edrueiv', 'template_qb7d6td', form.current, 'nWQw05lJgommLMESh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    name.current.value=""
    email.current.value=""
    subject.current.value=""
    messege.current.value=""
  };

//   const clearinput = () =>{
//     name.current.value=""
//     email.current.value=""
//     subject.current.value=""
//     messege.current.value=""
//   }

  return (
    <section className='container-fuiled' id='contact'>
        <h1 className='text-center my-5'>
            C
            <span className='border-bottom border-2 border-dark'>ONTAC</span>
            T
            </h1>
        <div className="contact-form container d-flex justify-content-center">
            <div className='row d-flex justify-content-center align-items-center border border-1 rounded  py-5 w-75'>
                <form className='col-12 col-md-6 p-4' ref={form} onSubmit={sendEmail}>
                    <div className="input-group mb-4">
                        <label className='input-group-text'>Name</label>
                        <input className='form-control' type="text" name="user_name" ref={name}/>
                    </div>
                    <div className="input-group mb-4">
                        <label className='input-group-text'>Email</label>
                        <input className='form-control' type="email" name="user_email" ref={email}/>
                    </div>
                    <div className="input-group mb-4">
                        <label className='input-group-text'>Subject</label>
                        <input className='form-control' type="text" name="user_subject" ref={subject}/>
                    </div>
                    <div className="input-group mb-4">
                        <label className='input-group-text'>Message</label>
                        <textarea className='form-control' name="message" style={{height:"10rem"}} ref={messege}/>
                    </div>
                    <button type='submit' className='d-flex justify-content-center align-items-center btn p-3 btn-primary w-100'><FaLocationArrow className='me-2'/>Send Message</button>
                </form>
                        <div class="col-md-1 barrier"><h1 className='vr' style={{height:"40rem"}}></h1></div>
                    <div className='col-12 col-md-4   text-center'>
                        <div className='border-bottom mb-3'>
                            <h3><FaMapMarkerAlt/></h3>
                            <h4>HOME ADDRESS</h4>
                            <p>89/624 Mueang Nonthaburi District,Nonthaburi 11000</p>
                        </div>
                        <div className='border-bottom mb-3'>
                            <h3><FaMobileAlt/></h3>
                            <h4 className='text-uppercase'>mobile number</h4>
                            <p>095-716-3209</p>
                        </div>
                        <div className='mb-3'>
                            <h3><FaLine/></h3>
                            <h4 className='text-uppercase'>line</h4>
                            <p>LINE ID : phetchalermchai</p>
                            <img src={Line} style={{width:"10rem"}} alt="line" />
                        </div>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Contact

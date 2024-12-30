import "./css/modalcuenta.css"
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { CiRainbow } from "react-icons/ci";
import { IoMdArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import React from 'react'
export const Modalcuenta=({isOpen2,modalClose2})=>{

    return(
        <div className={`modal2 ${isOpen2?"is-open":""}`}>
         
            <p className='nunito-uniquifier-cuenta'>Ingresa con tu usuario y contraseña </p>
            <IoClose className='buttonmodal'onClick={modalClose2}></IoClose>
           
          <div className='datos'>
            <form>

           <MdAlternateEmail className="email"></MdAlternateEmail>
           <input className='inputdatos' type="text" placeholder='Ingrese cuenta' />
           <br />
           <br />
           <CiRainbow className="email"></CiRainbow>
           <input type="number" className="inputdatos" placeholder="Ingrese Contraseña" />
           <br />
           <button className="btniniciarsecion">Ingresar </button>                        
           </form>   
          </div>
     
          <div>
            <p className='aoutorizacion'>
            Autorizo los <strong>términos y condiciones</strong> y acepto el tratamiento de mis <strong>datos personales.</strong>
          </p>
          </div>
        </div>
    )
}
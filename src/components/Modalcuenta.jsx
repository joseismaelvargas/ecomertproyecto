import "./css/modalcuenta.css"
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import React from 'react'
export const Modalcuenta=({isOpen2,modalClose2})=>{

    return(
        <div className={`modal2 ${isOpen2?"is-open":""}`}>
          <div className='container2'>
           
            <p className='parrafocontainer'>Ingresa a tu cuenta Vea seleccionando una de las opciones para confirmar tu identidad</p>
            <AiTwotoneCloseCircle className='buttonmodal'onClick={modalClose2}></AiTwotoneCloseCircle>
          
          </div>
          <hr />
          <div className='datos'>

           <AiOutlineMail className='email'></AiOutlineMail>
           <input className='inputdatos' type="text" placeholder='Ingrese cuenta' />
          </div>
     
          <div>
            <p className='aoutorizacion'>
            Autorizo los <strong>términos y condiciones</strong> y acepto el tratamiento de mis <strong>datos personales.</strong>
          </p>
          </div>
        </div>
    )
}
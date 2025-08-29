import "./css/modalcuenta.css"
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { CiRainbow } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form"
import { logear } from "./helpers/queries";
import React from 'react'
export const Modalcuenta=({isOpen2,modalClose2})=>{
  const { register, handleSubmit ,formState:{errors},reset,setValue} = useForm();

        const nav=useNavigate()
     const loGearse=(data)=>{
      
     if(logear(data)){
    
      nav("/administrador")
      location.reload()
     }else{
      alert("Error al logearse")
     }
     }
    return(
        <div className={`nunito-uniquifier-modal2 ${isOpen2?"is-open":""}`}>
         
   
            <IoClose className='buttonmodal'onClick={modalClose2}></IoClose>
           
          <div className='datos'>   
                  <h2 className='nunito-uniquifier-cuenta text-center'>Iniciar sesión </h2>
                  <p className="text-center text-white fs-7">Para comenzar ingresá tu email</p>
            <form onSubmit={handleSubmit(loGearse)} className="form">

               {/* <label htmlFor="">Para comenzar ingresá tu email</label> */}
              <input className='inputdatos' type="text" placeholder='Email' {...register("email",
              {
                required:"Campo requerido"
              }
              )} />
               {errors.email&&<p className="errors">{errors.email.message}</p>}
              <br />
           
             
              <input type="number" className="inputdatos" placeholder=" Contraseña" {...register("pasword",{
                required:"Agregue Contraseña"
              })} />
              {errors.pasword&&<p className="errors">{errors.pasword.message}</p>}
               <br />
              <button className="btniniciarsecion"type="submit" >Ingresar </button>  
              <button className="btn-cuenta">Crear Cuenta</button>                                              
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
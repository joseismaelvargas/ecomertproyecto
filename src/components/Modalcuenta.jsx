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
         
            <p className='nunito-uniquifier-cuenta'>Ingresa con tu usuario y contraseña </p>
            <IoClose className='buttonmodal'onClick={modalClose2}></IoClose>
           
          <div className='datos'>
            <form onSubmit={handleSubmit(loGearse)}>

             <MdAlternateEmail className="email"></MdAlternateEmail>
              <input className='inputdatos' type="text" placeholder='Ingrese cuenta' {...register("email",
              {
                required:"Agregue email.."
              }
              )} />
               {errors.email&&<p className="errors">{errors.email.message}</p>}
              <br />
              <br />
             <CiRainbow className="email"></CiRainbow>
              <input type="number" className="inputdatos" placeholder="Ingrese Contraseña" {...register("pasword",{
                required:"Agregue Contraseña"
              })} />
              {errors.pasword&&<p className="errors">{errors.pasword.message}</p>}
               <br />
              <button className="btniniciarsecion"type="submit" >Ingresar </button>                        
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
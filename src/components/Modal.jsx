

import { BiPlus } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import'./css/carrito.css'
import { CgMathMinus } from "react-icons/cg";


import"./css/modal.css"
import React,{useEffect, useState} from 'react'


export const Modal=({isOpen,modalClose,carrito})=>{

   


//    

    return(
        <article className={`modal ${isOpen?"is-open":""}`}>
            <div className="container">
              <h1 className='nunito-uniquifier-titlemodal'>Mi Carrito</h1>
               <h1 className='titlemodal' onClick={modalClose}>X</h1>
               
            
            </div> 
            <br />
            <div className='carrito2'>
                <div className="prop">
                { carrito.map((prop)=>(
                
               
                <div key={prop.id} className="containerCarrito">
                <img className="imgcarrito" src={prop.img} alt="" />
                   {/* <p className="nunito-uniquifier-nombrecarrito">{prop.name}</p> */}
                   <p className="nunito-uniquifier-preciocarrito">${prop.precio*prop.cantidad}</p>
                    <CgMathMinus onClick={()=>dismuirCantidad(prop.id)} className="menos"></CgMathMinus>
                   <p className="nunito-uniquifier-preciocarrito">{prop.cantidad}</p>
                     <BiPlus  className ="pluz" onClick={()=>aumentarCantidad(prop.id)}></BiPlus>
                   <FiX className="fix" onClick={()=>eliminarproducto(prop.id)}></FiX>
                    
                 </div>
                
            ))}
            
                </div>
            
            </div>
            
       

            
           
        </article>
    )
}
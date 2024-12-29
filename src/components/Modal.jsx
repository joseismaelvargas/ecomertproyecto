

import { BiPlus } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import'./css/carrito.css'
import { CgMathMinus } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";

import"./css/modal.css"
import React,{useEffect, useState} from 'react'


export const Modal=({isOpen,modalClose,carrito,setCarrito})=>{

   
    const aumentarCantidad = (id) => {
          const nuevoCarrito = carrito.map((prop) => {
            if(prop.id===id){
              return{...prop,
                  cantidad:prop.cantidad+1,
                  
              }
          }
          return prop;
            });
        console.log("dato",nuevoCarrito)
        setCarrito([...nuevoCarrito]); 
     
      };
      const dismuirCantidad=(id)=>{
        const nuevoCarrito=carrito.map((prop=>{
          
          if(prop.id===id){
            if(prop.cantidad<=1){
              return prop
            }else{
            return{...prop,
              cantidad:prop.cantidad-1
            }
          }
          }
          return prop;
        }))
        setCarrito([...nuevoCarrito])
      }


    const eliminarProducto=(id)=>{
      const nuevoCarrito=carrito.filter((prop)=>prop.id!==id)
      setCarrito([...nuevoCarrito])
    }
    const Totalpagar=()=>{
      return carrito.reduce((acc,el)=>acc+el.precio*el.cantidad,0).toFixed(2)
    }



    return(
        <article className={`modal ${isOpen?"is-open":""}`}>
            <div className="container">
              <h1 className='nunito-uniquifier-titlemodal'>Mi Carrito</h1>
               <h1 className='titlemodal' onClick={modalClose}>X</h1>
               
            
            </div> 
            <br />
            <div className='carrito2'>
                <div className="prop">

                {carrito!=0? carrito.map((prop)=>(
                
               
                <div key={prop.id} className="containerCarrito">
                <img className="imgcarrito" src={prop.img} alt="" />
           
                   <p className="nunito-uniquifier-preciocarrito">${prop.precio*prop.cantidad}</p>
                    <CgMathMinus onClick={()=>dismuirCantidad(prop.id)} className="menos"></CgMathMinus>
                   <p className="nunito-uniquifier-preciocarrito">{prop.cantidad}</p>
                     <BiPlus  className ="pluz" onClick={()=>aumentarCantidad(prop.id)}></BiPlus>
                   <FiX className="fix" onClick={()=>eliminarProducto(prop.id)}></FiX>
                    
                 </div>
                
            )):<h4 className="text-center" ><AiOutlineShoppingCart></AiOutlineShoppingCart> El carrito esta vacio</h4>}
            
                </div>
                <hr />
                <h3 className="text-center">Total ${Totalpagar()}</h3>
            
            </div>
            
       

            
           
        </article>
    )
}


import { BiPlus } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import'./css/carrito.css'
import { CgMathMinus } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";

import"./css/modal.css"
import React,{useEffect, useState} from 'react'


export const Modal=({isOpen,modalClose,carrito,setCarrito})=>{
     console.log(carrito)
   
    const aumentarCantidad = (id) => {
          const nuevoCarrito = carrito.map((prop) => {
            if(prop._id===id){
              return{...prop,
                  cantidad:prop.cantidad+1,
                  
              }
          }
          return prop;
            });
        console.log("dato",nuevoCarrito)
        setCarrito([...nuevoCarrito]); 
     
      };
      const disminuirCantidad=(id)=>{
        const nuevoCarrito=carrito.map((prop=>{
          
          if(prop._id===id){
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
      const nuevoCarrito=carrito.filter((prop)=>prop._id!==id)
      setCarrito([...nuevoCarrito])
    }
    const Totalpagar=()=>{
      return carrito.reduce((acc,el)=>acc+el.precio*el.cantidad,0).toFixed(2)
    }



    return(
      <>
        <article className={`modalcarrito ${isOpen?"is-open":""}`}>
            <div className="container">
              <h1 className='nunito-uniquifier-titlemodal'>Mi Carrito</h1>
               <h1 className='titlemodal' onClick={modalClose}>X</h1>
               
            
            </div> 
            <br />
            <div className='carrito2'>
            <div>
  {carrito.length > 0 ? (
    <>
      {carrito.map((prop) => (
        <div key={prop._id} className="containerCarrito">
          <img className="imgcarrito" src={prop.imageProduct} alt={`Imagen de ${prop.nombre}`} />
          <p className="nunito-uniquifier-preciocarrito">
            ${(prop.precio * prop.cantidad).toFixed(2)}
          </p>
          <CgMathMinus
            onClick={() => disminuirCantidad(prop._id)}
            className="menos"
            aria-label="Disminuir cantidad"
          />
          <p className="nunito-uniquifier-preciocarrito">{prop.cantidad}</p>
          <BiPlus
            onClick={() => aumentarCantidad(prop._id)}
            className="pluz"
            aria-label="Aumentar cantidad"
          />
          <FiX
            onClick={() => eliminarProducto(prop._id)}
            className="fix"
            aria-label="Eliminar producto"
          />
        </div>
      ))}
      <hr />
      <h3 className="text-center">Total: ${Totalpagar()}</h3>
      <button className="boton-comprar">Comprar</button>
    </>
  ) : (
    <h5 className="text-center">
      <AiOutlineShoppingCart className="carritovacio" />
      <br />
      El carrito está vacío
    </h5>
  )}
</div>
                
               
            </div>
            </article>
        </>
    )
}
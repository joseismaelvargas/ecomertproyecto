


// import { Carrito } from '../../components/mostrarProducto'
// import { Total } from '../../components/totalpagar'
import"./css/modal.css"
import React,{useState} from 'react'


export const Modal=({isOpen,modalClose})=>{

    return(
        <article className={`modal ${isOpen?"is-open":""}`}>
            <div className="container">
              <h1 className='titlemodal'>Mi Carrito</h1>
               <h1 className='titlemodal' onClick={modalClose}>X</h1>
               
            
            </div> 
            <br />
            <div className='carrito2'>
               {/* <Carrito></Carrito> */}
            </div>
            
       

            
           
        </article>
    )
}
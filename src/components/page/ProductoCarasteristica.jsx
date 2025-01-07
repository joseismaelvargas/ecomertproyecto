import { useParams } from 'react-router-dom';
import "../css/carasteristica.css"
import { Modal } from '../Modal.jsx';
import { URL_productos } from '../helpers/queries.js';
import { useEffect, useState } from 'react';
export const ProductoCarasteristica=()=>{
    const [productos,setProductos]=useState([])
    const {id}=useParams();
     const Api= async (id)=>{
       let response=await fetch(URL_productos)
       if(response.status===200){
          let datos=await response.json()
          let buscarproducto=datos.find((element)=>element.id===id)
          if(buscarproducto){
            setProductos(buscarproducto)
          }
       }
     }
  if (!productos) {
        return <p>Cargando producto...</p>; // Muestra un mensaje mientras se cargan los datos
      }
          
      console.log(productos)
    useEffect(()=>{
        Api(id)
    },[id])
   
    return(
        <>
       
        <section className='sectioncarasteristica'> 
            
         
            
                    <div >
                        <img src={productos.img}></img>
                        <h1>{productos.name}</h1>
                        <p>{productos.text}</p>
                        <p>{productos.precio}</p>
                    </div>
              
       
          </section>
        </>
    )
}
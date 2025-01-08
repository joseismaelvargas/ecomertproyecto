import { useParams } from 'react-router-dom';

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
  
          
      console.log(productos)
    useEffect(()=>{
        Api(id)
    },[id])
   
    return(
        <>
       
        <section className='container-fluid nunito-uniquifier-section '> 
            
          <div className=' producto-div '>
            <div className='container-producto'>
                 <img className='img' src="https://arcencohogar.vtexassets.com/arquivos/ids/300653-800-800?v=637665765074270000&width=800&height=800&aspect=true" alt="imgproducto" />
          
                <p class="d-inline-flex gap-1">
        
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
   Descripcion
          </button>
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
   Detalles de producto
          </button>
              </p>
         <div class="collapse" id="collapseExample">
           <div class="card card-body">
              <h2>Mantené tu jardín impecable con el Cortacésped Eléctrico Einhell 1400W</h2>
              <p>Elegí el Cortacésped Eléctrico Einhell de 1400W y transformá tu experiencia de jardinería. Con su potencia y diseño ergonómico, cuidar tu casa nunca fue tan fácil.</p>
            </div>
                 </div>
                 <div class="collapse" id="collapseExample2">
           <div class="card card-body">
              <p>Tipo de Producto	Cortadoras de Césped</p>
            </div>
                 </div>
            </div>
            
            
            

             <div className='descripcion'>
              <p className='title'>Cortacésped Eléctrico 1400 W Einhell</p>
              <p className='precio'>$299.990</p>
              <div className='cantidad'></div>
              <button className='buttoncarasteristicas' >Comprar Ahora</button>
              <button className='buttoncarasteristicas'>Agregar al Carrito</button>

             </div>
          </div>
              
       
          </section>
        </>
    )
}
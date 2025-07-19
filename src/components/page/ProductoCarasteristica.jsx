import { useParams } from 'react-router-dom';
import "../css/carasteristica.css"
import { Modalcuenta } from '../Modalcuenta.jsx';
import { Modal } from '../Modal.jsx';
import { useLocation } from 'react-router-dom';
import { URL_productos } from '../helpers/queries.js';
import { useEffect, useState } from 'react';
export const ProductoCarasteristica=({isOpen,isOpen2,modalClose,modalClose2,carrito,setCarrito})=>{
const [productos,setProductos]=useState([])
const {pathname}=useLocation()
const {id}=useParams();
console.log(id)


const Api= async (id)=>{
       let response=await fetch(URL_productos)
       if(response.status===200){
          let datos=await response.json()
          let buscarproducto=datos.find((element)=>element._id===id)
     
          if(buscarproducto){
            setProductos(buscarproducto)
          }
       }
     }


      
    useEffect(()=>{
        Api(id)
    },[id])
    
    const agregarCarrito=(id)=>{
    
        
      if (productos) {
        
      
        setCarrito((prevCarrito) => {
          
          if (!prevCarrito.some((item) => item.id === productos.id)) {
            return [...prevCarrito, productos];
          } else {
            console.log(`El producto con id ${productos.id} ya está en el carrito.`);
            return prevCarrito; 
          }
        });
      } else {
        console.error('No hay producto para agregar al carrito.');
      }
    };
     
      const Descuento=()=>{
        return productos.precio+20

      }

    return(
        <>
<Modal isOpen={isOpen}  modalClose={modalClose} carrito={carrito} setCarrito={setCarrito} ></Modal>
         <Modalcuenta isOpen2={isOpen2} modalClose2={modalClose2} ></Modalcuenta>
        <section className='container-fluid nunito-uniquifier-section '> 
            
          <div className=' producto-div '>
            <div className='container-producto'>
                 <img className='img' src={productos.imageProduct
} alt="imgproducto" />
          
                <p className="d-inline-flex gap-1">
        
          <button className="button1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
   Descripcion
          </button>
          <button className="button2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
   Detalles de producto
          </button>
              </p>
         <div class="collapse show" id="collapseExample">
           <div class="card-body">
              <h2 className='titledescripcion'>{productos.name}</h2>
              <p className='parrafosdescripcion'>{productos.text}</p>
            </div>
                 </div>
                 <div class="collapse" id="collapseExample2">
           <div class="card-body">
              <p>Tipo de Producto	Cortadoras de Césped</p>
            </div>
                 </div>
            </div>
            
            
            

             <div className='descripcion'>
              <p className='title'>{productos.name}</p>
              <p className='title-especifico'>{productos.namedetallado}</p>
              <p className='oferta'><span className='porcentajedescuento'>%20</span> <del><span>${Descuento()}.00 </span></del> </p>
              <p className='precio'>${productos.precio}.00</p>
              <div className='cantidad'></div>
                <div style={{margin: "50px"}}>
                      
                        <h5 className='medios'>Medios de pago</h5>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/dd2c3fc3-45ea-43e6-bcff-9cf5110c979b___b3c0a27259d4e4f9a2a08bad60b8cf90.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/52443e71-e815-4a4a-baad-470fd14e6f87___66fbd627742cea2d6e58b4c5545f62c9.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/1b403e7f-21b3-412c-9ed0-49b7ba24a14b___daff6e2be4b4264d92181706dd034176.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/d0e38006-1466-4294-9868-d2e8969370a7___c8b105cadad8af6aca8d1164c6e2d070.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/6a5968fd-1ffb-4a1e-95b6-e50c6b97cc6c___53519102ea64f853910360c135478239.svg" alt=""  className="tarjetacarasteristica"/>
                         <hr />
                      
                       
                      </div>
              <button className='buttoncarasteristicas' >Comprar Ahora</button>
              <button className='buttoncarasteristicas' onClick={()=>agregarCarrito(productos.id)}>Agregar al Carrito</button>

             </div>
                    </div>
              
       
          </section>
        </>
    )
}
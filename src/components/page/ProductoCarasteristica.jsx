import { useParams } from 'react-router-dom';
import "../css/carasteristica.css"
import { Modalcuenta } from '../Modalcuenta.jsx';
import { Modal } from '../Modal.jsx';
import { useLocation } from 'react-router-dom';
import { URL_productos } from '../helpers/queries.js';
import React, { useEffect, useState } from 'react';
import { Productos } from '../Productos.jsx';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import React,{useState} from 'react';
// import { useState }from 'react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
export const ProductoCarasteristica=({isOpen,isOpen2,modalClose,modalClose2,carrito,setCarrito})=>{
const [productos,setProductos]=useState([])
const [thumbsSwiper, setThumbsSwiper] = useState(null);
const {pathname}=useLocation()
const {id}=useParams();
console.log(productos)


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
        <section className=' nunito-uniquifier-section '> 
            
          <div className=' producto-div '>
            <div className='container-producto'>
           
 <Swiper
        style={{
          "--swiper-navigation-color": "#000",
          "--swiper-pagination-color": "#000",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mb-4"
      >
        <SwiperSlide>
          <img src="https://imagenes.compragamer.com/productos/compragamer_Imganen_general_43818_Monitor_Lenovo_ThinkVision_S22i-30_21.5__FHD_IPS_75Hz_Anti_Glare_VESA_3c02c0d5-mini.jpg" alt="foto 1"  className='img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://imagenes.compragamer.com/productos/compragamer_Imganen_general_43817_Monitor_Lenovo_ThinkVision_S22i-30_21.5__FHD_IPS_75Hz_Anti_Glare_VESA_e7799117-mini.jpg" alt="foto 2" className='img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://imagenes.compragamer.com/productos/compragamer_Imganen_general_43817_Monitor_Lenovo_ThinkVision_S22i-30_21.5__FHD_IPS_75Hz_Anti_Glare_VESA_e7799117-mini.jpg" alt="foto 3" className='img' />
        </SwiperSlide>
      </Swiper>
       
                    <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
       className='my-thumbs'>
        <SwiperSlide>
          <img src="https://imagenes.compragamer.com/productos/compragamer_Imganen_general_43817_Monitor_Lenovo_ThinkVision_S22i-30_21.5__FHD_IPS_75Hz_Anti_Glare_VESA_e7799117-mini.jpg" alt="thumb 1" className='img-thumb' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://imagenes.compragamer.com/productos/compragamer_Imganen_general_43816_Monitor_Lenovo_ThinkVision_S22i-30_21.5__FHD_IPS_75Hz_Anti_Glare_VESA_a2a37396-mini.jpg" alt="thumb 2"  className='img-thumb'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://imagenes.compragamer.com/productos/compragamer_Imganen_general_43818_Monitor_Lenovo_ThinkVision_S22i-30_21.5__FHD_IPS_75Hz_Anti_Glare_VESA_3c02c0d5-mini.jpg" alt="thumb 3" className='img-thumb' />
        </SwiperSlide>
      </Swiper>

  

            </div>
            
            
            

             <div className='descripcion'>  
               <p className='name'>{productos.name}</p>
              <p className='title-especifico'>{productos.namedetallado}</p>
              <p className='oferta text-center'><span className='porcentajedescuento'>%20</span> <del><span>${Descuento()}.00 </span></del> </p>
              <p className='precio text-center'>${productos.precio}.00</p>
               <div className='d-flex mx-auto my-3'>
                <input type="number"  className='number' placeholder='1'/>
                <button className='añadirCarrito' onClick={()=>agregarCarrito(productos.id)}>Agregar al Carrito</button>
               </div>
              
              <button className='comprar' >Comprar Ahora</button>
            
             <ul className='my-2'>
              <li>Diseño eficiente de enfriador de triple ventilador con enfriamiento semipasivo</li>
              <li>Reloj base extremadamente alto de la GPU: TBA MHz</li>
              <li>Conectores de alimentación PCIe adicionales: 1x 12VHPWR de 16 pines</li>
              <li>Enorme reloj de impulso de la GPU: TBA MHz</li>
              <li>Compatible con DLSS 4 y NVIDIA Reflex 2</li>
              <li>Potencia de cálculo pura: 21.760 núcleos CUDA (shaders)</li>
            </ul>
             
                <div style={{margin: "50px"}}>
                      
                        <h5 className='medios'>Medios de pago</h5>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/dd2c3fc3-45ea-43e6-bcff-9cf5110c979b___b3c0a27259d4e4f9a2a08bad60b8cf90.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/52443e71-e815-4a4a-baad-470fd14e6f87___66fbd627742cea2d6e58b4c5545f62c9.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/1b403e7f-21b3-412c-9ed0-49b7ba24a14b___daff6e2be4b4264d92181706dd034176.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/d0e38006-1466-4294-9868-d2e8969370a7___c8b105cadad8af6aca8d1164c6e2d070.svg" alt=""  className="tarjetacarasteristica"/>
                        <img src="https://arcencohogareasy.vtexassets.com/assets/vtex.file-manager-graphql/images/6a5968fd-1ffb-4a1e-95b6-e50c6b97cc6c___53519102ea64f853910360c135478239.svg" alt=""  className="tarjetacarasteristica"/>
                         <hr />
                      
                       
                      </div>
   
            
             </div>
                    </div>
              
       
          </section>
          <Productos carrito={carrito} setCarrito={setCarrito} title={"Mas vistos"} categoria={"Muebles"} ></Productos>
     
        </>
    )
}
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'; 
import { useState,useEffect } from 'react';
import { Modal } from './Modal';
import { Usemodal } from './helpers/Usemodal';
import { URL_productos } from './helpers/queries'
import "./css/Productos.css"
import { Link } from 'react-router-dom';

export const Productos=({carrito,setCarrito})=>{
     
     const [producto,setProducto]=useState([])
       console.log(producto)
    const apiProdcto=async()=>{
       try{
       const api=await(fetch(URL_productos))
       if(api.status===200){
         const propiedades=await api.json()
         setProducto(propiedades)
         
       }
       }catch{
        console.log("error en la solicitud")
       }
      }
      useEffect(()=>{
       apiProdcto()
      },[])


    const Agregar=(id)=>{ 
      
        const productos = producto.find((producto) => producto.id === id);
    
        if (!productos) {
            console.error("Producto no encontrado");
            return;
        }
    
      
        const productoEnCarrito = carrito.find((item) => item.id === id);
    
        let carritonew;
    
        if (productoEnCarrito) {
          
            carritonew = carrito.map((item) =>
                item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
            );
        } else {
        
            carritonew = [...carrito, { ...productos, cantidad: 1 }];
        }
    
        
        setCarrito(carritonew);
 
    
     
      
    };
    
    return(
        <>
        
        <section className="container-fluid">
            <h2 className="nunito-uniquifier-title">Productos Recomendados</h2>
            <Swiper modules={[Autoplay,Navigation]} loop={true} navigation slidesPerView={4} 
              spaceBetween={1} 
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 1,
                },
              }}
               
              className="carrusel d-flex justify-content-between flex-wrap">
               
                {
                    producto.map((productos)=>
                         <SwiperSlide key={productos.id} >
                            <div className="target" >
                            <Link to={`/carasteristica/${productos.id}`}>
      <img className="img" src={productos.img} alt={productos.name} />
    </Link>
                                <hr />
                            <div className="target-info">
                               <h3 className="nunito-uniquifier">{productos.name}</h3>
                             <p className="nunito-uniquifier-text">{productos.text}</p>
                             <p className="nunito-uniquifier-precio">${productos.precio.toFixed(2)}</p> 
                          
                            </div>
                           
                               <button className="nunito-uniquifier-boton" onClick={()=>Agregar(productos.id)} >Agregar al carrito</button>
                               
                            </div>
                       </SwiperSlide>
                    )
                }
                  
            </Swiper>
           

        </section>
        </>
    )
}
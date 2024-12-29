import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'; 
import { useState } from 'react';
import { Modal } from './Modal';
import { Usemodal } from './helpers/Usemodal';

import "./css/Productos.css"

export const Productos=({carrito,setCarrito})=>{
   
    
    const productos =[
        {
            id:1,
            name:"Leche",
            img:"https://arcencohogareasy.vtexassets.com/arquivos/ids/369069-500-auto?v=638392132383700000&width=500&height=auto&aspect=true",
            precio:300,
            cantidad:1,
            text:"Economipedia explica qué es un producto en economía, cómo se clasifica en productos de consumo e inversión, y qué características "
    
    
        },
        {
            id:2,
            name:"Pan",
            img:"https://tse3.mm.bing.net/th?id=OIP.MuwmdtQsUBqFFMcbJf14wwHaFz&pid=Api&P=0&h=180",
            precio:500,
            cantidad:1,
            text:"Los productos son todos aquellos objetos u artefactos, fabricados en industrias, empresas siguiendo una línea de producción o de manera artesanal por "
    
        },
        {
            id:3,
            name:"Papel",
            img:"https://tse1.mm.bing.net/th?id=OIP.HHrXUUjqfFAiN_94ckC7-gHaF8&pid=Api&P=0&h=180",
            precio:200,
            cantidad:1,
            text:"Economipedia explica qué es un producto en economía, cómo se clasifica en productos de consumo e inversión,o",
    
    
        },
        {
            id:4,
            name:"Telefono",
            img:"https://4.bp.blogspot.com/-utaQSDunwZQ/TVrE4_ldt-I/AAAAAAAABgo/0AulpI4CoRU/s1600/Celular+LG-T310i.jpg",
            precio:1000,
            cantidad:1,
            text:"Descubre los diferentes modelos de iPhone, sus chips, cámaras, baterías y funciones de seguridad y privacidad. Conoce también los accesorios de Apple como AirPods, ."
    
    
        },
        {
            id:5,
            name:"SmartTV",
            img:"http://i.mlcdn.com.br/1500x1500/smart-tv-led-40-samsung-un40h5550ag-full-hdconversor-integrado-3-hdmi-2-usb-wi-fi-193355300.jpg",
            precio:800,
            text:"incomparable.Características técnicas del producto:Tamaño de pantalla: 65 pulgadasResolución: 4K Ultra HDTecnología de pantalla: ",
            cantidad:1,
    
    
        },
        {
            id:6,
            name:"Mouse",
            img:"https://tse1.mm.bing.net/th?id=OIP.TZbitX--A3TRn0NoSslTYgHaHa&pid=Api&P=0&h=180",
            precio:150,
            text:"El ratón o mouse (en inglés pronunciado /maʊs/) es un dispositivo apuntador ",
            cantidad:1,
            
    
    
        },{
            id:7,
            name:"Fernet",
            img:"https://tse2.mm.bing.net/th?id=OIP.HgRKNY_BfecCBr0YQ0SPjgHaJe&pid=Api&P=0&h=180",
            precio:230,
            text:"Encuentra fernet de diferentes marcas, tamaños y precios ",
            cantidad:1,
        },{
            id:8,
            name:"Iphone",
            img:"https://external.webstorage.gr/Product-Images/1421066/iphone11-black-1000-1421066.jpg",
            precio:2300,
            text:"Descubre los diferentes modelos de iPhone, sus chips, cámaras,",
            cantidad:1,
            
        },{
            id:9,
            name:"Axe",
            img:"https://th.bing.com/th/id/OIP.iS4wrDSxUgtXfeOpLGuwGgHaHa?rs=1&pid=ImgDetMain",
            precio:400,
            text:"WEBEncuentra desodorante Axe de diferentes fragancias, formatos y precios ",
            cantidad:1,
        },
            {
                id:10,
                name:"Sabrositos",
                img:"https://carrefourar.vtexassets.com/arquivos/ids/214713/7798073177363_02.jpg?v=637680118290600000",
                precio:300,
                text:"Encuentra comida de Perro de diferentes marcas, tamaños y precios en MercadoLibre, el sitio .",
                cantidad:1,
        }
    ]
    const Agregar=(id)=>{ 
      
        const producto = productos.find((producto) => producto.id === id);
    
        if (!producto) {
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
        
            carritonew = [...carrito, { ...producto, cantidad: 1 }];
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
                  spaceBetween: 20,
                },
              }}
               
              className="carrusel d-flex justify-content-between flex-wrap">
               
                {
                    productos.map((productos)=>
                         <SwiperSlide  >
                            <div className="target" key={productos.id}>
                            <img className="img" src={productos.img} alt={productos.name}></img>
                                <hr />
                            <div className="target-info">
                               <h3 className="nunito-uniquifier">{productos.name}</h3>
                             <p className="nunito-uniquifier-text">{productos.text}</p>
                             <p className="nunito-uniquifier-precio">${productos.precio}</p> 
                          
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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'; 

import '../css/Index.css'
const Categorias = () => {
  return (
    <div className='containerCategorias'>
        <h4 className='text-start text-white'>Explorá nuestras <strong>categorías</strong> </h4>
        <br />
       <div className='container-categoria'>
         <div className='divimg'>
            <img src="/img/5126636.jpg" alt="" />
                  <div className='div-info-caja'>
    <p className='saira-condensed-thin '>Procesadores</p>

    
              </div>
         </div>
         <div>
            
         </div>
              <Swiper modules={[Autoplay, Navigation,Pagination]}
             
  autoplay={{ delay: 5000 }}
  navigation
  loop={true}
  slidesPerView={6}
  spaceBetween={1}
 
 breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                     direction: 'horizontal', 
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 17,
                     direction: 'horizontal', 
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 1,
                },}}
                direction='vertical'
        className='container-padre'     >
       
         
       
         
         
            <SwiperSlide><div className='caja'> 
             <div> 
              <img src="/img/Ram.jpeg" alt="" className='img-caja' />
               <div className='div-info-caja'>
    <p className='saira-condensed-thin-caja '>RAM</p>

    
              </div>
             </div>
            <div><img src="/img/TecladoMecanicoGamer.jpg" alt="" className='img-caja' />
                     <div className='div-info-caja'>
    <p className='saira-condensed-thin-caja'>Teclado</p>

    
              </div>
            </div>

            <div>
              <img src="/img/placas-de-video.jpg" alt="" className='img-caja' />
               <div className='div-info-caja'>
    <p className='saira-condensed-thin-caja'>Placas de video</p>

    
              </div>
            </div>
            <div>
              <img src="/img/sillaGamerRGB.jpeg" alt="" className='img-caja' />
               <div className='div-info-caja'>
    <p className='saira-condensed-thin-caja'>Sillas gamer</p>

    
              </div>
            </div>
            
            </div>
          
            </SwiperSlide>
              <SwiperSlide><div className='caja'>
                <div>
                    <img src="/img/monitor2.png" alt="" className='img-caja' />
               <div className='div-info-caja'>
    <p className='saira-condensed-thin-caja'>Monitor gamer</p>

    
              </div>
                </div>
                <div>
                         <img src="/img/placa.jpg" alt="" className='img-caja' />
               <div className='div-info-caja'>
    <p className='saira-condensed-thin-caja'>Placa madre</p>

    
              </div>
                </div>
                <div>
                       <img src="/img/perifericos.jpg" alt="" className='img-caja' />
               <div className='div-info-caja'>
    <p className='saira-condensed-thin-caja'>Perifericos</p>

    
              </div>
                </div>
                <div>     <img src="/img/fuente.jpeg" alt="" className='img-caja' />
               <div className='div-info-caja'>
    <p className='saira-condensed-thin-caja'>Fuentes</p>

    
              </div>   </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='caja'>
                <div>  <img src="/img/Gabinete.jpg" alt="" className='img-caja' />
               <div className='div-info-caja'>
    <p className='saira-condensed-thin-caja'>Gabinetes</p>

    
              </div>
              </div>
                <div>
                       <img src="/img/notebook.jpg" alt="" className='img-caja' />
               <div className='div-info-caja'>
    <p className='saira-condensed-thin-caja'>Laptop Gamer</p>

    
              </div>
                </div>
                <div>
                       <img src="/img/impresoras.jpg" alt="" className='img-caja' />
               <div className='div-info-caja'>
    <p className='saira-condensed-thin-caja'>Impresoras</p>

    
              </div>
                </div>
                <div>
                  <img src="/img/palante.webp" alt="" className='img-caja' />
               <div className='div-info-caja'>
    <p className='saira-condensed-thin-caja'>Parlante</p>

    
              </div>
                </div>
                </div></SwiperSlide>
           
                      
       
      
         </Swiper> 
         
       </div>   
       
</div>

  )
}

export default Categorias

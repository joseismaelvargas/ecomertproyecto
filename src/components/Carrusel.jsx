import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'; 

import"./css/Carrusel.css"
export const Carrusel=()=>{
return(
    <>
    <section className='carruselindex container-fluid'>
    <Swiper modules={[Autoplay, Navigation,Pagination]}
             
            
            autoplay={{
                delay:5000
            }}
            navigation
            pagination={{
                clickable: true,
              }}
            loop={true} 
              className='swiper'>
        <SwiperSlide >
           
              <img src="/img/wp12657222.webp" className='img-carrusel' alt="" />
              <div className='div-info'>
    <h1 className='saira-condensed-thin '>Enciende tu pasión por la tecnología
</h1>
<h3 className='saira-condensed-thin-h2'>Descubre lo ultimo en tecnologia</h3>
       <button className='button'>Explorar</button>
              </div>
        
        </SwiperSlide>
        <SwiperSlide >
         <img src="https://www.malditohard.com.ar/wp-content/uploads/product/14/Slide_AMDAll_20.png"  className="img-carrusel"alt="" />
       
        </SwiperSlide>
          <SwiperSlide >
         <img src="https://www.malditohard.com.ar/wp-content/uploads/product/14/Slide_Armadas_20.png"  className="img-carrusel"alt="" />
       
    
        </SwiperSlide>
    
    </Swiper>
</section>
    </>
)
}
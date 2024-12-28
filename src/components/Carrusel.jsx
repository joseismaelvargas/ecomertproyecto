import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules'; 

import"./css/Carrusel.css"
export const Carrusel=()=>{
return(
    <>
    <section className='carrusel container-fluid'>
    <Swiper modules={[Autoplay, Navigation,Pagination]}
              slidesPerView={1} 
              spaceBetween={0} 
            
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
            <div className='imgswiper'>
          
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className='imgswiper2'>

            </div>
     
        </SwiperSlide>
        <SwiperSlide>
            <div className='imgswiper3'>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='imgswiper4'></div>
        </SwiperSlide>
    </Swiper>
</section>
    </>
)
}
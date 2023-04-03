
import { GWrapper } from '../../../styles/globale-styles.e'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import 'swiper/css';
import {
    BannerBody,
    SliderImg,
    BannerContent,
    ButtonB
} from './banner.e'
import 'swiper/css/pagination';
import SwiperCore, {
    Pagination,
    Parallax,
    Navigation,
    EffectFade,
    Controller,
    Autoplay,
  } from "swiper";
SwiperCore.use([Pagination, Parallax, Navigation, EffectFade, Autoplay]);

 const Banner = ({
     data
 }) => {
    return (
        <>
        <Swiper
      spaceBetween={5}
      slidesPerView={1}
      autoplay={true}
      loop={true}
      parallax={true}
      speed={800}
       pagination={{
           clickable: true
       }}
      allowTouchMove={true}
    modules={[Controller]}
      
    >
         {data?.map((item , idx)=>(
                  
                    
        <SwiperSlide>
            <BannerBody>
                <SliderImg className='animate__animated animate__fadeInDown'>
                    <img className='img' src={`http://s499964.smrtp.ru//storage/app/public/${item?.img}`}/>
                </SliderImg>
                <GWrapper>
                    <BannerContent className='animate__animated animate__fadeInDown'>
                        <h2>{item?.title}</h2>
                        <p>{item?.description}</p>
                            <Link href={'#katalog'}>
                                <a>
                                <ButtonB>
                                Каталог
                                </ButtonB>
                                </a>
                            </Link>
                            
                    </BannerContent>
                </GWrapper>
            </BannerBody>
        </SwiperSlide>
        ))}
            </Swiper>
        </>
    )
}

export default Banner

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

 const BannerLegal = () => {
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
        <SwiperSlide>
            <BannerBody>
                <SliderImg>
                    <img className='img' src={'/home.png'}/>
                </SliderImg>
                <GWrapper>
                    <BannerContent>
                        <h2>Страхование имущества</h2>
                        <p>Страхование позволит собственникам и арендаторам помещений защитить бизнес от непредвиденных расходов. Вы можете заключить договор, включающий комплекс рисков наряду с повреждением имущества в результате пожара.</p>
                            <Link href={'#katalog'}>
                                <a>
                                <ButtonB>
                                Перейти
                                </ButtonB>
                                </a>
                            </Link>
                            
                    </BannerContent>
                </GWrapper>
            </BannerBody>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBody>
                <SliderImg>
                    <img className='img' src={'/banner2.png'}/>
                </SliderImg>
                <GWrapper>
                    <BannerContent>
                        <h2>Сmраховая компания Страховка</h2>
                        <p>Онлайн магазин по продаже полисов
                            быстро и не выходя из дома. Оформите любой
                            полис за несколько кликов</p>
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
            </Swiper>
        </>
    )
}

export default BannerLegal
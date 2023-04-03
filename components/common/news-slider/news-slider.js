import { GWrapper } from '../../../styles/globale-styles.e'
import {NSlider,NewsSlide} from './news-slider.e'
import Image  from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import parse from 'html-react-parser'
import { api } from '../../../services/api'
import { useEffect ,useState } from 'react'
import { useRouter } from 'next/router';
import 'swiper/css';
import Link from 'next/link';
 const NewsSlider = ({
   data
 })=>{
   const router = useRouter()
   const [news , setNews] = useState()
   useEffect(() => {
       const  slug  = Object.values(router.query).toString();
   
     api.get('news', {headers: { 'accept-language': router.locale } }).then(async(response)=>{
       setNews(response.data.data)
     })
   
     }, []);
     const Newww = ({ data}) => {
       return (
        <GWrapper>
        <h2 className='block-title'>Новости и акции</h2>
      <NSlider>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            autoplay={true}
            speed={1000}

            pagination={{
              clickable: true,
            }}
            navigation={{clickable:true}}

            breakpoints={{
              200: {
                width:null,
                slidesPerView: 1,
                // centeredSlides:true,

              },
              500: {
                width:null,
                slidesPerView: 2,
                // loop:true,

              },
              1024 : {
                width:null,
                slidesPerView:3,
              },
              1700:{
                width:null,
                
                // centeredSlides:false,
                // loop:false
              }
            }}
            >
                {data?.map((item , idx)=>(
                  <SwiperSlide key={idx}  >
                  <Link href={`/new/${item?.slug}`}>
                    <a>
                      <NewsSlide>
                          <img width={380} height={210} alt='img' src= {`http://s499964.smrtp.ru//storage/app/public/${item?.img}` }/>
                          <p>{item?.title}</p>

                          
                          </NewsSlide>
                        </a>
                      {/* </Link> */}
                      </Link>
                      </SwiperSlide>

                    ))}
              
                  
              
          
              
            </Swiper>
            
        </NSlider>
    </GWrapper>

       )
     }
    return (
           <Newww data={news}/>
    )
}

export default NewsSlider
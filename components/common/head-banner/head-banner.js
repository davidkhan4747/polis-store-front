import { GWrapper } from "../../../styles/globale-styles.e";
import {BodyBanner,BannerContent}  from './head-banner.e'
import {SliderImg} from '../Banner/banner.e'
import { api } from "../../../services/api";
import { useRouter  } from "next/router";
import { useEffect ,useState } from 'react'

const HeadBanner = ({data }) => {
        const [banner , setBanner ] = useState()
        const router = useRouter()
        useEffect(() => {
                api.get('checkpolis', {headers: { 'accept-language': router.locale } }).then(async(response)=>{
                        setBanner(response.data.data[0])
                        console.log(response.data.data)
                })
        }, []);
     
    return (
        <BodyBanner>
                <SliderImg className='animate__animated animate__fadeInDown'>
                        <img className='img' src={`http://s499964.smrtp.ru//storage/app/public/${data?.img}` }/>
                </SliderImg>
                <GWrapper>
                        <BannerContent className='animate__animated animate__fadeInDown'>
                                <h2>{data?.title}</h2>
                                <p>{data?.description}</p>
                        </BannerContent>
                </GWrapper>
        </BodyBanner>
)

      
}
export default HeadBanner
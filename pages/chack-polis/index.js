import { Layout ,ChackPolis, BreadCrumb ,HeadBanner , NewsSlider } from "../../components";
import { api } from "../../services/api";
import { useRouter  } from "next/router";
import { useEffect ,useState } from 'react'

const PolisChack = () => {
    const [banner , setBanner ] = useState()
        const router = useRouter()
        useEffect(() => {
                api.get('checkpolis', {headers: { 'accept-language': router.locale } }).then(async(response)=>{
                        setBanner(response.data.data[0])
                        console.log(response.data.data)
                })
        }, []);
    return (
        
        <>
        {banner == null ? (
        <Layout chack='chack' title={'Проверка полиса'}>
            <BreadCrumb Link2={'/chack-polis'}  Crumb2={'Проверка полиса'} white='white' />
            <HeadBanner  data={banner}/>
            <ChackPolis/>
            <NewsSlider/>

        </Layout>
        ):(
            <div className="body">
                <div class="loader-two">
                <div class="loader__square"></div>
                <span class="loader-label">Loading...</span>
                </div>
            </div>
            
        )}
        
        </>
    )
}

export default PolisChack
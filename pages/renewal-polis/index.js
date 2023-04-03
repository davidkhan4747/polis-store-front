import { Layout , HeadBanner , BreadCrumb , RenewalBlock , NewsSlider} from "../../components";
import { api } from "../../services/api";
import { useRouter  } from "next/router";
import { useEffect ,useState } from 'react'
const RenevalPolis = () =>{
    const [banner , setBanner ] = useState()
        const router = useRouter()
        useEffect(() => {
                api.get('renewalpolis', {headers: { 'accept-language': router.locale } }).then(async(response)=>{
                        setBanner(response.data.data[0])
                        console.log(response.data.data[0])
                })
        }, []);
    return (
        <>
        {banner == null ? (
            <Layout renewal={'renewal'} title={'Продление полиса'}>
                <BreadCrumb Link2={'/renewal-polis'}Crumb2={'Продлить полис'} white='white' />
                <HeadBanner data={banner}/>
                <RenewalBlock/>
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
export default RenevalPolis


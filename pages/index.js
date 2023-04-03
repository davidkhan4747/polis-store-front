import { Layout , Banner , MainCatalog ,NewsSlider} from "../components";
import { api } from '../services/api'
import { useEffect ,useState } from 'react'
import { useRouter } from 'next/router';
export default function Home() {
  const router = useRouter()
  const [main , setMain ] =useState()
  useEffect(() => {
    api.get('main', {headers: { 'accept-language': router.locale } }).then(async(response)=>{
      setMain(response.data)
      console.log(response.data)
    })
  
    }, []);

  return (
    <>
    {main == null ? (
      <Layout navloc={'active'} fizYur='active'  title={'Корпоративный сайт  '}>
        <div className="back">
          <Banner data={main?.banner}/>
          <MainCatalog data={main} legal={false} />
          <NewsSlider/>
        </div>
      </Layout>
    ):(
      <div className="body">
                <div className="loader-two">
                <div className="loader__square"></div>
                <span className="loader-label">Loading...</span>
                </div>
          </div>
    )}
      
    </>
    
  );}
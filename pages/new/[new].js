import {New , Layout ,BreadCrumb} from '../../components/index'
import { api } from '../../services/api'
import { useEffect ,useState } from 'react'
import { useRouter } from 'next/router';

const NewP = () => {
    const router = useRouter()
    const [news , setNews] = useState()
    useEffect(() => {
    
      api.get('news').then(async(response)=>{
        setNews(response.data.data[0])
        console.log(response.data.data[0])
      })
    
      }, []);
    return (
        <Layout title={'News'} navloc={''}>
            <BreadCrumb Link2={'/new/asd'} Crumb2={'Новости и акции'}/>
            <New data={news}/>
 
        </Layout>
    )
}

export  default NewP
import { Layout ,Casco , Sport , NewsSlider ,Travel , Appartament } from "../../components";
import { Router, useRouter } from 'next/router'
import { api } from "../../services/api";
import { parseCookies } from "nookies";
import { useState , useEffect } from "react";
import Link from "next/link";
import { getAPIСlient } from "../../services/axios";
export const getServerSideProps = async (ctx) => {

  
    const apiClient = getAPIСlient(ctx);
    const { ["nextauth.token"]: token } = parseCookies(ctx);
    if (!token) {
      return {
        redirect: {
          destination: "/auth",
          permanent: false,
        },
      };
    }
  
    // await apiClient.get("user-data").then(async (res) => {
    //   // console.log("--->>>", res);
    // });
    return {
      props: {
        // @ts-ignore
        // ...(await serverSideTranslations(ctx.locale, ["common"])),
      },
    };
  };
const Individuals = () => {
    const router = useRouter()
   const [avto , setAvto ] =useState()
   const [sport , setSport] = useState()
   const [user , setUser] = useState()
  useEffect(() => {
    api.get('avto', {headers: { 'accept-language': router.locale } }).then(async(response)=>{
        setAvto(response.data)
    })
    api.get('sport', {headers: { 'accept-language': router.locale } }).then(async(response)=>{
        setSport(response.data)
    })
  

    }, []);
    

    const typePolis = Object.values(router.query)
    return (
        <Layout  title={'Физическим лицам'}>
                <>
                {typePolis == 'casco' ? <Casco data={avto} /> : ''}
                {typePolis == 'sport' ?  <Sport data={sport}/> : ''}
                {typePolis == 'travel' ? <Travel/> : ''}
                {typePolis == 'Appartament' ? <Appartament/> : ''}
                </>
            

            <NewsSlider/>
        </Layout>
    )
}

export default Individuals


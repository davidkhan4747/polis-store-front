import {MainArea} from '../../components'
import { parseCookies ,setCookie } from "nookies";
import { useEffect, useState } from 'react';
import { Layout } from '../../components'
import { getAPIСlient } from "../../services/axios";
import { api } from '../../services/api';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthProvider";

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
const Personal = () =>{
    const [user , setUser] = useState()
    const { profile } = useContext(AuthContext);

    useEffect(() => {
    console.log(profile)

        const { "nextauth.token": token } = parseCookies();
        // if (token) {
        //   api.get("auth-user").then(async (res) => {
          
        //     await setUser({
        //       name: res.data.name,
        //       surname: res.data.surname,
        //       email: res.data.email,
        //       avatar: res.data.avatar,
        //     });
        //     setCookie(undefined, "nextauth.token", res.data.token, {
        //         maxAge: 60 * 60 * 1,
        //       });
      
        //       api.defaults.headers.common[
        //         "Authorization"
        //       ] = `Bearer ${res.data.token}`;
        //   }
          
        //   )
        // }
      }, []);
    return (
        <Layout userk={'userk'} title={'Personal area'}>
             <MainArea/>
        </Layout>
    )
}
export default Personal
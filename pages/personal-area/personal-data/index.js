import { Layout , PersonalData } from "../../../components";
import { api } from "../../../services/api";
import { useEffect , useState } from "react";
import { parseCookies } from "nookies";
import { AuthProvider } from "../../../context/AuthProvider";
import axios from "axios";
import { AuthContext } from "../../../context/AuthProvider";
import { useContext } from "react"; 


const MyDetails = () => {
    const [user , setUser] = useState()
    const { "nextauth.token": token } = parseCookies();

    const get_user =  async() => {
        if( token ){
            const headers = {
                "Authorization" : `Bearer ${ token }`
            };
            let result = await axios( {
                method:'get',
                url: 'auth-user',
                baseURL: "http://s499964.smrtp.ru/api/",
                data: JSON.stringify({}),
                headers: headers,
            } );
            setUser( result.data  )
            console.log( "get_user", user );
        } else {
            console.log("Login Token is empty");
        }
    }
      useEffect(() => {
     
        get_user()
      }, []);
    return (
        <>
            <Layout title={'Мои детали'}>
                <PersonalData data={user}/>
            </Layout>
        </>
    )
}

export default MyDetails
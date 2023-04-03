import { Layout , MyPolis } from "../../../components";
import { useState , useEffect } from "react";
import { api } from "../../../services/api";
import { parseCookies } from "nookies";
import axios from "axios";
const YourPolis =  () => {
    const [user , setUser] = useState()
    const [userPolis , setUserPolis] =useState()
    const { "nextauth.token": token } = parseCookies();
    const id = {
        userId : user?.id
    }
    const headers = {
        "Authorization" : `Bearer ${ token }`
    };
    useEffect(() => {
        api.get('auth-user' , 
        {
            headers: {
                "Authorization" : `Bearer ${ token }` //the token is a variable which holds the token
            } }
        ).then(async(result)=>{
            setUser( result.data  )
            console.log(result.data.id)
            if(result?.data?.id) {
                api.post('userListPolis' ,{userId : result?.data.id} ).then(async(response)=>{
                    setUserPolis(response.data.polis)
                   })
            }else{
                console.log('pizdes')
            }
            
        })
      
      }, []);
     
    return (
        <>
            <Layout title={'Ваши страховые полисы'}>
                <MyPolis data={userPolis}/>
            </Layout>
        </>
    )
}

export default YourPolis
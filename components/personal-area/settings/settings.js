import { GWrapper } from "../../../styles/globale-styles.e";
import {Title ,TitleBlock ,GoPArea,UserDataBlock,DataBlock,MyInput,
        PageButton
        } from '../personal-data/personal-data.e'
import { parseCookies, setCookie, destroyCookie } from "nookies";
import Router from "next/router";
import {useForm} from 'react-hook-form'
import Link from "next/dist/client/link";
import { useState , useEffect} from "react";
import { api } from "../../../services/api";
const Settings =  () => {
    const Setting = () => {
        return (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.2291 21.9999C15.2291 18.2605 18.2605 15.2291 21.9999 15.2291C25.7393 15.2291 28.7707 18.2605 28.7707 21.9999C28.7707 25.7393 25.7393 28.7707 21.9999 28.7707C18.2605 28.7707 15.2291 25.7393 15.2291 21.9999Z" fill="#F6A729"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M20.8764 0.830143C21.4906 0.19464 22.5092 0.19464 23.1234 0.830143L28.4824 6.37491H36.0624C36.9254 6.37491 37.6249 7.07446 37.6249 7.93741V15.5174L43.1697 20.8764C43.8052 21.4906 43.8052 22.5092 43.1697 23.1234L37.6249 28.4824V36.0624C37.6249 36.9254 36.9254 37.6249 36.0624 37.6249H28.4824L23.1234 43.1697C22.5092 43.8052 21.4906 43.8052 20.8764 43.1697L15.5174 37.6249H7.93741C7.07446 37.6249 6.37491 36.9254 6.37491 36.0624V28.4824L0.830143 23.1234C0.194641 22.5092 0.19464 21.4906 0.830141 20.8764L6.37491 15.5174V7.93741C6.37491 7.07446 7.07446 6.37491 7.93741 6.37491H15.5174L20.8764 0.830143ZM21.9999 12.1041C16.5346 12.1041 12.1041 16.5346 12.1041 21.9999C12.1041 27.4652 16.5346 31.8957 21.9999 31.8957C27.4652 31.8957 31.8957 27.4652 31.8957 21.9999C31.8957 16.5346 27.4652 12.1041 21.9999 12.1041Z" fill="#F6A729"/>
        </svg>

        )
    }
    const { "nextauth.token": token } = parseCookies();
    const [dubble , setDubble] = useState(false)
    const {watch , register , handleSubmit ,formState:{errors , isValid}} = useForm({mode:'all'})
    const [user , setUser] = useState()
    const DubbleTrue = (dob) => {
        setDubble(dob)
    }
    useEffect(() => {
        api.get('auth-user' , 
        {
            headers: {
                "Authorization" : `Bearer ${ token }` //the token is a variable which holds the token
            } }
        ).then(async(result)=>{
            setUser( result.data  )
            console.log(result.data.id)
           
            
        })
      
      }, []);
      const values = {
          id : user?.id  ,
          new_code : watch().new_code ,
          old_code : watch().pass1
      }
    const onSubmit = () => {
        api.post('userChangePas' , values).then(async(res)=>{
            if(res.data.error){
                alert('Old pass is not valid')
            }
            console.log( res.data.error)
        })
    }
    function logOut() {
        destroyCookie(null, "nextauth.token");
        Router.push("/");
      }
    return (
        <>
            <GWrapper>
                <TitleBlock>
                    <Setting/>
                    <Title>Настройки профиля</Title>
                </TitleBlock>
                    <Link href={'/personal-area'}>
                        <a>
                    <GoPArea>
                    &#8592;  Вернуться в персональный кабинет
                    </GoPArea>
                        </a>
                    </Link>
                    <UserDataBlock>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Изменение пароля</h2>
                        <DataBlock>
                            <MyInput id="name">
                                <p>Введите старый пароль</p>
                                <input id="pass1" type={'password'} {...register('pass1' , {required : true}) } placeholder=" " required />
                            </MyInput>
                            <MyInput id="name">
                                <p>Введите новый пароль</p>
                                <input id="new_code_2" type={'password'} {...register('new_code_2' , {required : true}) }  placeholder=" " required />
                            </MyInput>
                            <MyInput id="name">
                                <p>Повторите новый пароль</p>
                                <input id="new_code" type={'password'}  {...register('new_code' , {required : true}) } placeholder=" " required />
                            </MyInput>
                            <PageButton disabled={watch().new_code !== watch().new_code_2 } type='submit'>Сохранить </PageButton> 

                        </DataBlock>
                       
                        </form>
                    </UserDataBlock>
                    <UserDataBlock>
                        <h2>Выход из аккаунта</h2>
                        <DataBlock>
                            
                            <PageButton onClick={logOut} className="logout" type='submit'>Выход </PageButton> 

                        </DataBlock>
                       
                    </UserDataBlock>
            </GWrapper>
        </>
    )
}

export default Settings 
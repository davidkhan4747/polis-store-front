import { GWrapper } from "../../../styles/globale-styles.e";
import {Title ,TitleBlock ,GoPArea,UserDataBlock,DataBlock,MyInput,
        Pasport,
        PageButton
        } from './personal-data.e'
import Link from "next/dist/client/link";
import { useState } from "react";
import {useForm} from 'react-hook-form'
import { api } from "../../../services/api";
const PersonalData =  ({data}) => {
    const Profile = () => {
        return (
        <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.0013 0.8125C12.6866 0.8125 9.1888 4.31028 9.1888 8.625C9.1888 12.9397 12.6866 16.4375 17.0013 16.4375C21.316 16.4375 24.8138 12.9397 24.8138 8.625C24.8138 4.31028 21.316 0.8125 17.0013 0.8125Z" fill="#F6A729"/>
            <path d="M8.66797 20.6042C4.35324 20.6042 0.855469 24.1019 0.855469 28.4167V30.8923C0.855469 32.4615 1.99273 33.7995 3.54145 34.0523C12.4557 35.5077 21.5469 35.5077 30.4612 34.0523C32.0099 33.7995 33.1471 32.4615 33.1471 30.8923V28.4167C33.1471 24.1019 29.6494 20.6042 25.3346 20.6042H24.6245C24.2401 20.6042 23.8582 20.6649 23.4928 20.7843L21.6897 21.373C18.6432 22.3678 15.3594 22.3678 12.3129 21.373L10.5098 20.7843C10.1444 20.6649 9.76247 20.6042 9.37811 20.6042H8.66797Z" fill="#F6A729"/>
        </svg>
        )
    }
    const [dubble , setDubble] = useState(false)
    const {watch , register , handleSubmit ,formState:{errors , isValid}} = useForm({mode:'all'})
    const [succses , setSuck] = useState()
    const onSubmit = (data, e) => {
        api.post('/userDetailSave' ,data, e).then(async(response)=>{
            setSuck(response)
        })
        console.log(data)
        
    }
    const DubbleTrue = (dob) => {
        setDubble(dob)
    }
    const user_id = data?.id
    return (
        <>
            <GWrapper>
                <TitleBlock>
                    <Profile/>
                    <Title>Мои детали</Title>
                    <Title>{data?.name}</Title>

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
                        <h2>Укажите личные данные</h2>
                        <DataBlock>
                            <MyInput id="use_sur" >
                                <p>Фамилия</p>
                                <input className={ `${errors.use_sur && 'errorI'}` }  id="use_sur" {...register('use_sur' , {required :false })}  placeholder={data?.surname}   required />
                            </MyInput>
                            <MyInput id="user_name">
                                <p>Имя</p>
                                <input id="user_name" className={ `${errors.user_name && 'errorI'}` }   {...register('user_name' , {required :false })} placeholder={data?.name}  required />
                            </MyInput>
                            <MyInput id="middle_name">
                                <p>Отчество</p>
                                <input id="middle_name" className={ `${errors.middle_name && 'errorI'}` }   {...register('middle_name' , {required :false })}  placeholder={data?.middleName}  required />
                            </MyInput>

                            <MyInput id="date_birth">
                            <p>  День рождение</p>
                            <input id="date_birth" className={ `${errors.date_birth && 'errorI'}` } value={data?.bornYear ? data?.bornYear : null}  {...register('date_birth' , {required :false })}  placeholder={data?.bornYear}  type={'date'}   />
                            </MyInput> 
                            


                        </DataBlock>
                        <DataBlock>
                            <MyInput  id='pas_type'>
                                <p>Паспорт  Гражданина</p>
                                <Pasport  id='pas_type' className={ `${errors.pas_type && 'errorI'}` } {...register('pas_type' , {required :false })}   placeholder={data?.passport} >
                                    <option value={'passport'}>Паспорт</option>
                                    <option value={'id'}>ID карта    </option>

                                </Pasport>
                            </MyInput> 
                        </DataBlock>
                        <DataBlock>
                            <MyInput id='seria_pas'>
                                <p>Серия паспорта</p>
                                <input id='seria_pas'   className={ `${errors.seria_pas && 'errorI'}` } {...register('seria_pas' , {required :false })}   placeholder={data?.seriaPas} type={'text'}   />
                            </MyInput> 
                            <MyInput id="issued_by">
                                <p>Кем выдан</p>
                                <input id="issued_by" type={'text'} className={ `${errors.issued_by && 'errorI'}` }  {...register('issued_by' , {required :false })} placeholder={data?.issuedPas}    />
                            </MyInput> 
                            <MyInput id="date_of_issue">
                                <p>Дата выдачи</p>
                                <input id="date_of_issue" type={'date'} className={ `${errors.date_of_issue && 'errorI'}` }  {...register('date_of_issue' , {required :false })}  placeholder={data?.dateIssuePas}  />
                            </MyInput> 
                        </DataBlock>
                        <h2>Укажите контактную информацию</h2>
                        <DataBlock>
                            <MyInput id="user_phone_number" >
                                <p>Номер телефона</p>
                                <input  id="user_phone_number" className={ `${errors.user_phone_number && 'errorI'}` }  {...register('user_phone_number' , {required :false })}  placeholder={data?.phoneNumber} type={'text'}    />
                            </MyInput> 
                            <MyInput id="user_phone_number_2" >
                                <p>Номер 2  телефона</p>
                                <input id="user_phone_number_2"  className={ `${errors.user_phone_number_2 && 'errorI'}` }type={'text'} {...register('user_phone_number_2' , {required :false })}    placeholder={data?.phoneNumber2}   />
                            </MyInput> 
                            <MyInput id="user_email"> 
                                <p>E-Mail </p>
                                <input id="user_email"  className={ `${errors.user_email && 'errorI'}` } {...register('user_email' , {required :false })} value={data?.email}  type={'email'} />
                            </MyInput> 
                            { dubble == true ? (
                                <>
                                    <MyInput>
                                <p>Номер телефона 3</p>
                                <input id="user_phone_number_3"  className={ `${errors.user_phone_number_3 && 'errorI'}` }   {...register('user_phone_number_3' , {required :false })} type={'text'} placeholder={data?.phoneNumber3} />
                            </MyInput> 
                            <MyInput>
                                <p>Номер   телефона 4</p>
                                <input id="user_phone_number_4"  className={ `${errors.user_phone_number_4 && 'errorI'}` } {...register('user_phone_number_4' , {required :false })} type={'text'} placeholder={data?.phoneNumber4}  />
                            </MyInput> 
                            <MyInput>
                                <p>E-Mail  2</p>
                                <input id="user_email_2" type={'email'} className={ `${errors.user_email_2 && 'errorI'}` } {...register('user_email_2' , {required :false })}  placeholder={data?.email2} />
                            </MyInput> 
                                </>
                            ):''}
                        </DataBlock>
                            <center>
                                {dubble == false  ? ( <PageButton onClick={ () => DubbleTrue(true)} type='button'>   Добавить +  </PageButton> ) : ( <PageButton onClick={ () => DubbleTrue(false)} > Убрать </PageButton>) }
                            </center> 
                        <h2>Укажите адрес проживания</h2>
                        <DataBlock>
                            <MyInput>
                                <p>Укажите индекс</p>
                                <input id="index" className={ `${errors.index && 'errorI'}` } {...register('index' , {required :false })}  placeholder={data?.index} type={'text'}    />
                            </MyInput> 
                                <Pasport  className={ `${errors.city && 'errorI'}` } {...register('city' , {required :false })} placeholder={data?.city} id="city">
                                    <option value={'tash'} >Ташкентская область</option>
                                    <option value={'chimn'} >ID карта    </option>
                                </Pasport>
                                <Pasport className={ `${errors.area && 'errorI'}` } {...register('area' , {required :false })}   id="area" placeholder={data?.area}>
                                    <option>Район/Город</option>
                                    <option value={'ad'} >ad   </option>
                                    <option value={'sa'} >sa  </option>

                                </Pasport>
                            <MyInput    id="street_block"> 
                                <p>Улица/квартал</p>
                                <input  className={ `${errors.street_block && 'errorI'}` } {...register('street_block' , {required :false })} id="street_block" placeholder={data?.street} type={'text'}    />
                            </MyInput> 
                            <MyInput id="home_number">
                                <p>Номер вашего дома</p>
                                <input className={ `${errors.home_number && 'errorI'}` } {...register('home_number' , {required :false })} id="home_number" placeholder={data?.numberHome} type={'text'}  />
                            </MyInput> 
                            <MyInput  id="apartment_number">
                                <p>Номер квартиры/участка</p>
                                <input className={ `${errors.apartment_number && 'errorI'}` } {...register('apartment_number' , {required :false })} id="apartment_number" placeholder={data?.numberApartment} type={'text'}   />
                            </MyInput> 
                        </DataBlock>
                        <input id="id" className={ `${errors.id && 'errorI'}` }  {...register('id' , {required :false })}  defaultValue={user_id} />
                                {watch().id == user_id }
                        <center>
                        {JSON.stringify(watch(),    null ,2)}
                               <PageButton disabled={!isValid } type='submit' >Сохранить </PageButton> 
                        </center> 
                        </form>
                    </UserDataBlock>
            </GWrapper>
        </>
    )
}

export default PersonalData 
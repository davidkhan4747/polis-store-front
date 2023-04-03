import { useState , useEffect } from "react";
import { GWrapper } from "../../../styles/globale-styles.e";
import {MyInput , BreadCrumb ,HeadBanner,Button} from '../..'
import Link from "next/link";
import parse from 'html-react-parser'
import { api } from "../../../services/api";
import * as cascoE from './casco.e'
import StepsSVG from './steps-svg'
import CascoAccardion from './casco-accardion'
import {useForm} from 'react-hook-form'
import { parseCookies, setCookie, destroyCookie } from "nookies";
import axios from 'axios'
import Checkbox from '@mui/material/Checkbox';

const   Casco = ({data}) => {
    const renderBtn = () => {
        if(formStep > 2 ) {
            return undefined
        } else if (formStep === 2) {
            return (
                <>
                    <Button    title={'Способ оплаты'} />
                <p>На следующем шаге вы сможете выбрать способ оплаты</p>

               </>
            )
        } 
        if (formStep === 0) {
            return  (
            <>
             <Button disabled={!isValid } func={complateFormStep}  title={'Продолжить'} />
             {formStep === 0 && ( <p>На следующем шаге вы сможете заполнить данные водителя</p>)}
             {formStep === 1 && ( <p>На следующем шаге вы сможете заполнить  водителя</p>)}
            
            </>)
        }
        if (formStep === 1) {
            return  (
            <>
             <Button disabled={!isValid }  type={'submit'} title={'Продолжить'} />
             {formStep === 0 && ( <p>На следующем шаге вы сможете заполнить данные водителя</p>)}
             {formStep === 1 && ( <p>На следующем шаге вы сможете заполнить  водителя</p>)}
            
            </>)
        }
    }
    const [formStep , setFormStep] = useState(0)
    const {watch , register , handleSubmit ,formState:{errors , isValid}} = useForm({mode:'all'})
    const [check , setCheck ] = useState()
    const [model , setModel] =useState()
    const [care , setcare] = useState()
    const [year , setYear] = useState()
    const [prise , setPrise] =useState()
    const [prise1 , setPrise1] =  useState()
    const [value , setValue ] = useState(40000000)
    const polisss = (value * 1.2) / 100
    const [user , setUser] = useState()

    const  StoimostPolisa = Math.ceil(polisss)
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
        } else {
            console.log("Login Token is empty");
        }
    }
    const complateFormStep = () => {
        setFormStep( cur => cur + 1 )
    }

    const pushCar = (data) =>{
        const carmodel = {
            carBrands : data
        }
        api.post('carmodels', carmodel ).then(async(response)=>{
            setModel(response.data)
        })
    }
    const pushModel = (data) => {
        const carequipments = {
            carModels : data
        }
        api.post('carequipments', carequipments ).then(async(response)=>{
            setcare(response.data)
        })
    }
    const pushpush = (data) => {
        api.post('caryears', data ).then(async(response)=>{
            setYear(response.data)
        })

    }
    useEffect(() => {
        get_user()
      }, []);
    const metods = {
         values :{
            giveMeprise : function( carYears  )  {
                const car = {
                    carEquipments   ,
                    carModels,
                    carYears
            }
            
        
                api.post('carprices',  car ).then(async(response)=>{
                    setPrise(response?.data.carprices)
                    setPrise1(response?.data.carprices1)
                })
            },
            carEquipments : watch().carEquipments ? watch().carEquipments : 'NO',
            carModels : watch().carModel,
            StoimostPolisa  ,
            prise,
            carBrand : watch().carBrands ,
            value,
            CarYear  : watch().carYear,
            carNumber : watch().gosNumber,
            carPasNumber : watch().Texpas,
            surname : watch().surname,
            phoneNumber : watch().phoneNumber,
            address : watch().adress,
            ins_policy_start_date : watch().startTime,
            userId : user?.id
        }
    }
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    
    const carEquipments = metods.values.carEquipments
    const carModels = metods.values.carModels
    const [globalData , setGlobal] = useState()
    const onSubmit = () => {
        api.post('policySave', metods.values ).then(async(response)=>{
            setGlobal(response.data.carLast)
            console.log( metods.values )
        })
        complateFormStep()
    }
    return (
        
        <>
        <BreadCrumb Link2={'/individuals-polis/casco'}  Crumb2={'Каско'} white='white' />
        {data?.bannerAvto[0] ? (
            <HeadBanner data={data?.bannerAvto[0]}/>

        ):(
            <div className="heightB">
            <div className="Gcenter">
               <div className="loader">
                   <div></div>
               </div>
           </div>
           </div>
        )}
            <GWrapper>
                    <h2 className="block-title">Как оформить страховку</h2>
                    <cascoE.StepBlock>
                        <cascoE.Step>
                            <h4>1</h4>
                            <p>Заполните данные вашего транспорта</p>
                        </cascoE.Step>
                        <cascoE.Step>
                            <h4>2</h4>
                            <p>Введите данные водителя и собственников</p>
                        </cascoE.Step>
                        <cascoE.Step>
                            <h4>3</h4>
                            <p>Оплата</p>
                        </cascoE.Step>
                        <cascoE.Step>
                            <h4>4</h4>
                            <p>Полис придет на E-Mail через 10 минут</p>
                        </cascoE.Step>
                    </cascoE.StepBlock>
                    <h2 className="block-title">Данные авто</h2>
                    <StepsSVG step={formStep}/>
                    <cascoE.RenewalBlock>
                        <div className="w100">
                        <form onSubmit={handleSubmit(onSubmit)}>

                        <cascoE.RenewInput >

                            {formStep >= 0 && (
                                <div  className={formStep === 0 ? '' : 'hidden'}>
                                    <h3>Расчет стоимости страхового полиса</h3>
                                   
                                    <cascoE.PoleBlock>
                                    <p className="label">Выберите марку автомобиля</p>
                                    <cascoE.Option {...register('carBrands' , {required: false})} id="avto" name="carBrands"    onChange={(e)=>pushCar( e.target.value )}>
                                    <option>Выберите</option>
                                        {data?.data?.map((item,idx)=>(
                                                <option     value={item?.carBrands} key={idx}>{item?.carBrands}</option>
                                        ))} 
                                    </cascoE.Option  > 
                                    <p className="label">Выберите модель автомобиля</p>
                                    <cascoE.Option {...register('carModel' , {required: false})} disabled={!model} onChange={(e)=>pushModel(e.target.value)} >
                                        <option >Выберите</option>
                                        {model?.carModels?.map((item,idx)=>(
                                            <option  value={item.carModels} key={idx}>{item.carModels}</option>
                                        ))}
                                    </cascoE.Option>
                                    <p className="label">Выберите комплектацию автомобиля</p>
                                    <cascoE.Option   disabled={!care} onChange={(e)=>pushpush(e.target.value)}>
                                    <option>Выберите</option>
                                    {care?.carequipments?.map((item,idx)=>(
                                            <option   {...register('carEquipments' , {required: false})} value={item.carEquipments} key={idx}>{item.carEquipments}</option>
                                        ))}
                                       
                                    </cascoE.Option>

                                    <p className="label">Выберите год выпуска автомобиля</p>
                                    <cascoE.Option {...register('carYear' , {required: false})}  onChange={(e)=> { metods.values.giveMeprise(e.target.value,metods.values)}} disabled={!year}>
                                    <option>Выберите</option>
                                        {year?.caryear?.map((item,idx)=>(
                                            <option key={idx} >{item?.year}</option>
                                        ))}
                                    </cascoE.Option>

                                    <p className="label">Рыночная стоимость Вашего автомобиля</p>

                                    <cascoE.Sale value={prise} disabled/>
                                    <div className="prise-block">
                                        {/*  value == 40 000 000 */}
                                        <cascoE.Range 
                                        step={'100'} 
                                        disabled={!prise} 
                                        onChange={(e)=> {setValue(e.target.value)}} 
                                        min={'40000000'} 
                                        max={prise1}/>
                                        <span className="prise">{numberWithSpaces(value)}</span>
                                        {/* <input type="range" id="cowbell" name="cowbell"  min={'400000'} max={prise}  step="1000000"/> */}
                                    </div>
                            </cascoE.PoleBlock>
                            <p><Checkbox required  onClick={() => setCheck(!check)} /> Согласен с условиями публичной оферты страхования</p>
                                </div>
                            )}
                            {formStep >= 1 && (
                                <div className={formStep === 1 ? '' : 'hidden'}>
                                    <h3>Заполнение персональных данных</h3>
                                    <cascoE.PoleBlock>
                                        <cascoE.NewInput>   
                                            <MyInput id="gosNumber"  placeholder="00А000А" label={'Гос. номер'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <div>
                                        <MyInput id="Texpas"  placeholder="00А000А" label={'Номер тех.паспорта'}  register={register} required  />
                                        </div>
                                        <cascoE.NewInput>
                                            <MyInput id="surname"  placeholder="Василий Иванович" label={'Фамилия и имя'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>
                                            <MyInput id="phoneNumber" placeholder="+998-99-999-99-99" label={'Номер телефона'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>
                                            <MyInput id="adress" placeholder="Укажите адрес" label={'Адрес'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>
                                        <p>Начало страхования</p>
                                            <input id="strh-time"  className="m330" type={'date'} placeholder="Укажите"  {...register("startTime")} />
                                        </cascoE.NewInput>
                                    </cascoE.PoleBlock>
                                </div>
                            )}
                            {formStep >= 2 && (
                                <div className={formStep === 2 ? '' : 'hidden'}>
                                    <h3>Оплата страхового полиса</h3>
                                    {globalData ? (
                                        <cascoE.PoleBlock>
                                        <div>
                                            {/* Обьект срахования */}
                                            <h3>{globalData?.object_insurance} </h3>  
                                            {/* Обьект срахования */}
                                            <h3>{globalData?.type_insurance}  </h3>
                                            {/* Номер бланка */}
                                            <h3>{globalData?.num_treaty}     </h3>
                                            {/* Страховой продукт */}
                                            <h3>{globalData?.insurance_product}      </h3>
                                            {/* Премия по договору */}
                                            <h3>{globalData?.sum_ins_premium_payable}   </h3>
                                            {/* Срок действия */}
                                            <h3>{globalData?.ins_policy_date}     </h3>
                                        </div>
                                        <div>
                                                <h4>{globalData?.insurance_object}</h4>
                                            <h4>{globalData?.insurance_type}</h4>
                                            <h4>{globalData?.id}</h4>
                                            <h4>{globalData?.product_insurance}</h4>
                                            <h4>{globalData?.ins_premium_payable_sum ?globalData?.ins_premium_payable_sum : 'не найдено'}</h4>
                                            <h4>{globalData?.ins_policy_start_date} по {globalData?.ins_policy_end_date}</h4>
                                        </div>

                                        </cascoE.PoleBlock>
                                    ):(
                                        <>
                                        <div className="Gcenter">
                                           <div className="loader">
                                               <div></div>
                                           </div>
                                       </div>
                                       </>
                                    )}
                                   
                                </div>
                            )}
                            
                            </cascoE.RenewInput>
                            <cascoE.ButtonBlock>
                            {renderBtn()}
                             </cascoE.ButtonBlock>
                            </form>
                       
                        
                        
                        </div>
                        
                        <cascoE.BlockCalc>
                            <cascoE.InfoBlock className="priseBlock">
                                <h2>Результаты расчета</h2>
                                <span>Стоимость полиса</span>
                                <h4>{numberWithSpaces(StoimostPolisa)} сум </h4>
                                <span>Страховая сумма</span>
                                <h4>{numberWithSpaces(value)  } сум</h4>
                            </cascoE.InfoBlock>
                            <cascoE.InfoBlock>
                                <h2>Для продления полиса онлайн вам потребуется:</h2>
                                <p>Серия номер полиса и фамилия страхователя</p>
                                <p>Узнать стоимость продления можно до окончания срока действия полиса:</p>
                                <p>для каско 60 дней</p>
                                <p>для остальных видов 20 дней</p>
                            </cascoE.InfoBlock>
                        </cascoE.BlockCalc>
                    </cascoE.RenewalBlock>
                    <h2 className="block-title">Подробнее о полисе</h2>
                    <CascoAccardion/>
            </GWrapper>
        </>
    )
}
export default  Casco
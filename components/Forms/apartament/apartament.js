import { useState } from "react";
import { api } from "../../../services/api";
import { GWrapper } from "../../../styles/globale-styles.e";
import {MyInput , BreadCrumb ,HeadBanner ,Button} from '../..'
import * as cascoE from '../travel/travel.e'
import StepsSVG from './steps-svg'
import TravelAccardion from '../travel/travel-accardion'
import {useForm} from 'react-hook-form'
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup'; 
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import axios from 'axios'
import { useRouter } from "next/router";
const Travel = () => {
    const router = useRouter()
    const [apartment , setApartment ] =useState()
    const [formStep , setFormStep] = useState(0)
    const {watch , register , handleSubmit ,formState:{errors , isValid}} = useForm({mode:'all'})
    const [check , setCheck ] = useState()
    const [traveled , setTravelet] = useState(0)
    const [aparData , setData] = useState()
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    const polisSum = (watch().sum * 1) / 100
    const strah_dim = numberWithSpaces( polisSum)
    const strahavoy = Number(watch().sum)
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
        } else {
            console.log("Login Token is empty");
        }
    }
    useEffect(() => {
        get_user()
        api.get('apartment', {headers: { 'accept-language': router.locale } }).then(async(response)=>{
            setApartment(response.data)
          console.log(response.data)
        })
        }, []);
   
    const AddPerson = () => {
        setTravelet(traveled+1)
    }
    const RemovePers = () => {
        setTravelet(traveled-1)

    }
    const complateFormStep = () => {
        setFormStep( cur => cur + 1 )
    }
    const dates = {
        strahavoy , 
        polisSum , 
        day_start : watch().day_start,
        sum : watch().sum,
        name : watch().name,
        date_birth : watch().date_birth,
        seriapass : watch().seriapass,
        tel_number : watch().tel_number,
        adress : watch().adress,
        email : watch().email,
        god_postroyki : watch().god_postroyki,
        ploshad : watch().ploshad,
        Otd_ororod : watch().Otd_ororod,
        dvuj_im : watch().dvuj_im,
        cons_elem : watch().cons_elem,
        otv_sosedi : watch().otv_sosedi,
        userId : user?.id
        

    }
    const sumbitForm = (values ) => {
        api.post('apartmentSave', dates).then(async(response)=>{
            setData(response.data.carLast)
            console.log(response.data)
            console.log(dates)

        })
        complateFormStep()
    } 
    watch().family = false

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
    const [value , setValue ] = useState(100)
    
    return (
        
        <>
         <BreadCrumb Link2={'/individuals-polis/Appartament'}  Crumb2={'Страхование квартиры'} white='white' />
         {apartment?.bannerApartment[0] ? (
            <HeadBanner  data={apartment?.bannerApartment[0]}/>
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
                    <h2 className="block-title">Страхование квартиры</h2>
                    <StepsSVG step={formStep}/>
                    <cascoE.RenewalBlock>

                        <div className="w100">
                            <form onSubmit={handleSubmit(sumbitForm)}>

                        <cascoE.RenewInput >

                            {formStep >= 0 && (
                                
                                <div className={formStep === 0 ? '' : 'hidden'}>
                                  
                                    <h3>Расчет стоимости страхового полиса</h3>
                                    <p>Укажите сумму страховой компенсации</p>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        
                                    >
                                    <cascoE.PoleBlock className="ogra">
                                        <FormControlLabel value="25000000"  control={<Radio   {...register('sum' )}  />} label="25.000.000 сум" />
                                        <FormControlLabel value="75000000" control={<Radio  {...register('sum' )} />} label="75.000.000 сум" />
                                        <FormControlLabel value="125000000" control={<Radio  {...register('sum' )}/>} label="125.000.000 сум" />
                                        <FormControlLabel value="250000000" control={<Radio  {...register('sum' )}/>} label="250.000.000 сум" />
                                    </cascoE.PoleBlock>
                                    </RadioGroup>
                                    <MyInput id="day_start"   classN={'w100'} type={'date'}  placeholder="Выберите дату" label={'Начало страхования'}  register={register} required  />
                                    

                                        <p><Checkbox  onClick={() => setCheck(!check)} /> Согласен с условиями публичной оферты страхования</p>
                                </div>
                            )}
                               
                                               <>
                                               {formStep >= 1 && (
                                               <div className={formStep === 1 ? '' : 'hidden'}>
                                                   <h3>Заполнение персональных данных</h3>
                                                   <br/>
                                                   <cascoE.PoleBlock>
                                                       <cascoE.NewInput>   
                                                           <MyInput id="name"  placeholder="Укажите полное имя и фамилию" label={'Имя и фамилия'}  register={register} required  />
                                                       </cascoE.NewInput>
                                                       <cascoE.NewInput>   
                                                           <MyInput id="date_birth" type={'date'}  placeholder="Укажите дату" label={'Дата рождения'}  register={register} required  />
                                                       </cascoE.NewInput>
                                                       <cascoE.NewInput>   
                                                           <MyInput id="seriapass"  placeholder="Укажите серию и номер" label={'Серия и номер паспорта'}  register={register} required  />
                                                       </cascoE.NewInput>
                                                       <cascoE.NewInput>   
                                                           <MyInput id="tel_number"  placeholder="Укажите номер" label={'Номер телефона'}  register={register} required  />
                                                       </cascoE.NewInput>
                                                       <cascoE.NewInput>   
                                                           <MyInput id="adress"  placeholder="Укажите адрес проживания" label={'Адрес'}  register={register} required  />
                                                       </cascoE.NewInput>
                                                       <cascoE.NewInput>   
                                                           <MyInput id="email"  placeholder="Укажите ваш E-Mail" label={'E-Mail (необязательно)'}  register={register}   />
                                                       </cascoE.NewInput>
                                                   </cascoE.PoleBlock>
                                                       </div>
                                                   )}
                                               </>
                                               <>
                                {formStep >= 1 && (
                                <div className={formStep === 1 ? '' : 'hidden'}>
                                    <h3>Расчет стоимости страхового полиса</h3>
                                    <br/>
                                    <cascoE.PoleBlock>
                                        <cascoE.NewInput>   
                                            <MyInput id="god_postroyki" type={'date'}  placeholder="Выберите дату" label={'Укажите год постройки'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="ploshad"   placeholder="В кв. метрах" label={'Площадь участка или квартиры'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="Otd_ororod"  placeholder="" label={'Отделка, оборудования'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="dvuj_im"  placeholder="" label={'Движимое имущество'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="cons_elem"  placeholder="" label={'Конструктивные элементы'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="otv_sosedi"  placeholder="" label={'Ответсвенность перед соседями'}  register={register}   />
                                        </cascoE.NewInput>
                                    </cascoE.PoleBlock>
                                   
                                   
                                        </div>
                                    )}
                                </>
                            
                            {formStep >= 2 && (
                                <div className={formStep === 2 ? '' : 'hidden'}>
                                    <h3>Оплата страхового полиса</h3>
                                    {aparData ? (
                                        <cascoE.PoleBlock>
                                        <div>
                                            {/* Обьект срахования */}
                                            <h3>{aparData?.object_insurance} </h3>  
                                            {/* Обьект срахования */}
                                            <h3>{aparData?.type_insurance}  </h3>
                                            {/* Номер бланка */}
                                            <h3>{aparData?.num_treaty}     </h3>
                                            {/* Страховой продукт */}
                                            <h3>{aparData?.insurance_product}      </h3>
                                            {/* Премия по договору */}
                                            <h3>{aparData?.sum_ins_premium_payable}   </h3>
                                            {/* Срок действия */}
                                            <h3>{aparData?.ins_policy_date}     </h3>
                                        </div>
                                        <div>
                                                <h4>{aparData?.insurance_object}</h4>
                                            <h4>{aparData?.insurance_type}</h4>
                                            <h4>{aparData?.id}</h4>
                                            <h4>{aparData?.product_insurance}</h4>
                                            <h4>{aparData?.ins_premium_payable_sum ?aparData?.ins_premium_payable_sum : 'не найдено'}</h4>
                                            <h4>{aparData?.ins_policy_start_date} по {aparData?.ins_policy_end_date}</h4>
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

                        
                        <pre>{JSON.stringify(watch(), null ,2)}</pre>

                        </div>
                        <cascoE.BlockCalc>
                            <cascoE.InfoBlock className="priseBlock">
                                <h2>Результаты расчета</h2>
                                <span>Стоимость полиса</span>
                                <h4>{strah_dim} сум </h4>
                                <span>Страховая сумма</span>
                                <h4>{numberWithSpaces(strahavoy)  } сум</h4>
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
                    <TravelAccardion/>
            </GWrapper>
        </>
    )
}
export default  Travel
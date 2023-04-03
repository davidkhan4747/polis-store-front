import { useState } from "react";
import { GWrapper } from "../../../styles/globale-styles.e";
import {MyInput , BreadCrumb ,HeadBanner ,Button} from '../..'
import Link from "next/link";
import * as cascoE from './sport.e'
import StepsSVG from './steps-svg'
import SportAccardion from './sport-accardion'
import {useForm} from 'react-hook-form'
import {Modal} from '../../../components'
import InputRange from 'react-input-range';
import Checkbox from '@mui/material/Checkbox';
import { api } from "../../../services/api";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import axios from 'axios'
import { useEffect } from "react";

const Sport = ({data}) => {
    const [formStep , setFormStep] = useState(0)
    const {watch , register , handleSubmit ,formState:{errors , isValid}} = useForm({mode:'all'})
    const [check , setCheck ] = useState()
    const [modalActive, setModalActive] = useState(false);
    const [prise , setPrise] =useState('0')
    const [prise1 , setPrise1] =useState('50000000')
    const [sportData , setData] = useState()
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    const complateFormStep = () => {
        setFormStep( cur => cur + 1 )
    }
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
      }, []);
    const renderBtn = () => {
        if(formStep > 2) {
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

    const pranset = (value * 1) / 100
    const polis = watch().chislo_insuranse * pranset
    const Npolis = polis
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    const chislo = watch().chislo_insuranse
    const asab =  Number(chislo)
    const polisSum = numberWithSpaces(polis)
    const dates =  {
        ins_policy_start_date : watch().ins_policy_start_date ,
        ins_premium_payable_sum : watch().ins_premium_payable_sum,
        insured_sum : watch().insured_sum,
        pinfl : watch().pinfl ,
        passNumber : watch().passNumber,
        surname : watch().surname ,
        bornYear : watch().bornYear,
        address : watch().address,
        phoneNumber : watch().phoneNumber,

        insSurname : watch().insSurname,
        insBornYear : watch().insBornYear,
        insPassNumber  : watch().insPassNumber ,

        insSurname2 : watch().insSurname2,
        insBornYear2 : watch().insBornYear2,
        insPassNumber2  : watch().insPassNumber2 ,

        insSurname3 : watch().insSurname3,
        insBornYear3 : watch().insBornYear3,
        insPassNumber3  : watch().insPassNumber3 ,

        insSurname4 : watch().insSurname4,
        insBornYear4 : watch().insBornYear4,
        insPassNumber4  : watch().insPassNumber4 ,

        insSurname5 : watch().insSurname5,
        insBornYear5 : watch().insBornYear5,
        insPassNumber5  : watch().insPassNumber5 ,
        Npolis ,
        value ,
        userId : user?.id
    }   
    const sumbitForm = (values ) => {
        api.post('sportSave', dates).then(async(response)=>{
            setData(response.data.carLast)
            console.log(response)
            console.log(values)

        })
        complateFormStep()
    } 
    return (
        
        <>
         <BreadCrumb Link2={'/individuals-polis/sport'}  Crumb2={'Спортсмены'} white='white' />
         {data?.bannerSport[0] ? (
            <HeadBanner  data={data?.bannerSport[0]}/>
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
            <Modal title={'Выберите способ оплаты'} active={modalActive} setActive={setModalActive}>
                <Link href={'https://payme.uz/home/payment'}>
                    <a>
                    <img src="/payme.png" height={'34px'} />
                    </a>
                </Link>
                        <img src="/apelsin.png" height={'34px'} />
                        <img src="/click.png" height={'34px'} />
                </Modal>
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
                    <h2 className="block-title">Страхование спортсменов</h2>
                    <StepsSVG step={formStep}/>


                    <cascoE.RenewalBlock>

                    <div className="w100">
                     <form onSubmit={handleSubmit(sumbitForm)}>
                        <cascoE.RenewInput >
                            {formStep >= 0 && (
                                <div className={formStep === 0 ? '' : 'hidden'}>
                                    <h3>Расчет стоимости страхового полиса</h3>
                                    <cascoE.PoleBlock>
                                            <cascoE.NewInput>
                                                    <MyInput  id="chislo_insuranse" placeholder="Введите число " type={'number'} min={1} max={5} label={'Число застрахованных'}  register={register} required  />
                                                    
                                            </cascoE.NewInput>
                                            <cascoE.NewInput>
                                                    <MyInput  id="ins_policy_start_date"  type={'date'} placeholder="Укажите дату" label={'Дата начала страхования'}  register={register} required  />
                                            </cascoE.NewInput>
                                            {/* <cascoE.NewInput>
                                                    <MyInput  id="end" placeholder="Укажите дату" label={'Конец страхования'}  register={register} required  />
                                            </cascoE.NewInput> */}
                                            <div className="prise-block">
                                            <cascoE.Range 
                                                step={'100'} 
                                                disabled={!prise} 
                                                onChange={(e)=> {setValue(e.target.value)}} 
                                                id='range'
                                                register={register}
                                                min={'0'} 
                                                max={prise1}/>
                                        <span className="prise">{numberWithSpaces(value)}</span>

                                            </div>
                                    </cascoE.PoleBlock>
                            <p><Checkbox  onClick={() => setCheck(!check)} /> Согласен с условиями публичной оферты страхования</p>
                                </div>
                            )}
                            {formStep >= 1 && (
                                <div className={formStep === 1 ? '' : 'hidden'}>
                                    <h3>Заполнение персональных данных</h3>
                                    <br/>
                                    <h3>Данные плательщика</h3>

                                    <cascoE.PoleBlock>
                                        <cascoE.NewInput>   
                                            <MyInput id="pinfl"  placeholder="Укажите" label={'ПИНФЛ'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="passNumber"  placeholder="Укажите" label={'Серия и номер паспорта'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="surname"  placeholder="Укажите" label={'Фамилия и имя'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="bornYear" type={'date'}  placeholder="Укажите дату" label={'Дата рождения'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="address"  placeholder="Укажите адрес проживания" label={'Адрес'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="phoneNumber"  placeholder="Укажите номер" label={'Номер телефона'}  register={register} required  />
                                        </cascoE.NewInput>
                                    </cascoE.PoleBlock>
                                    <div>
                                  <h3>Застрахованное лицо 1</h3>
                                    <cascoE.PoleBlock>
                                        <cascoE.NewInput>   
                                            <MyInput id="insSurname" type={'text'} placeholder="Укажите" label={'Фамилия и имя'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="insBornYear" type={'date'}  placeholder="Укажите дату" label={'Дата рождения'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="insPassNumber"  placeholder="Укажите" label={'Удостоверение личности'}  register={register} required  />
                                        </cascoE.NewInput>
                                    </cascoE.PoleBlock>

                                  </div>
                                  <div className={ asab  >= 2 ?'' : 'none'}>
                                  <h3>Застрахованное лицо 2</h3>
                                    <cascoE.PoleBlock>
                                        <cascoE.NewInput>   
                                            <MyInput className={ asab  >= 2 ?'' : 'none'}  id="insSurname2"  placeholder="Укажите" label={'Фамилия и имя'}  register={register}   />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput className={ asab  >= 2 ?'' : 'none'} id="insBornYear2" type={'date'}  placeholder="Укажите дату" label={'Дата рождения'}  register={register}   />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput className={ asab  >= 2 ?'' : 'none'} id="insPassNumber2"  placeholder="Укажите" label={'Удостоверение личности'}  register={register}   />
                                        </cascoE.NewInput>
                                    </cascoE.PoleBlock>

                                  </div>
                                  <div className={ asab >= 3  ?'' : 'none'}>
                                  <h3>Застрахованное лицо 3</h3>
                                    <cascoE.PoleBlock>
                                        <cascoE.NewInput>   
                                            <MyInput id="insSurname3"  placeholder="Укажите" label={'Фамилия и имя'}  register={register}   />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="insBornYear3" type={'date'}  placeholder="Укажите дату" label={'Дата рождения'}  register={register}   />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="insPassNumber3"  placeholder="Укажите" label={'Удостоверение личности'}  register={register}   />
                                        </cascoE.NewInput>
                                    </cascoE.PoleBlock>

                                  </div>
                                  <div className={ asab >= 4  ?'' : 'none'}>
                                  <h3>Застрахованное лицо 4</h3>
                                    <cascoE.PoleBlock>
                                        <cascoE.NewInput>   
                                            <MyInput id="insSurname4"  placeholder="Укажите" label={'Фамилия и имя'}  register={register}   />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="insBornYear4" type={'date'}  placeholder="Укажите дату" label={'Дата рождения'}  register={register}   />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="insPassNumber4"  placeholder="Укажите" label={'Удостоверение личности'}  register={register}   />
                                        </cascoE.NewInput>
                                    </cascoE.PoleBlock>

                                  </div>
                                  <div className={ asab >= 5  ?'' : 'none'}>
                                  <h3>Застрахованное лицо 5</h3>
                                    <cascoE.PoleBlock>
                                        <cascoE.NewInput>   
                                            <MyInput id="insSurname5"  placeholder="Укажите" label={'Фамилия и имя'}  register={register}   />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="nsBornYear5" type={'date'}  placeholder="Укажите дату" label={'Дата рождения'}  register={register}   />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="insPassNumber5"  placeholder="Укажите" label={'Удостоверение личности'}  register={register}   />
                                        </cascoE.NewInput>
                                    </cascoE.PoleBlock>

                                  </div>
                                  <p><Checkbox  {...register('sogl' , {required : true})}/> Согласен с условиями публичной оферты страхования</p>

                                </div>
                            )}
                            {formStep >= 2 && (
                                <div className={formStep === 2 ? '' : 'hidden'}>
                                    <h3>Оплата страхового полиса</h3>
                                    {sportData ? (
                                          <cascoE.PoleBlock>
                                          <div>
                                              {/* Обьект срахования */}
                                              <h3>{sportData?.object_insurance} </h3>  
                                              {/* Обьект срахования */}
                                              <h3>{sportData?.type_insurance}  </h3>
                                              {/* Номер бланка */}
                                              <h3>{sportData?.num_treaty}     </h3>
                                              {/* Страховой продукт */}
                                              <h3>{sportData?.insurance_product}      </h3>
                                              {/* Премия по договору */}
                                              <h3>{sportData?.sum_ins_premium_payable}   </h3>
                                              {/* Срок действия */}
                                              <h3>{sportData?.ins_policy_date}     </h3>
                                          </div>
                                          <div>
                                                  <h4>{sportData?.insurance_object}</h4>
                                              <h4>{sportData?.insurance_type}</h4>
                                              <h4>{sportData?.id}</h4>
                                              <h4>{sportData?.product_insurance}</h4>
                                              <h4>{sportData?.ins_premium_payable_sum ?sportData?.ins_premium_payable_sum : 'не найдено'}</h4>
                                              <h4>{sportData?.ins_policy_start_date} по {sportData?.ins_policy_end_date}</h4>
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
                            <pre>{JSON.stringify(watch(), null ,2)}</pre>
                        </cascoE.ButtonBlock>
                        
                    </form>
                        
                        </div>
                        <cascoE.BlockCalc>
                            <cascoE.InfoBlock className="priseBlock">
                                <h2>Результаты расчета</h2>
                                <span>Стоимость полиса</span>
                                 {watch().chislo  > 5 ? ( <h4>Количество страховщиков должно быть от 1 до 5</h4>) : (<h4>{numberWithSpaces(polisSum)} сум</h4>  )} 
                                <span>Страховая сумма</span>
                                <h4>{numberWithSpaces(value)} сум</h4>
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
                    <SportAccardion/>
            </GWrapper>
        </>
    )
}
export default  Sport
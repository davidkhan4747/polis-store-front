import { useState , useEffect} from "react";
import { api } from "../../../services/api";
import { GWrapper } from "../../../styles/globale-styles.e";
import {MyInput , BreadCrumb ,HeadBanner ,Button} from '../..'
import * as cascoE from './travel.e'
import StepsSVG from './steps-svg'
import TravelAccardion from './travel-accardion'
import {useForm} from 'react-hook-form'
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useRouter } from "next/router";
const Travel = () => {
    const router = useRouter()
    const [formStep , setFormStep] = useState(0)
    const {watch , register , handleSubmit ,formState:{errors , isValid}} = useForm({mode:'all'})
    const [check , setCheck ] = useState()
    const [traveled , setTravelet] = useState(0)
    const [travel , setTrvel] = useState()
    const [finish , setFinish] = useState()
    useEffect(() => {
        api.get('travel', {headers: { 'accept-language': router.locale } }).then(async(response)=>{
            setTrvel(response.data)
          console.log(response)
        })
        }, []);
    const AddPerson = () => {
        setTravelet(traveled+1)
    }
    const RemovePers = () => {
        setTravelet(traveled-1)

    }
    const value_to_ps =  {
        country : watch().country,
        travelType : watch().travelType ,
        date_nachalo : watch().date_nachalo ,
        date_okonchaniya : watch().date_okonchaniya,
        date_birth_1 : watch().date_birth_1 ,
        date_birth_2 : watch().date_birth_2 ,
        date_birth_3 : watch().date_birth_3 ,
        date_birth_4 : watch().date_birth_4 ,
        date_birth_5 : watch().date_birth_5 ,
        date_birth_rodilet_1 : watch().date_birth_rodilet_1 ,
        date_birth_rodilet_2 : watch().date_birth_rodilet_2

    }
    const complateFormStep = () => {
        setFormStep( cur => cur + 1 )
    }
    const giveMePolisSum = (data) => {
        api.post('travelSave' , value_to_ps).then(async(response)=> {
            setPolis(response.data.answer)
            console.log(response.data.answer)
        })
        complateFormStep()
    }
 
    const sumbitForm = (data ) => {
        // alert(JSON.stringify(values, null , 2))
        api.post('travelFinishSave' , data).then(async(response)=> {
            setFinish(response.data.carLast)
            console.log(data)
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
             <Button disabled={!isValid } func={giveMePolisSum}  title={'Продолжить'} />
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
    const [anti_virus, setViirus] = useState(0)
  
    const strah_sum = 60000
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    const [polisSum , setPolis] = useState()
   
    return (
        
        <>
         <BreadCrumb Link2={'/individuals-polis/travel'}  Crumb2={'Путешествия'} white='white' />
         {travel?.bannerTravel[0] ? (
            <HeadBanner data={travel?.bannerTravel[0]}/>
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
                    <h2 className="block-title">Страхование путешествующих</h2>
                    <StepsSVG step={formStep}/>
                    <cascoE.RenewalBlock>

                        <div className="w100">
                            <form  onSubmit={handleSubmit(sumbitForm)}>
                        <cascoE.RenewInput>

                            {formStep >= 0 && (
                                
                                <div className={formStep === 0 ? '' : 'hidden'}>
                                    <h3>Расчет стоимости страхового полиса</h3>
                                    <cascoE.PoleBlock>
                                        <p className="label">Выберите страну назначения/посещения</p>
                                        <cascoE.Option {...register('country', {required:true})}>
                                            <option>Выберите</option>   
                                            {travel?.country?.map((item,idx)=>(
                                                <option     value={item?.country_name} key={idx}>{item?.country_name}</option>
                                        ))} 
                                        </cascoE.Option>
                                    </cascoE.PoleBlock>
                                    <h3>Укажите цель поездки</h3>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        
                                    >
                                    <cascoE.PoleBlock className="ogra">
                                        <FormControlLabel value="travel"  control={<Radio defaultChecked={true}  {...register('travelType' )}  />} label="Путешествие" />
                                        <FormControlLabel value="learning" control={<Radio  {...register('travelType' )} />} label="Обучение за рубежом" />
                                        <FormControlLabel value="sport" control={<Radio  {...register('travelType' )}/>} label="Спорт (активный отдых)" />
                                        <FormControlLabel value="work" control={<Radio  {...register('travelType' )}/>} label="Работа" />
                                    </cascoE.PoleBlock>
                                    </RadioGroup>
                                    <cascoE.PoleBlock>
                                        <cascoE.NewInput>   
                                            <MyInput id="date_nachalo"  placeholder="Выберите дату" type={'date'} label={'Начало страхования'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="date_okonchaniya"  placeholder="Выберите дату" type={'date'} label={'Конец страхования'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            {/* <MyInput id="day-length"  type={'number'}  placeholder="Укажите" label={'Количество дней'}  register={register} required  /> */}
                                        </cascoE.NewInput>
                                       
                                    </cascoE.PoleBlock>
                                    <h3>Дополнительное страхование</h3>
                                    <cascoE.PoleBlock className="min">
                                        {/* <p><Checkbox   {...register('covid', {required : false})} color="warning"/> Хочу защититься от COVID-19</p> */}
                                       {watch().travelType == "travel" ? (<p><Checkbox iconStyle={{fill: 'family'}} defaultValue={false}   {...register('family', {required : false})}  color="warning"/> Путешествую с семьей </p>) :''} 
                                    </cascoE.PoleBlock>
                                    {watch().family === false && (
                                       <>
                                        <h3>1 путешественник</h3>
                                        <cascoE.PoleBlock className="min">
                                            <cascoE.NewInput>   
                                                    <MyInput id="date_birth_1"  placeholder="Укажите" type={'date'} label={'Дата рождения'}  register={register} required  />
                                                </cascoE.NewInput>
                                            </cascoE.PoleBlock>
                                        {traveled > 0 && (
                                            <>
                                                <h3>2 путешественник</h3>
                                            <cascoE.PoleBlock className="min">
                                            <cascoE.NewInput>   
                                                    <MyInput id="date_birth_2"  placeholder="Укажите" type={'date'} label={'Дата рождения'}  register={register} required  />
                                                </cascoE.NewInput>
                                            </cascoE.PoleBlock>
                                            </>
                                        )}
                                        {traveled > 1 && (
                                            <>
                                                <h3>3 путешественник</h3>
                                                <cascoE.PoleBlock className="min">
                                                <cascoE.NewInput>   
                                                        <MyInput id="date_birth_3"  placeholder="Укажите" type={'date'} label={'Дата рождения'}  register={register} required  />
                                                    </cascoE.NewInput>
                                                </cascoE.PoleBlock>
                                                </>
                                        )}
                                            {traveled > 2 && (
                                            <>
                                                <h3>4 путешественник</h3>
                                                <cascoE.PoleBlock className="min">
                                                <cascoE.NewInput>   
                                                        <MyInput id="date_birth_4"  placeholder="Укажите" type={'date'} label={'Дата рождения'}  register={register} required  />
                                                    </cascoE.NewInput>
                                                </cascoE.PoleBlock>
                                                </>
                                        )}
                                        {traveled > 3 && (
                                            <>
                                                <h3>5 путешественник</h3>
                                                <cascoE.PoleBlock className="min">
                                                <cascoE.NewInput>   
                                                        <MyInput id="date_birth_5"  placeholder="Укажите" type={'date'} label={'Дата рождения'}  register={register} required  />
                                                    </cascoE.NewInput>
                                                </cascoE.PoleBlock>
                                                </>
                                        )}
                                        {traveled < 4 && <cascoE.AddPersonB onClick={AddPerson}>Добавить путешественника +</cascoE.AddPersonB>}
                                        {traveled > 0 && ( <cascoE.AddPersonB onClick={RemovePers}>Убрать    -</cascoE.AddPersonB>)}
                                            </>
                                            )}
                                        {watch().family === true && (
                                                <>
                                                    <h3>1 родитель</h3>
                                                    <cascoE.PoleBlock className="min">
                                                        <cascoE.NewInput>   
                                                                <MyInput id="date_birth_rodilet_1"  placeholder="Укажите" type={'date'} label={'Дата рождения'}  register={register} required  />
                                                        </cascoE.NewInput>
                                                    </cascoE.PoleBlock>
                                                    {traveled > 0 && (
                                                        <>
                                                        <h3>2 родитель</h3>
                                                        <cascoE.PoleBlock className="min">
                                                        <cascoE.NewInput>   
                                                                <MyInput id="date_birth_rodilet_2"  placeholder="Укажите" type={'date'} label={'Дата рождения'}  register={register} required  />
                                                            </cascoE.NewInput>
                                                        </cascoE.PoleBlock>
                                                        </>
                                                    )}
                                                {traveled < 1 && <cascoE.AddPersonB onClick={AddPerson}>Добавить родителя +</cascoE.AddPersonB>}
                                                {traveled > 0 && ( <cascoE.AddPersonB onClick={RemovePers}>Убрать    -</cascoE.AddPersonB>)}
                                            </>
                                        )}
                                    

                                        <p><Checkbox  onClick={() => setCheck(!check)} /> Согласен с условиями публичной оферты страхования</p>
                                </div>
                            )}
                           {watch().family === false && (
                                <>
                                {formStep >= 1 && (
                                <div className={formStep === 1 ? '' : 'hidden'}>
                                    <h3>Заполнение персональных данных</h3>
                                    <br/>
                                    <h3>Путешественник 1 (страхователь)</h3>
                                    <cascoE.PoleBlock>
                                        <cascoE.NewInput>   
                                            <MyInput id="user_name"  placeholder="Укажите полное имя и фамилию" label={'Имя и фамилия'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="date_birth_1" type={'date'}  placeholder="Укажите дату" label={'Дата рождения'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="seriapass1"  placeholder="Укажите серию и номер" label={'Серия и номер паспорта'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="tel_number1"  placeholder="Укажите номер" label={'Номер телефона'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="adress1"  placeholder="Укажите адрес проживания" label={'Адрес'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="email1"  placeholder="Укажите ваш E-Mail" label={'E-Mail (необязательно)'}  register={register}   />
                                        </cascoE.NewInput>
                                    </cascoE.PoleBlock>
                                    {traveled > 0 && (
                                            <>
                                            <h3>Путешественник 2</h3>
                                            <cascoE.PoleBlock>
                                                <cascoE.NewInput>   
                                                    <MyInput id="user_name2"  placeholder="Укажите полное имя и фамилию" label={'Имя и фамилия'}  register={register} required  />
                                                </cascoE.NewInput>
                                                <cascoE.NewInput>   
                                                    <MyInput id="date_birth_2" type={'date'}  placeholder="Укажите дату" label={'Дата рождения'}  register={register} required  />
                                                </cascoE.NewInput>
                                                <cascoE.NewInput>   
                                                    <MyInput id="seriapass2"  placeholder="Укажите серию и номер" label={'Серия и номер паспорта'}  register={register} required  />
                                                </cascoE.NewInput>
                                            </cascoE.PoleBlock>
                                            </>
                                    )}
                                    {traveled > 1 && (
                                            <>
                                            <h3>Путешественник 3</h3>
                                            <cascoE.PoleBlock>
                                                <cascoE.NewInput>   
                                                    <MyInput id="user_name3"  placeholder="Укажите полное имя и фамилию" label={'Имя и фамилия'}  register={register} required  />
                                                </cascoE.NewInput>
                                                <cascoE.NewInput>   
                                                    <MyInput id="date_birth_3" type={'date'}  placeholder="Укажите дату" label={'Дата рождения'}  register={register} required  />
                                                </cascoE.NewInput>
                                                <cascoE.NewInput>   
                                                    <MyInput id="seriapass3"  placeholder="Укажите серию и номер" label={'Серия и номер паспорта'}  register={register} required  />
                                                </cascoE.NewInput>
                                            </cascoE.PoleBlock>
                                            </>
                                    )}
                                     {traveled > 2 && (
                                            <>
                                            <h3>Путешественник 4</h3>
                                            <cascoE.PoleBlock>
                                                <cascoE.NewInput>   
                                                    <MyInput id="user_name4"  placeholder="Укажите полное имя и фамилию" label={'Имя и фамилия'}  register={register} required  />
                                                </cascoE.NewInput>
                                                <cascoE.NewInput>   
                                                    <MyInput id="date_birth_4" type={'date'}  placeholder="Укажите дату" label={'Дата рождения'}  register={register} required  />
                                                </cascoE.NewInput>
                                                <cascoE.NewInput>   
                                                    <MyInput id="seriapass4"  placeholder="Укажите серию и номер" label={'Серия и номер паспорта'}  register={register} required  />
                                                </cascoE.NewInput>
                                            </cascoE.PoleBlock>
                                            </>
                                    )}
                                     {traveled > 3 && (
                                            <>
                                            <h3>Путешественник 5</h3>
                                            <cascoE.PoleBlock>
                                                <cascoE.NewInput>   
                                                    <MyInput id="user_name5"  placeholder="Укажите полное имя и фамилию" label={'Имя и фамилия'}  register={register} required  />
                                                </cascoE.NewInput>
                                                <cascoE.NewInput>   
                                                    <MyInput id="date_birth_5" type={'date'}  placeholder="Укажите дату" label={'Дата рождения'}  register={register} required  />
                                                </cascoE.NewInput>
                                                <cascoE.NewInput>   
                                                    <MyInput id="seriapass5"  placeholder="Укажите серию и номер" label={'Серия и номер паспорта'}  register={register} required  />
                                                </cascoE.NewInput>
                                            </cascoE.PoleBlock>
                                            </>
                                    )}
                                        </div>
                                    )}
                                </>
                           )}
                           {watch().family === true && (
                                               <>
                                               {formStep >= 1 && (
                                               <div className={formStep === 1 ? '' : 'hidden'}>
                                                   <h3>Заполнение персональных данных</h3>
                                                   <br/>
                                                   <h3>1 родитель</h3>
                                                   <cascoE.PoleBlock>
                                                       <cascoE.NewInput>   
                                                           <MyInput id="roditel_name-1  "  placeholder="Укажите полное имя и фамилию" label={'Имя и фамилия'}  register={register} required  />
                                                       </cascoE.NewInput>
                                                       <cascoE.NewInput>   
                                                           <MyInput id="date_birth_rodilet_1" type={'date'}  placeholder="Укажите дату" label={'Дата рождения'}  register={register} required  />
                                                       </cascoE.NewInput>
                                                       <cascoE.NewInput>   
                                                           <MyInput id="seriapass_rod-1"  placeholder="Укажите серию и номер" label={'Серия и номер паспорта'}  register={register} required  />
                                                       </cascoE.NewInput>
                                                       <cascoE.NewInput>   
                                                           <MyInput id="tel_number_rod-1"  placeholder="Укажите номер" label={'Номер телефона'}  register={register} required  />
                                                       </cascoE.NewInput>
                                                       <cascoE.NewInput>   
                                                           <MyInput id="adress_rod_1"  placeholder="Укажите адрес проживания" label={'Адрес'}  register={register} required  />
                                                       </cascoE.NewInput>
                                                       <cascoE.NewInput>   
                                                           <MyInput id="email_rod_1"  placeholder="Укажите ваш E-Mail" label={'E-Mail (необязательно)'}  register={register}   />
                                                       </cascoE.NewInput>
                                                   </cascoE.PoleBlock>
                                                   {traveled > 0 && (
                                                           <>
                                                           <h3>2 родитель </h3>
                                                           <cascoE.PoleBlock>
                                                               <cascoE.NewInput>   
                                                                   <MyInput id="roditel_name_2"  placeholder="Укажите полное имя и фамилию" label={'Имя и фамилия'}  register={register} required  />
                                                               </cascoE.NewInput>
                                                               <cascoE.NewInput>   
                                                                   <MyInput id="date_birth_rodilet_2" type={'date'}  placeholder="Укажите дату" label={'Дата рождения'}  register={register} required  />
                                                               </cascoE.NewInput>
                                                               <cascoE.NewInput>   
                                                                   <MyInput id="seriapass-rod_2"  placeholder="Укажите серию и номер" label={'Серия и номер паспорта'}  register={register} required  />
                                                               </cascoE.NewInput>
                                                           </cascoE.PoleBlock>
                                                           </>
                                                   )}
                                                   
                                                       </div>
                                                   )}
                                               </>
                                        )}
                            
                            {formStep >= 2 && (
                                <div className={formStep === 2 ? '' : 'hidden'}>
                                    <h3>Оплата страхового полиса</h3>
                                    {finish ? (
                                        <cascoE.PoleBlock>
                                        <div>
                                            {/* Обьект срахования */}
                                            <h3>{finish?.object_insurance} </h3>  
                                            {/* Обьект срахования */}
                                            <h3>{finish?.type_insurance}  </h3>
                                            {/* Номер бланка */}
                                            <h3>{finish?.num_treaty}     </h3>
                                            {/* Страховой продукт */}
                                            <h3>{finish?.insurance_product}      </h3>
                                            {/* Премия по договору */}
                                            <h3>{finish?.sum_ins_premium_payable}   </h3>
                                            {/* Срок действия */}
                                            <h3>{finish?.ins_policy_date}     </h3>
                                        </div>
                                        <div>
                                                <h4>{finish?.insurance_object}</h4>
                                            <h4>{finish?.insurance_type}</h4>
                                            <h4>{finish?.id}</h4>
                                            <h4>{finish?.product_insurance}</h4>
                                            <h4>{finish?.ins_premium_payable_sum ?finish?.ins_premium_payable_sum : 'не найдено'}</h4>
                                            <h4>{finish?.ins_policy_start_date} по {finish?.ins_policy_end_date}</h4>
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
                                <h4>{polisSum ? `${polisSum} сум` : 'на следующем шагу покажем цену '}  </h4>
                                <span>Страховая сумма</span>
                                <h4>{numberWithSpaces(strah_sum) }   eur</h4>
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
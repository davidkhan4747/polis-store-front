import { GWrapper } from "../../styles/globale-styles.e";
import {MyInput , Button} from '../../components'
import * as cascoE from '../Forms/sport/sport.e'
import { api } from "../../services/api";
import {
    RenewalBlock,
    RenewInput,
    PoleBlock,
    InfoBlock,
    ErrorBlock,
    ButtonBlock,
    PopUp
} from './renewal-polis.e'
import {useForm} from 'react-hook-form'
import ErrorIcon from './reneval-svg'
import { parseCookies } from "nookies";
import { useState } from "react";
import { getAPIСlient } from "../../services/axios";
import {Modal} from '../../components'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import { Formik, Field, Form } from "formik";
import Link from "next/link";

const Renewal = () => {
    const {watch , register , handleSubmit ,formState:{errors , isValid}} = useForm({mode:'all'})
    const [error , setError] = useState(true)
    const [modalActive, setModalActive] = useState(false);
    const [formStep , setFormStep] = useState(0)
    const apiClient = getAPIСlient();
    const { ["nextauth.token"]: token } = parseCookies();
    const showModal = () => {
        setModalActive('modal active')
    }
    const [isAuth ,setAuth] = useState(false)
    
    const {
        signIn,
        registration,
        setOpen,
        open,
        alert,
        setAlert,
        errorMsg,
        setErrorMsg,
      } = useContext(AuthContext);
    const complateFormStep = () => {
        setFormStep( cur => cur + 1 )
    }
    const renderBtn = () => {
        if(formStep > 2 ) {
            return null
        } else if (formStep === 1) {
            return (
                <>
                <Button   func={()=>subTest(dada)}   title={'Способ оплаты'} />
                <p>На следующем шаге вы сможете выбрать способ оплаты</p>

               </>
            )
        } else {
            return  (
            <>
             <Button type={'submit'} disabled={!isValid } title={'Продолжить'} />
             {formStep === 0 && ( <p>На следующем шаге вы сможете заполнить данные водителя</p>)}
             {formStep === 1 && ( <p>На следующем шаге вы сможете заполнить  водителя</p>)}
            
            </>)
        }
    }
    const onError = () => console.error('error')
    const [polisData , setPolisData] = useState()
    const [dada , setdata] = useState()
   
    const subTest = (data,e) => {
        api.post('/extension', data,e)
        showModal()
        console.log(data)
    }
    const onEER = () => {
        console.log('error mother fucke')
    }
    const onSubmit = (data,e) => {
        api.post('/check', data,e).then(async(response)=>{
            setPolisData(response.data.data)
        })
        setFormStep( cur => cur + 1 )
    }
    const r = Number(polisData?.ins_premium_payable_sum)
    const foiz = watch().ins_policy_end_date == "6" ? 10 : null || watch().ins_policy_end_date == "12" ? 20 : null || watch().ins_policy_end_date == "24" ? 40 : null
    const  result_sh  = r / 100 * foiz 

    console.log(result_sh)
    const prise = r + result_sh
    return (
        <>
            <GWrapper  className='animate__animated animate__fadeInLeft'>
                    <h2 className="block-title">Продление полиса</h2>
                        <div className="w100">
                        {formStep == 0 ? (
                    <RenewalBlock onSubmit={handleSubmit(onSubmit, onError)}>
                            <div className="flex122">
                            <RenewInput className={formStep === 0 ? '' : 'hidden'}>
                                <h3>Информация о полисе</h3>
                                <PoleBlock className="animate__animated   animate__fadeIn">
                                        <MyInput label='Серия и номер полиса' register={register} required={true}  placeholder={'123456789'} id='treaty_num' />
                                        <MyInput label='Фамилия страхователя' register={register}  required={true} placeholder={'Сабуров'} id='family' />
                                </PoleBlock>
                           
                            <p>Заполните серию и номер как в полисе. Для продления полиса ОСАГО введите серию русскими буквами например: МММ1234567890</p>

                            </RenewInput>
                        <InfoBlock>
                            <h2>Для продления полиса онлайн вам потребуется:</h2>
                            <p>Серия номер полиса и фамилия страхователя</p>
                            <p>Узнать стоимость продления можно до окончания срока действия полиса:</p>
                            <p>для каско 60 дней</p>
                            <p>для остальных видов 20 дней</p>
                        </InfoBlock>
                            </div>
                        <ButtonBlock>
                            <Button type={'submit'} disabled={!isValid } title={'Продолжить'} />{ '       '}
                            {formStep === 0 && ( <p>На следующем шаге вы сможете заполнить данные водителя</p>)}
                            {formStep === 1 && ( <p>На следующем шаге вы сможете заполнить  водителя</p>)} 
                            </ButtonBlock>
                    </RenewalBlock>

                        ):""}
                        {formStep >= 1 && (
                            <div>
                             <RenewInput className={formStep === 1 ? '' : 'hidden'}>
                                    <h3>Оплата страхового полиса</h3>
                                    <cascoE.PoleBlock>
                                        {polisData?.error ? (
                                            <>
                                            <h2>Ничего не найдено</h2>
                                            </>
                                        ): (
                                            <>
                                            {!polisData ? (
                                            <>
                                             <div className="Gcenter">
                                                <div className="loader">
                                                    <div></div>
                                                </div>
                                            </div>
                                            </>
                                        ): (
                                        <>
                                            <div  className="animate__animated   animate__fadeIn">
                                                {/* Обьект срахования */}
                                                <h3>{polisData?.object_insurance} </h3>  
                                                {/* Обьект срахования */}
                                                <h3>{polisData?.type_insurance}  </h3>
                                                {/* Номер бланка */}
                                                <h3>{polisData?.num_treaty}     </h3>
                                                {/* Страховой продукт */}
                                                <h3>{polisData?.insurance_product}      </h3>
                                                {/* Премия по договору */}
                                                <h3>{polisData?.sum_ins_premium_payable}   </h3>
                                                {/* Срок действия */}
                                                <h3>{polisData?.ins_policy_date}     </h3>
                                            </div>
                                            <div className="animate__animated   animate__fadeIn">
                                                <h4>{polisData?.insurance_object}</h4>
                                                <h4>{polisData?.insurance_type}</h4>
                                                <h4>{polisData?.id}</h4>
                                                <h4>{polisData?.product_insurance}</h4>
                                                <h4>{polisData?.ins_premium_payable_sum} сум</h4>
                                                <h4>{polisData?.ins_policy_start_date} по {polisData?.ins_policy_end_date}</h4>
                                            </div>
                                        </>
                                        )}
                                    </>
                                )}
                                </cascoE.PoleBlock>
                                </RenewInput>
                                {!polisData?.error ? (
                                    <RenewInput>
                                        <h3>Сведения о продлении</h3>
                                        {!polisData ? (

                                                    <>
                                                    <div className="Gcenter">
                                                        <div className="loader">
                                                            <div></div>
                                                        </div>
                                                    </div>
                                                    </>
                                                ): (
                                    <form onSubmit={handleSubmit(subTest, onEER)}>
                                        <div className="flex animate__animated  animate__fadeIn" >
                                            <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                                >
                                                    <div className="flex"> <FormControlLabel value="6"  control={<Radio defaultChecked={true}  {...register('ins_policy_end_date' )}  />} label="6 месяцев" /></div>
                                                    <div className="flex"> <FormControlLabel value="12"  control={<Radio   {...register('ins_policy_end_date' )}  />} label="1 год" /></div>
                                                    <div className="flex"> <FormControlLabel value="24"  control={<Radio   {...register('ins_policy_end_date' )}  />} label="2 года" /></div>
                                            </RadioGroup>
                                        </div>
                                        <h3>Цена :   <MyInput  register={register} name='ins_premium_payable_sum'  id='ins_premium_payable_sum' value={Math.ceil(prise)} /> </h3>

                                        {console.log(watch().ins_premium_payable_sum)}
                                        <PoleBlock className="animate__animated  animate__fadeIn">
                                        <MyInput type={'date'} label='Дата начала действия' name='ins_policy_start_date' register={register} required={true} id={'ins_policy_start_date'} />
                                        {/* <MyInput type={'date'} name='ins_policy_end_date'  label='' register={register}  required={true} placeholder={''} id='ins_policy_end_date'  /> */}
                                        {polisData?.id ? <MyInput  name={'id'} register={register} value={polisData?.id} type={'text'} id={'id'} hidden={true} /> : ''}
                                        </PoleBlock>
                                        <Button   func={subTest} title={'Способ оплаты'} />
                                    </form>
                                )}
                                </RenewInput>
                            ): null}
                        </div>
                    )}
                    {/* {!polisData?.error && (
                    <ButtonBlock>
                    {renderBtn()}
                    </ButtonBlock>
                    )} */}
                       
                        {polisData?.error ? (
                            <ErrorBlock className=" animate__animated animate__fadeInLeft">
                                <h3>Ошибка поиска <ErrorIcon  onClick={()=>window.location.reload()} />  </h3>
                                <p>Договор не найден. Проверьте корректность указания номера и данных страхователя</p>
                            </ErrorBlock>
                        ): null}
                        </div>
                     
                    

                   
                   
            </GWrapper>
            <Modal title={'Выберите способ оплаты'} active={modalActive} setActive={setModalActive}>
                        <img src="payme.png" height={'34px'} />
                        <img src="apelsin.png" height={'34px'} />
                        <img src="click.png" height={'34px'} />
                    </Modal>
                    <Modal title={'Войдите в Аккаунт'} active={!token ? 'modal active' : ''} setActive={setModalActive}>
                        <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        onSubmit={async (values) => {
                            await signIn(values);
                            // console.log("login = > ", values);
                        }}
                    >
                         {({ values, errors, handleSubmit, handleChange, handleBlur }) => (
                            <form onSubmit={handleSubmit} className="flex_not">
                                <MyInput onBlur={handleBlur}  onChange={handleChange}   classN={ `w100 ${errors.phone && 'error '}`  }id={'email'} label={''} register={register} type={'text'}  placeholder={'Номер телефона '} required={true} />
                                <MyInput onBlur={handleBlur}  onChange={handleChange}  classN={ `w100 ${errors.password && 'error '}`  }id={'password'}  label={''}  type={'text'} register={register}  placeholder={'Введите пароль'} required={true} />
                                <Button  type={'submit'} title={'Вход'} />
                                <br/>
                                <Link href={'/auth'}>
                                    <a>
                                    <Button   title={'Регестрация'} />
                                    </a>
                                </Link>
                            </form>

                        )}

                    </Formik>
                    </Modal>
        </>
    )
}
export default  Renewal

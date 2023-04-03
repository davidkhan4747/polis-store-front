import { useState } from "react";
import { GWrapper } from "../../../styles/globale-styles.e";
import {MyInput , BreadCrumb ,HeadBanner ,Button} from '../..'
import Link from "next/link";
import * as cascoE from './health.e'
import StepsSVG from './steps-svg'
import HealthAccardion from './health-accardion'
import {useForm} from 'react-hook-form'
import Checkbox from '@mui/material/Checkbox';
const Health = () => {
    const [formStep , setFormStep] = useState(0)
    const {watch , register , handleSubmit ,formState:{errors , isValid}} = useForm({mode:'all'})
    const [check , setCheck ] = useState()
    const complateFormStep = () => {
        setFormStep( cur => cur + 1 )
    }
    const sumbitForm = (values ) => {
        alert(JSON.stringify(values, null , 2))
    } 
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
        } else {
            return  (
            <>
             <Button disabled={!isValid || !check } func={complateFormStep}  title={'Продолжить'} />
             {formStep === 0 && ( <p>На следующем шаге вы сможете заполнить данные водителя</p>)}
             {formStep === 1 && ( <p>На следующем шаге вы сможете заполнить  водителя</p>)}
            
            </>)
        }
    }
    const [value , setValue ] = useState(100)
    
    return (
        
        <>
         <BreadCrumb Link2={'/individuals-polis/sport'}  Crumb2={'Спортсмены'} white='white' />
            <HeadBanner  img={'/sportB.png'} title={'Страхование спортсменов'} des='Надежный способ защитить себя и своих близких
                Обеспечит Вам и Вашим близким надежную страховую защиту в случае непредвиденных обстоятельств, связанных со здоровьем во время занятий спортом'/>
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
                    <h2 className="block-title">Защита от несчастных случаев</h2>
                    <StepsSVG step={formStep}/>
                    <cascoE.RenewalBlock>

                        <div className="w100">
                        <cascoE.RenewInput onSubmit={handleSubmit(sumbitForm)}>

                            {formStep >= 0 && (
                                <div className={formStep === 0 ? '' : 'hidden'}>
                                    <h3>Расчет стоимости страхового полиса</h3>
                                    <cascoE.PoleBlock>
                                            <cascoE.NewInput>
                                                    <MyInput  id="number" placeholder="Введите число " label={'Число застрахованных'}  register={register} required  />
                                            </cascoE.NewInput>
                                            <cascoE.NewInput>
                                                    <MyInput  id="date"  type={'date'} placeholder="Укажите дату" label={'Дата начала страхования'}  register={register} required  />
                                            </cascoE.NewInput>
                                            <cascoE.NewInput>
                                                    <MyInput  id="end" placeholder="Укажите дату" label={'Конец страхования'}  register={register} required  />
                                            </cascoE.NewInput>
                                            <div className="prise-block">
                                                <cascoE.Range value={value} onChange={e => setValue(e.target.value)}/><span className="prise">{value + ' млн'}</span>
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
                                            <MyInput id="seriapass"  placeholder="Укажите" label={'Серия и номер паспорта'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="name"  placeholder="Укажите" label={'Фамилия и имя'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="date-birth"  placeholder="Укажите дату" label={'Дата рождения'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="adress"  placeholder="Укажите адрес проживания" label={'Адрес'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="tel-number"  placeholder="Укажите номер" label={'Номер телефона'}  register={register} required  />
                                        </cascoE.NewInput>
                                    </cascoE.PoleBlock>
                                    <h3>Застрахованное лицо 1</h3>
                                    <cascoE.PoleBlock>
                                        <cascoE.NewInput>   
                                            <MyInput id="pinfl"  placeholder="Укажите" label={'Фамилия и имя'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="seriapass"  placeholder="Укажите дату" label={'Дата рождения'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <cascoE.NewInput>   
                                            <MyInput id="name"  placeholder="Укажите" label={'Удостоверение личности'}  register={register} required  />
                                        </cascoE.NewInput>
                                        <p><Checkbox  {...register('sogl' , {required : true})}/> Согласен с условиями публичной оферты страхования</p>
                                    </cascoE.PoleBlock>
                                </div>
                            )}
                            {formStep >= 2 && (
                                <div className={formStep === 2 ? '' : 'hidden'}>
                                    <h3>Оплата страхового полиса</h3>
                                    <cascoE.PoleBlock>
                                    <div>
                                        <h3>Стоимость полиса </h3>
                                        <h3>Данные о страховке    </h3>
                                        <h3>Номер бланка      </h3>
                                        <h3>Страховой продукт       </h3>
                                        <h3>Премия по договору      </h3>
                                        <h3>Срок действия      </h3>
                                    </div>
                                    <div>
                                        <h4>58.000 сум (5$)</h4>
                                        <h4>Период страхования</h4>
                                        <h4>123456789</h4>
                                        <h4>КАСКО</h4>
                                        <h4>100.000 сум (оплачено полностью)</h4>
                                        <h4>С 22.03.2021 по 26.03.2022</h4>
                                    </div>

                                    </cascoE.PoleBlock>
                                </div>
                            )}
                        </cascoE.RenewInput>

                        <cascoE.ButtonBlock>
                            {renderBtn()}
                            {/* <pre>{JSON.stringify(watch(), null ,2)}</pre> */}
                        </cascoE.ButtonBlock>
                        </div>
                        <cascoE.BlockCalc>
                            <cascoE.InfoBlock className="priseBlock">
                                <h2>Результаты расчета</h2>
                                <span>Стоимость полиса</span>
                                <h4>{value + ' 000 000'} сум </h4>
                                <span>Страховая сумма</span>
                                <h4>{value + ' 000 000' } сум</h4>
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
                    <HealthAccardion/>
            </GWrapper>
        </>
    )
}
export default  Health
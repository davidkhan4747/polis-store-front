import {Accardion } from './accardion-block.e'
import { useState } from 'react'
import Image from 'next/image'
const Acc = (

    {
        title,
        children,
        img,
        btn 
    }
) => {
    const [acheight , setacheight ] = useState('89px')
    const [heightmob , setheightmob] = useState('62px')
    const [cardStatus , setCardStatus] = useState(true)
    const AccradHeight = () => {
        if(cardStatus == true){
            setacheight('1200px')
            setheightmob('1114px')
            setCardStatus(false)

        }else{
            setacheight('89px')
            setheightmob('62px')

            setCardStatus(true)
        }
    }
    const Icon = () =>{
        return (
    <>
        {cardStatus == false ? (
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.4999 0.916832C23.5499 0.916832 30.0833 7.46475 30.0833 15.5002C30.0833 23.5502 23.5499 30.0835 15.4999 30.0835C7.4645 30.0835 0.916588 23.5502 0.916588 15.5002C0.916588 7.46475 7.4645 0.916832 15.4999 0.916832ZM9.66658 18.3877C10.1041 18.8106 10.7895 18.8106 11.2124 18.3731L15.4999 14.071L19.7874 18.3731C20.2103 18.8106 20.9103 18.8106 21.3333 18.3877C21.7708 17.9502 21.7708 17.2647 21.3333 16.8418L16.2728 11.7522C16.0687 11.5481 15.7916 11.4314 15.4999 11.4314C15.2083 11.4314 14.9312 11.5481 14.727 11.7522L9.66658 16.8418C9.44783 17.046 9.34575 17.3231 9.34575 17.6002C9.34575 17.8918 9.44783 18.1689 9.66658 18.3877Z" fill="#F6A729"/>
                </svg>
            ): (
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.01074 14.4998C1.01074 21.949 7.0497 27.9894 14.5003 27.9894C21.9495 27.9894 27.9899 21.949 27.9899 14.4998C27.9899 7.05067 21.9495 1.01025 14.5003 1.01025C7.0497 1.01025 1.01074 7.05067 1.01074 14.4998Z" stroke="#F6A729" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9.43799 12.3965L14.4999 17.4802L19.5617 12.3965" stroke="#F6A729" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            )}

    </>
        )
    }
    return (
        <Accardion  onClick={AccradHeight} heightmob={heightmob} height={acheight}>
                        <div className="flex">
                            <h2>{title}</h2>
                            <Icon/>
                        </div>
                        <div className='content'> 
                            <div className='answer'>
                                {/* <h3>Франшиза</h3>
                                <h4>Что такое франшза?</h4>
                                <p>Франшиза — часть расходов, которые водитель возьмет на себя при наступлении страхового случая</p>
                                <h4>Почему это выгодно?</h4>
                                <p>Чем больше сумма франшизы, тем дешевле Каско</p>
                                <h4>Как это работает?</h4>
                                <p>После ДТП страховая оценила повреждения автомобиля на 180.000.000 СУМ. По полису Каско с франшизой в 250.000 СУМ вы заплатите за ремонт 500.000 СУМ, а остальные 150.000.00 заплатит страховая</p> */}
                                {children}
                              {btn !== false ?  <button>Расчитать</button> : ''} 
                            </div>
                            <div className='imgblokc'>
                                <img src={img}/>
                            </div>
                        </div>

        </Accardion>
    )
}

export default Acc
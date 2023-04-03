import { GWrapper } from '../../../styles/globale-styles.e'
import ScrollToTop from "react-scroll-to-top";
import Link from 'next/link'
import {
    FooterBlock ,
    FooterHigh,
    Logo,
    CompanyBlock,
    FooterNav,
    FNavbar,
    PushUp,
    FooterLow
} from './footer.e'
const Up = () =>{
    return (
        <PushUp >
        <svg width="57" className='animation-down' height="30" viewBox="0 0 57 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55 28C55 13.6406 43.1355 2 28.5 2C13.8645 2 2 13.6406 2 28" stroke="#F6A729" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        <svg className='animation-up' width="45" height="23" viewBox="0 0 45 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M43.8684 22.4558C44.2528 22.0714 44.2528 21.4481 43.8684 21.0637L24.2406 1.43593C23.2796 0.474867 21.7214 0.474872 20.7603 1.43593L1.13258 21.0637C0.748159 21.4481 0.748159 22.0714 1.13258 22.4558C1.517 22.8402 2.14028 22.8402 2.5247 22.4558L22.1524 2.82804C22.3447 2.63583 22.6563 2.63583 22.8485 2.82804L42.4763 22.4558C42.8607 22.8402 43.484 22.8402 43.8684 22.4558Z" fill="#FBFBFB"/>
        </svg>
        </PushUp>

            )
        }
const Logot = () => {
    
    return (
    <Logo>
        <Link href={'/'}>
            <a>
                <Logo>
                <svg width="59" height="67" viewBox="0 0 59 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.8" d="M28.1209 5.58711C28.1209 3.19475 25.4578 1.76483 23.4636 3.08641L2.75157 16.8125C1.42284 17.6931 1.38677 19.6312 2.68182 20.5606L20.0893 31.9873C21.0935 32.6465 22.3941 32.6431 23.3949 31.9787L26.7802 29.7311C27.6176 29.1751 28.1209 28.2368 28.1209 27.2318V5.58711Z" fill="#A7A9AC"/>
                    <path opacity="0.8" d="M3.24303 44.9608C1.6436 46.2278 1.74836 48.6874 3.44972 49.8138L23.4647 63.0653C25.459 64.3857 28.1209 62.9557 28.1209 60.5639V38.9165C28.1209 37.9114 27.6176 36.9731 26.7802 36.4172L23.3739 34.1557C22.3838 33.4983 21.099 33.4874 20.0979 34.1279L3.57576 44.6973L3.24303 44.9608Z" fill="#A7A9AC"/>
                    <path opacity="0.8" d="M56.3187 20.5607C57.5365 19.894 57.6092 18.1717 56.4519 17.4047L35.5362 3.54349C33.542 2.2219 30.8789 3.65182 30.8789 6.04418V27.6863C30.8789 28.6928 31.3836 29.6321 32.2227 30.1877L35.5927 32.4189C36.6086 33.0916 37.9304 33.083 38.9375 32.3972L56.3187 20.5607Z" fill="#A7A9AC"/>
                    <path opacity="0.8" d="M30.8789 61.0179C30.8789 63.4103 33.542 64.8402 35.5362 63.5186L55.4111 50.347C57.1515 49.1935 57.2107 46.6592 55.5261 45.4257L54.5308 44.697L38.921 34.5974C37.9196 33.9495 36.6296 33.9563 35.6352 34.6148L32.2227 36.8741C31.3836 37.4297 30.8789 38.3691 30.8789 39.3755V61.0179Z" fill="#A7A9AC"/>
                    <path opacity="0.8" d="M3.10442 20.7276C1.77493 19.847 0 20.8003 0 22.395V43.7536C0 45.3483 1.77493 46.3016 3.10442 45.421L19.2276 34.7417C20.4217 33.9508 20.4217 32.1978 19.2276 31.4069L3.10442 20.7276Z" fill="#414042"/>
                    <path opacity="0.8" d="M55.8942 45.8755C57.2236 46.7568 58.9992 45.8036 58.9992 44.2085V22.8532C58.9992 21.2582 57.2236 20.3049 55.8942 21.1862L39.7863 31.8639C38.593 32.6549 38.593 34.4069 39.7863 35.1979L55.8942 45.8755Z" fill="#414042"/>
                </svg>
                <p>Название</p>
                </Logo>
            </a>
        </Link>
    </Logo>
    )
}
const Footer = () => {
    const TopTop = () => {
        
        window.scrollTo(0, 0);
    }
    return (
        <>
            <FooterBlock >
                <GWrapper>
                    <FooterHigh>
                        <CompanyBlock>
                            <Logot/>
                            <p>Телефон контакт центра</p>
                            <h3>+998-71-200-10-10</h3>
                            <p>Политика конфидециальности</p>
                        </CompanyBlock>
                        <div className='w100'>
                            <FooterNav>
                            <FNavbar>
                                    <Link href={'/404'}><a><h2>Компания</h2></a></Link>
                                    <Link href={'/'}><a><p>Корпоративный сайт</p></a></Link> 
                                    <Link href={'/'}><a><p>Адреса и контакты</p></a></Link>
                                    <Link href={'/'}><a><p>Центр выплат</p></a></Link>
                                </FNavbar>
                                <FNavbar>
                                    <Link href={'/individuals-polis/casco'}><a><h2>Автострахование онлайн</h2></a></Link>
                                    <Link href={'/individuals-polis/casco'}><a><p>ОГПО ВТС </p></a></Link> 
                                    <Link href={'/'}><a><p>КАСКО ДТП</p></a></Link>
                                    <Link href={'/'}><a><p>КАСКО </p></a></Link>
                                    <Link href={'/'}><a><p>Экстра КАСКО </p></a></Link>

                                </FNavbar>
                                <FNavbar>
                                    <Link href={'/individuals-polis/sport'}><a><h2>Страхование здоровья</h2></a></Link>
                                    <Link href={'/'}><a><p>Несчатсный случай</p></a></Link> 
                                    <Link href={'/'}><a><p>Дети</p></a></Link>
                                    <Link href={'/'}><a><p>Спортсмены </p></a></Link>
                                    <Link href={'/'}><a><p>Нерезидентам </p></a></Link>

                                </FNavbar>
                            </FooterNav>
                            <FooterNav>
                            <FNavbar>
                                    <Link href={'/404'}><a><h2>Информация</h2></a></Link>
                                    <Link href={'/'}><a><p>Отзывы клиентов</p></a></Link> 
                                    <Link href={'/'}><a><p>Вопрос - ответ</p></a></Link>
                                    <Link href={'/'}><a><p>Документы </p></a></Link>
                                </FNavbar>
                                <FNavbar>
                                    <Link href={'/individuals-polis/Appartament'}><a><h2>Страхование имущества</h2></a></Link>
                                    <Link href={'/'}><a><p>Мой дом</p></a></Link> 
                                    <Link href={'/'}><a><p>Квартирный вопрос</p></a></Link>
                                    <Link href={'/'}><a><p>Движимое имущество</p></a></Link>
                                </FNavbar>
                                <FNavbar>
                                    <Link href={'/individuals-polis/travel'}><a><h2>Страхование путешествий</h2></a></Link>
                                    <Link href={'/'}><a><p>Туристам </p></a></Link> 
                                    <Link href={'/'}><a><p>Шенген </p></a></Link>
                                </FNavbar>
                            </FooterNav>
                            <p className='khan'>Developer Davidkhan Khadjayev  &copy;</p>
                        </div>
                        <ScrollToTop className='toptop' smooth component={<Up/>}  />
                    </FooterHigh>
                </GWrapper>
            </FooterBlock>
            <FooterLow>
            <GWrapper>
                    <p>
                        СПАО «Страховка» использует файлы «cookie» с целью персонализации сервисов и повышения удобства пользования веб-сайтом. Если вы не хотите использовать файлы «cookie», измените настройки браузера. Порядок обработки Ваших персональных данных, а также реализуемые требования к их защите содержатся в Политике СПАО «Страховка»
                        <br/><br/>
                        © 2022 СПАО «Страховка». По вопросам сопровождения сайта обращайтесь www@Страховка.uz
                        Лицензии ЦБ РФ на осуществление страхования: СИ №0928, СЛ №0928, ОС №0928-03, ОС №0928-04, ОС №0928-05 и на осуществление перестрахования ПС № 0928, выданные 23.09.2015 и ОС №0928-02 от 25.12.2019, все лицензии без ограничения срока действия.
                        Сайт защищен reCAPTCHA с применением Политики конфиденциальности и Условий использования от Google.
                    </p>
            </GWrapper>
            </FooterLow>

        </>
        
    )
}

export default Footer 






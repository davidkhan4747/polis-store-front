import { GWrapper } from "../../../styles/globale-styles.e";
import { Lampochka , ErrorBlock,ErrorLow ,ErrorHigh, ErrorTitle,ErrorMessage , BigLampa ,ButtonBLock, ButtonMain} from "./not-found.e";
import Link from "next/link";
const NotFound = () => {
    const Blick = () => {
        return (
            <Lampochka>
                <svg width="248" height="676" viewBox="0 0 248 676" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"clipRule="evenodd" d="M117.502 133.407C132.439 133.407 144.548 126.998 144.548 119.091C144.548 111.185 132.439 104.775 117.502 104.775C102.566 104.775 90.457 111.185 90.457 119.091C90.457 126.998 102.566 133.407 117.502 133.407Z" fill="#F2F2F2"/>
                <path fillRule="evenodd"clipRule="evenodd" d="M149 128.953C149 111.384 134.897 97.1401 117.5 97.1401C100.103 97.1401 86 111.384 86 128.953" fill="#DDE3E9"/>
                <path d="M119.092 0H115.91V101.802H119.092V0Z" fill="#DDE3E9"/>
                <g className="test" opacity="0.4" filter="url(#filter0_i_750_5529)">
                <path d="M85.9176 129H149.079L248 676H0L85.9176 129Z" fill="#FBFBFB"/>
                </g>
                <defs>
                <filter id="filter0_i_750_5529" x="0" y="129" width="248" height="551" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_750_5529"/>
                </filter>
                </defs>
                </svg>
            </Lampochka>
            
        )
    }
    const Svet = () => {
        return (
            <>
            <svg width="252" height="598" viewBox="0 0 252 598" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M169.195 35.3181L141.394 7.50873C136.716 2.83042 129.129 2.83042 124.45 7.50873L50.4358 81.5428C45.9454 86.0355 43.4224 92.1255 43.4224 98.476V588.877" stroke="#CBCBCB" strokeWidth="8"/>
            <path d="M4.49123 587.38H83.848C86.3288 587.38 88.3398 589.391 88.3398 591.871V593.368C88.3398 595.849 86.3288 597.859 83.848 597.859H4.49123C2.01042 597.859 -0.000671387 595.849 -0.000671387 593.368V591.871C-0.000671387 589.391 2.01042 587.38 4.49123 587.38Z" fill="#AFB9C5"/>
            <g   >
                <path d="M222.351 18.9989C203.055 -0.295202 171.771 -0.295202 152.474 18.9989C133.178 38.2915 133.178 69.571 152.474 88.8651L182.119 118.505L251.996 48.6391L222.351 18.9989Z" fill="#C5CFD6"/>
                <path fillRule="evenodd"clipRule="evenodd" d="M222.756 89.6484C203.461 108.941 184.737 121.501 180.936 117.7C177.135 113.901 189.696 95.18 208.993 75.8874C228.289 56.5933 247.013 44.0345 250.814 47.834C254.614 51.6351 242.052 70.3558 222.756 89.6484Z" fill="#F2F2F2"/>
                <path d="M211 73V55.125L193 51.6875L198.538 40" stroke="#D3E3EE" strokeWidth="3" strokeLinecap="round"/>
                <path d="M193 52L180.333 58L175 53.8" stroke="#D3E3EE" strokeWidth="3"/>
            </g>
            </svg>
            </>
        )
    }
    
    return (
        <ErrorBlock>
         <ErrorHigh>
            <GWrapper>
            <BigLampa  className="animate__animated animate__zoomInDown">
                    <Svet/>
            </BigLampa>
                <div className="center">
                        <Blick/>
                </div>
                <div>
                <ErrorTitle className="animate__animated animate__lightSpeedInLeft">Ошибка 404</ErrorTitle>
                <ErrorMessage>Страницы не существует или она удалена</ErrorMessage>

                </div>
            </GWrapper>
        </ErrorHigh>
        <ErrorLow>
            <GWrapper>
            <Link href={'/'}>
                <a>
                    <ButtonBLock>
                        <ButtonMain>На главную</ButtonMain>
                    </ButtonBLock>
                </a>
            </Link>
            </GWrapper>
        </ErrorLow>
        </ErrorBlock>
       
    )
}

export default NotFound
import { GWrapper } from "../../../styles/globale-styles.e";
import {Title ,TitleBlock ,GoPArea,    } from '../personal-data/personal-data.e'
import Link from "next/dist/client/link";
import {BigBlock  , PolisTitle,Polis} from './my-polis.e'
const MyPolis = ({data}) => {
    const Icon = () => {
        return (
<svg width="41" height="39" viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M34.584 38.7918H7.50065C3.47357 38.7918 0.208984 35.5272 0.208984 31.5001V4.29842C0.208984 2.07435 2.40865 0.664354 4.34419 1.33634C4.6207 1.43234 4.89181 1.57082 5.15035 1.7555L5.51504 2.01598C7.32342 3.30769 9.76922 3.30197 11.5827 2.00663C14.118 0.195706 17.55 0.195706 20.0853 2.00663C21.8987 3.30197 24.3446 3.30769 26.1529 2.01598L26.5176 1.7555C28.586 0.278112 31.459 1.75663 31.459 4.29841V20.0418H38.7507C39.6136 20.0418 40.3132 20.7413 40.3132 21.6043V33.0626C40.3132 36.2267 37.7481 38.7918 34.584 38.7918ZM31.9798 23.1668V33.0626C31.9798 34.5008 33.1457 35.6668 34.584 35.6668C36.0222 35.6668 37.1882 34.5008 37.1882 33.0626V23.1668H31.9798ZM23.1257 14.3126C23.1257 13.4496 22.4261 12.7501 21.5632 12.7501H9.06315C8.20021 12.7501 7.50065 13.4496 7.50065 14.3126C7.50065 15.1755 8.20021 15.8751 9.06315 15.8751H21.5632C22.4261 15.8751 23.1257 15.1755 23.1257 14.3126ZM21.0423 20.5626C21.0423 19.6996 20.3428 19.0001 19.4798 19.0001H9.06315C8.20021 19.0001 7.50065 19.6996 7.50065 20.5626C7.50065 21.4255 8.20021 22.1251 9.06315 22.1251H19.4798C20.3428 22.1251 21.0423 21.4255 21.0423 20.5626ZM21.5632 25.2501C22.4261 25.2501 23.1257 25.9496 23.1257 26.8126C23.1257 27.6755 22.4261 28.3751 21.5632 28.3751H9.06315C8.20021 28.3751 7.50065 27.6755 7.50065 26.8126C7.50065 25.9496 8.20021 25.2501 9.06315 25.2501H21.5632Z" fill="#F6A729"/>
</svg>

        )
    }
    return (
        <>
            <GWrapper>
                <TitleBlock>
                    <Icon/>
                    <Title>Ваши страховые полисы</Title>
                </TitleBlock>
                <Link href={'/personal-area'}>
                        <a>
                    <GoPArea>
                    &#8592;  Вернуться в персональный кабинет
                    </GoPArea>
                        </a>
                </Link>
                   <BigBlock>
                       {data ? (
                           <>

                           {data?.map((item , idx)=>(
                            <>
                                {/* <h4 className="cicrcleN">{idx + 1}</h4> */}
                                <div>

                               <PolisTitle>{item?.insurance_type}</PolisTitle>
                               <Polis>
                            <div className="animate__animated   animate__fadeIn">
                               {/* Обьект срахования */}
                               <h3>{item?.object_insurance} </h3>  
                               {/* Обьект срахования */}
                               <h3>{item?.type_insurance}  </h3>
                               {/* Номер бланка */}
                               <h3>{item?.num_treaty}     </h3>
                               {/* Страховой продукт */}
                               <h3>{item?.insurance_product}      </h3>
                               {/* Премия по договору */}
                               <h3>{item?.sum_ins_premium_payable}   </h3>
                               {/* Срок действия */}
                               <h3>{item?.ins_policy_date}     </h3>
                           </div>
                           <div className="animate__animated   animate__fadeIn">
                               <h4>{item?.insurance_object}</h4>
                               <h4>{item?.insurance_type}</h4>
                               <h4>{item?.id}</h4>
                               <h4>{item?.product_insurance}</h4>
                               <h4>{item?.ins_premium_payable_sum ?item?.ins_premium_payable_sum : 'не найдено'}</h4>
                               <h4>{item?.ins_policy_start_date} по {item?.ins_policy_end_date}</h4>
                           </div>
                           </Polis>
                                </div>

                           
                        </>
                            ))}
                           
                           </>
                       ):(
                            <>
                            <div className="Gcenter">
                                <div className="loader">
                                    <div></div>
                                </div>
                            </div>
                            </>
                       )}
                       {data?.product ? (<h2>У вас пока нет действующих полисов</h2>) : ''}
                   </BigBlock>
            </GWrapper>
        </>
    )
}

export default MyPolis
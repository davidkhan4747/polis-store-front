import { useState } from 'react';
import { GWrapper } from '../../styles/globale-styles.e'
import Switch from '@mui/material/Switch';
import parse from 'html-react-parser'
import InputBase from '@mui/material/InputBase';
import Link from 'next/dist/client/link';
import { styled, alpha } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import {
    MainBlock,
    CatalogBlock,
    FilterContainter,
    CatalogHead,
    CatalogTovars,
    Catalog,
    ModeCard,
    Punkt,
    Card,
    ButtonSearch,
    CardImage,
    PolisInfo,
    BuyPolisBlock,
    BuyButton,
    ExtendPolis,
    Test,
    FilterItems,
    FilterFather
} from './catalog.e'
import {useForm} from 'react-hook-form'
import { api } from "../../services/api";

const MainCatalog = (
    {legal , data} 
) => {
    const {watch , register , handleSubmit ,formState:{errors , isValid}} = useForm({mode:'all'})
    const [card , setCard] = useState('277px')
    const [cardImage , setImage] = useState('257px')
    const [imgRadius , setRadius] = useState('0')
    const [cardStatus , setCardStatus] = useState(true)
    const [filtcard , setFilt] = useState()
    const onSubmit = (data,e) => {
        api.post('/filter', data,e).then(async(response)=>{
            setFilt(response.data)
            console.log(response.data )
            console.log(data )

        })
    }
    const setWidthCard = () => {
        if(cardStatus == true){
            setCard('892px')
            setImage('215px')
            setRadius('15')
            setCardStatus(false)
        }else{
            setCard('277px')
            setRadius('0')

            setImage('257px')
            setCardStatus(true)
        }
    }
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    

    
      const GalkaIcon = () => {
          return (
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.50086 8.50005L1.58419 5.58338C1.50793 5.50618 1.41709 5.44489 1.31696 5.40305C1.21682 5.36122 1.10938 5.33968 1.00086 5.33968C0.89234 5.33968 0.784899 5.36122 0.684765 5.40305C0.584631 5.44489 0.493797 5.50618 0.417528 5.58338C0.340328 5.65965 0.279035 5.75048 0.237202 5.85062C0.195369 5.95075 0.173828 6.05819 0.173828 6.16671C0.173828 6.27523 0.195369 6.38268 0.237202 6.48281C0.279035 6.58294 0.340328 6.67378 0.417528 6.75005L3.90919 10.2417C4.23419 10.5667 4.75919 10.5667 5.08419 10.2417L13.9175 1.41671C13.9947 1.34044 14.056 1.24961 14.0979 1.14948C14.1397 1.04934 14.1612 0.941901 14.1612 0.83338C14.1612 0.724859 14.1397 0.617418 14.0979 0.517284C14.056 0.41715 13.9947 0.326316 13.9175 0.250047C13.8413 0.172847 13.7504 0.111554 13.6503 0.0697213C13.5502 0.0278883 13.4427 0.00634766 13.3342 0.00634766C13.2257 0.00634766 13.1182 0.0278883 13.0181 0.0697213C12.918 0.111554 12.8271 0.172847 12.7509 0.250047L4.50086 8.50005Z" fill="#F08223"/>
            </svg>
          )
      }
      const DollarIcon = ()=>{
          return(
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.6 7C8.2 6.9 7.8 6.7 7.5 6.4C7.2 6.3 7.1 6 7.1 5.8C7.1 5.6 7.2 5.3 7.4 5.2C7.7 5 8 4.8 8.3 4.9C8.9 4.9 9.4 5.2 9.7 5.6L10.6 4.4C10.3 4.1 10 3.9 9.7 3.7C9.4 3.5 9 3.4 8.6 3.4V2H7.4V3.4C6.9 3.5 6.4 3.8 6 4.2C5.6 4.7 5.3 5.3 5.4 5.9C5.4 6.5 5.6 7.1 6 7.5C6.5 8 7.2 8.3 7.8 8.6C8.1 8.7 8.5 8.9 8.8 9.1C9 9.3 9.1 9.6 9.1 9.9C9.1 10.2 9 10.5 8.8 10.8C8.5 11.1 8.1 11.2 7.8 11.2C7.4 11.2 6.9 11.1 6.6 10.8C6.3 10.6 6 10.3 5.8 10L4.8 11.1C5.1 11.5 5.4 11.8 5.8 12.1C6.3 12.4 6.9 12.7 7.5 12.7V14H8.6V12.5C9.2 12.4 9.7 12.1 10.1 11.7C10.6 11.2 10.9 10.4 10.9 9.7C10.9 9.1 10.7 8.4 10.2 8C9.7 7.5 9.2 7.2 8.6 7ZM8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8 14.9C4.2 14.9 1.1 11.8 1.1 8C1.1 4.2 4.2 1.1 8 1.1C11.8 1.1 14.9 4.2 14.9 8C14.9 11.8 11.8 14.9 8 14.9Z" fill="#F08223"/>
        </svg>

          )
      }
      const WorldIcon = ()=>{
          return (
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4173 8.49968C16.4173 4.1273 12.873 0.583008 8.50065 0.583008C4.12828 0.583008 0.583984 4.1273 0.583984 8.49968C0.583984 12.8721 4.12828 16.4163 8.50065 16.4163" stroke="#F08223" strokeLinecap="round"strokeLinejoin="round"/>
                <path d="M1.08203 5.72881H15.9179M9.29161 0.622559C9.29161 0.622559 11.6666 3.74964 11.6666 8.49964L9.29161 0.622559ZM7.70828 16.3767C7.70828 16.3767 5.33328 13.2496 5.33328 8.49964C5.33328 3.74964 7.70828 0.622559 7.70828 0.622559V16.3767ZM1.08203 11.2705H8.49995H1.08203Z" stroke="#F08223" strokeLinecap="round"strokeLinejoin="round"/>
                <path d="M16.321 13.1839C16.7121 13.4246 16.6876 14.0096 16.2854 14.0555L14.2532 14.2859L13.342 16.1162C13.1615 16.4796 12.6034 16.3015 12.5107 15.8518L11.5172 11.01C11.4388 10.63 11.7808 10.3909 12.1109 10.5944L16.321 13.1839V13.1839Z" stroke="#F08223"/>
            </svg>

          )
      }
      const CardC = ({
          img ,
          src,
          children,
          className
      }) => {
          return (
            <Card className={className} width={card}>
            <Test>
            <CardImage radius={imgRadius} width={cardImage}>
                <img src={img ||'/ii.png'} />
            </CardImage>
            <PolisInfo>
                {children}
                

            </PolisInfo>
            </Test>
           
            <BuyPolisBlock>
                <p><DollarIcon/> <span>Ежемесячные платежи</span> </p>
                <p className='last'><WorldIcon/><span>Можно оформить без посещения офиса</span>  </p>
                <Link href={'/renewal-polis'}>
                    <a>
                    <ExtendPolis>Продлить</ExtendPolis>
                    </a>
                </Link>
                <Link href={'/individuals-polis/' + src}>
                    <a>
                    <BuyButton>Купить</BuyButton>
                    </a>
                </Link>
            </BuyPolisBlock>
        </Card>
          )
      }
      const LegalCard = () => {
          return (
            <Card width={card}>
            <Test>
            <CardImage radius={imgRadius} width={cardImage}>
                <img src='/cardhome.png' />
            </CardImage>
            <PolisInfo>
                <h2>Страхование от огня и других рисков</h2>
                <p>Защита зданий от пожаров, залива, стихийных бедствий, воров </p>
                <h3>Страховые риски:</h3>
                <p className='punkt'><GalkaIcon/> Ущерб</p>
                <p className='punkt'><GalkaIcon/> Угон и полная гибель</p>

            </PolisInfo>
            </Test>
           
            <BuyPolisBlock>
                <p><DollarIcon/> <span>Ежемесячные платежи</span> </p>
                <p className='last'><WorldIcon/><span>Можно оформить без посещения офиса</span>  </p>
                <Link href={'/legals-polis/lorem'}>
                    <a>
                    <BuyButton className='legal'>Заполнить заявку</BuyButton>
                    </a>
                </Link>
            </BuyPolisBlock>

        </Card>
          )
      }
    return(
        <MainBlock id='katalog'>
            <GWrapper>
                {legal == false ? ( <h2 className='block-title animate__animated animate__fadeInLeft '>Каталог полисов для физических лиц</h2>): <h2 className='block-title'>Каталог полисов для юридических лиц</h2>}
                    
                    <CatalogBlock className='animate__animated animate__fadeInLeft'>
                        <FilterFather>
                            {legal == false ? (
                                <FilterContainter onSubmit={handleSubmit(onSubmit)}>
                                <h2>Виды страхования</h2>
                                <FilterItems>
                                    <div className='div1'>

                                    {data?.filter.map((item,idx)=>(
                                        <Punkt><Checkbox {...label} value={item?.name}   {...register( 'key' , {required:false })}   color="warning"  key={idx} /> <p>{item?.name}</p></Punkt>
                                    ) )}
                                    </div>
                                    <div className='div1'>
                                    </div>
                                </FilterItems>
                                <ButtonSearch type='submit'>Найти</ButtonSearch>
                                </FilterContainter>
                            ):(
                                <FilterContainter>
                                <h2>Виды страхования</h2>
                                <FilterItems>
                                    <div className='div1'>
                                        <Punkt><Checkbox {...label}  color="warning" /> <p>Страхование транспорта</p></Punkt>
                                        <Punkt><Checkbox {...label}  color="warning" /> <p>Страхование имущества</p></Punkt>
                                        <Punkt><Checkbox {...label}  color="warning" /> <p>Страхование ответственности</p></Punkt>
                                        <Punkt><Checkbox {...label}  color="warning" /> <p>Страхование сотрудников</p></Punkt>
                                        <Punkt><Checkbox {...label}  color="warning" /> <p>Страхование грузов</p></Punkt>
                                    </div>
                                    <div className='div1'>
                                        <Punkt><Checkbox {...label}  color="warning" /> <p>Страхование технических рисков</p></Punkt>
                                        <Punkt><Checkbox {...label}  color="warning" /> <p>Страхование финансовых рисков</p></Punkt>
                                        <Punkt><Checkbox {...label}  color="warning" /> <p>Страхованине сельскохозяйст-венных рисков</p></Punkt>
                                    </div>
                                </FilterItems>
                                <ButtonSearch>Найти</ButtonSearch>
                                </FilterContainter>
                            )}
                            <FilterContainter className='info'>
                                <h2>Как оформить страховку онлайн за несколько шагов?</h2>
                                <p>1 . Выберите нужный вид страховки</p>
                                <p>2. Заполните данные для страхового договора</p>
                                <p>3. Оплатите страховку и получите документ на e-mail</p>
                            </FilterContainter>
                        </FilterFather>
                        <Catalog>
                            <CatalogHead>
                                <h2>Прошлые расчеты</h2>
                                {/* <Search>
                                    <SearchIconWrapper>
                                    <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                    placeholder="   Поиск по катологу..."
                                    inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search> */}
                                <ModeCard>
                                    <p >Изменить вид</p>
                                    <Switch {...label} onClick={()=>setWidthCard()}   color="warning" />
                                </ModeCard>
                            </CatalogHead>
                            <CatalogTovars >
                                {legal == false ? (
                                    <>
                                    {filtcard == null ? (
                                        <>
                                        {data?.product.map((item,idx)=>(
                                            <CardC className='animate__animated animate__fadeInLeft' img={`http://s499964.smrtp.ru//storage/app/public/${item?.img}` } src={item?.src} key={idx}>
                                                <h2>{item?.title}</h2>
                                                <p>{item?.description}</p>
                                                {/* <h3>Страховые риски:</h3>
                                                <p className='punkt'><GalkaIcon/> Инвалидность</p>
                                                <p className='punkt'><GalkaIcon/> Смерть</p>   
                                                <p className='punkt'><GalkaIcon/> Травматические повреждения, полученные во время участия в спортивных соревнованиях</p>    */}
                                                {parse(item?.text || '')}
                                           </CardC> 
                                            ))}
                                        </>
                                    ):(
                                        <>
                                            {filtcard?.product?.map((item , idx)=>(
                                                 <CardC className='animate__animated animate__fadeInLeft' img={`http://s499964.smrtp.ru//storage/app/public/${item?.img}` } src={item?.src} key={idx}>
                                                 <h2>{item?.title}</h2>
                                                 <p>{item?.description}</p>
                                                 {/* <h3>Страховые риски:</h3>
                                                 <p className='punkt'><GalkaIcon/> Инвалидность</p>
                                                 <p className='punkt'><GalkaIcon/> Смерть</p>   
                                                 <p className='punkt'><GalkaIcon/> Травматические повреждения, полученные во время участия в спортивных соревнованиях</p>    */}
                                                 {parse(item?.text || '')}
                                            </CardC> 
                                            ))}
                                        </>
                                    )}
                                     
                                    
                                        
                                    </>
                                ): (
                                    <>
                                    <LegalCard/>
                                    <LegalCard/>
                                    <LegalCard/>
                                    <LegalCard/>
                                    </>
                                )}
                                
                            </CatalogTovars>
                        </Catalog>
                    </CatalogBlock>
            </GWrapper>
        </MainBlock>

    )
}

export default MainCatalog
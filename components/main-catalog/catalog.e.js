import styled from 'styled-components'

export const MainBlock = styled.section`
    background: #f1f1f1;
`
export const CatalogBlock = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

`
export const Catalog = styled.div`
    width: 892px;
    @media(max-width:1024px){
    width: 992px;

    }

`
export const FilterContainter = styled.form`
    max-width: 288px;
    background: #FBFBFB;
    box-shadow: 0px 1px 7px 1px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 20px;
    &:last-child {
        margin: 30px  0 0 0;
    }
    h2 {
        font-weight: 600;
        font-size: 17px;

    }
    p {
        font-weight: 400;
        font-size: 14px;
    }
    @media(max-width:1024px){
        margin: 30px 0;
    }
    &.info {
        h2 {
            line-height: 22px;
            max-width: 217px;
        }
        p {
            font-weight: 500;
            font-size: 14px;
            opacity: 0.8;
            line-height: 17px;
            margin: 20px 0;
        }
        @media(max-width:1024px){
            display: none;

        }
    }
    @media(max-width:1024px){
        width: 100%;
        max-width: 584px;
        margin:  0 auto 30px  auto;
        text-align: center;
    }
`
export const FilterFather = styled.div`
    @media(max-width:1024px){
        width: 100%;

    }
`
export const FilterItems = styled.div`
    @media(max-width:1024px){
            display: flex;
            width: 100%;
            justify-content: space-around   ;
            margin: 10px 0;
            flex-wrap: wrap;
        }
        @media(max-width:385px){
            max-width: 250px;
            justify-content: space-between;

        }
        .div1{
            /* @media(max-width:1024px){
                display: flex;
            } */
            @media(max-width:385px){

                max-width: 100px;
            }

        }
`
export const CatalogHead = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 25px;
    h2 {
        font-weight: 600;
        font-size: calc(16px + 5 * ((100vw - 320px) / 680));
        color: #242424;
        @media(max-width:500px){
           display: none;
        }
    }
`
export const SearchPolis = styled.input`
    border: none;
    background: #FBFBFB;
    border-radius: 15px;
    color: #242424;
    padding: 15px 23px;
    font-weight: 600;
    font-size: 14px;
    opacity: 0.4;
    width: 350px;
    outline: none;
    &:active {
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
    }
`
export const ModeCard = styled.div`
    max-width: 201px;
    background: #FBFBFB;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    display: flex;
    align-items: center;

    justify-content: space-between;
    padding: 9px 19px;
    p {
        font-weight: 600;
        font-size: 14px;
    }
    @media(max-width:850px){
        display: none;
    }
`
export const Punkt = styled.div`
    display: flex;
    align-items: center;
   
    &.first {
        padding: 30px 0 0 0 ;
        @media(max-width:1024px){
            padding: 0;
        }
    }
    p {
        font-size: 14px;
        @media(max-width:380px){
            max-width: 120px;
        }
    }
`
export const ButtonSearch = styled.button`
    border: none;
    background: #F6A729;
    border-radius: 15px;
    padding: 14px 90px;
    transition: 0.1s all ease-in;
    margin: 10px 0;
    color: #FBFBFB;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    &:hover {
        background: #EAA840;
    }
    &:active{
        background: #C48015;;
    }
    &:disabled {
        opacity: 0.6;
        
    }
`
// CARDS 

export const CatalogTovars = styled.div`
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    max-height: 1000px;
    overflow: scroll;
    scrollbar-width: thin;
    scrollbar-color: #EAA840 ; 
    padding-right: 15px;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 10px #ed6c02;
        border-radius: 5px;
        cursor: pointer;    
    }
    &::-webkit-scrollbar-track {
    }
    @media(max-width:600px){
        justify-content: center;
    }

`
export const Card = styled.div`
    margin: 0 5px 30px 5px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    flex-wrap: wrap;
    width: 100%;
    max-width:  ${props => props.width};
    background: #FBFBFB;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    color: #3E3E3E;
    &:hover {
        box-shadow: 0px 3px 15px 1px rgba(246, 167, 41, 0.3);
    }
`
export const CardImage  = styled.div`
    border-radius: 15px;
    overflow: hidden;
    max-width: ${props => props.width};
    max-height: 197px;
        border-bottom-right-radius: ${props => props.radius};
        border-bottom-left-radius: ${props => props.radius};
`
export const  PolisInfo = styled.div`
    color: #3E3E3E;
    max-width: 282px;
    width: 100%;
    h2 {
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 0.03em;
        line-height: 25px;
        padding:  0 0 17px 0;
        margin:10px 0 ;
    }
    h3 {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.03em;
        padding: 0 0 17px 0;

    }
    p {
        padding:  0 0 19px 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.03em;
        &.punkt {
        padding:  0 0 12px 0;
            
        }
    }
`
export const Test = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    max-width: 539px;
    justify-content: space-between;
`
export const BuyPolisBlock  = styled.div`
    max-width:163px;
    color: #3E3E3E;
    p {
        font-weight: 300;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        line-height: 14px;
        padding: 0 0  17px 0;
        span {
            max-width: 132px;
        }
    &.last {
        padding: 0 0  40px 0;

    }
    }
`
export const BuyButton = styled.button`
    background: #F6A729;
    border-radius: 15px;
    padding: 14px 50px;
    font-weight: 700;
    border: none;
    font-size: 14px;
    transition: 0.1s all ease-in;
    color: #FBFBFB;
    cursor: pointer;
    max-width: 150px;
    &:hover {
        background: #EAA840;
    }
    &:active {
        background: #C48015;
    }
    &.legal {
        padding: 14px 12px;
    }

`
export const ExtendPolis = styled.button`
    border: 2px solid #F6A729;
    border-radius: 15px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;   
    color: #242424;
    transition: 0.2s all ease-in;
    background-color: transparent;
    padding: 14px 37px;
    margin: 0 0 20px 0;
    &:hover {
        background: #F6A729;
        color:  #FBFBFB;;
    }
    &:active{
        background-color: #f6a72991;
    }
`


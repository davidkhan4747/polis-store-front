import styled from 'styled-components'

export const RenewalBlock = styled.form`
    /* display: flex; */
    
    .w100 {
        width: 100%;
    @media(max-width:800px){
        margin: 20px auto;
        width: inherit;
    }
    }
    @media(max-width:800px){
        flex-wrap: wrap;
        justify-content: center;
    }
    @media(max-width:500px){
    }
`
export const RenewInput = styled.div`
    width: 100%;
    max-width: 790px;
    background: #FBFBFB;
    padding: 40px;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin: 0 0 30px 0;
    h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 47px;
        color: #242424;
        
        span {
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.03em;
            color: #242424;
            opacity: 0.6;
        }
    }
    
    p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        color: #242424;
        max-width: 340px;

    }
   @media(max-width:1024px){
       max-width: 649px;
   }
   @media(max-width:500px){
     max-width: 350px;
     margin: 0 auto;
   }
   &.hidden {
       display: none;
   }
`

export const PoleBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 25px 0;
    @media(max-width:500px){
        justify-content: center;
    }
   
`

export const InfoBlock = styled.div`
    max-width: 380px;
    padding: 40px;
    background: #FBFBFB;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    max-height: 366px;
    h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;

        color: #242424;
        margin: 0 0 40px 0;
    }
    p {
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: 0.03em;
        margin: 0 0 20px 0;
        color: #242424;
        &::before {
            content: '';
            padding: 0 8px   ;
            width: 15px;
            margin: 0 5px ;
            height: 15px;
            border-radius: 50%;
            background: #F6A729;
        }
    }
    @media(max-width:1024px){
        max-width: 315px;
    }
    @media(max-width:800px){
        width: 100%;
        max-width: 650px;
    }
    @media(max-width:500px){
        max-width: 350px;
    }
`
export const ButtonBlock = styled.div`
    max-width: 790px;
    padding: 50px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FBFBFB;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin: 0 0 30px 0;
    p {
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.03em;
        color: #242424;
        opacity: 0.6;
    }
    @media(max-width:1024px){
        max-width: 649px;
        padding: 29px 20px;
        p {
            max-width: 313px;
            margin: 15px 21px 0 21px;
        }
    }
    @media(max-width:500px){
        max-width: 350px;
        flex-wrap: wrap;
        justify-content: center;
        margin: 41px auto;
    }
`
export const Progress = styled.div`
    margin: 0 0 50px 0;
    width: 100%;
    max-width: 1185px;
    @media(max-width:1200px){
        display: none;
    }
`
export const ErrorBlock = styled.div`
    max-width: 790px;
    padding: 40px 40px;
    background: rgba(246, 167, 41, 0.8);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    h3 {
        font-style: normal;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.03em;
        margin: 0 0 30px 0;
        color: #FBFBFB;
    }
    p {
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0.03em;
        color: #FBFBFB;
        opacity: 0.9;
    }
    @media(max-width:1024px){
        max-width: 649px;
        padding: 29px 20px;
        p {
            max-width: 313px;
            margin: 15px 21px 0 21px;
        }
    }
    @media(max-width:500px){
        max-width: 350px;
        flex-wrap: wrap;
        justify-content: center;
    }
`

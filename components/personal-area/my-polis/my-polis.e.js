import styled from 'styled-components'

export const BigBlock = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    h2 {
        font-weight: 600;
        font-size: calc(16px + 10 * ((100vw - 320px) / 680));
        line-height: 43px;
        color: #242424;
        @media(max-width:500px){
            font-size: 18px;
        }
    }
    min-height: 553px;
    background: #FBFBFB;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    background-image: url('/polis.png');
    background-repeat: no-repeat;
    margin: 0 0 150px 0;
    padding: 50px ;
    background-position: center;
    @media(max-width:500px){
        padding: 30px;
    }
`
export const PolisTitle = styled.h6`
    font-size: calc(19px + 5 * ((100vw - 320px) / 680));
    color: #242424;
        @media(max-width:500px){
            font-size: 16px;
        }
`
export const Polis = styled.div`
     display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 25px 0;
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    padding: 15px 25px;
    border-radius: 15px;
    div {
        max-width: 393px;;
    }
    h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 47px;
        color: #242424;
        
        /* @media(max-widtH:500px){
            font-weight: 700;
            font-size: 18px;
            line-height: 150%;
            letter-spacing: -0.035em;
            color: #242424;
        } */
    }
    h4 {
            font-weight: 600;
            font-size: 20px;
            line-height: 47px;
            letter-spacing: 0.03em;
            color: #242424;
            opacity: 0.6;
        }
    p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        color: #242424;
        /* max-width: 340px; */

    }
    .label {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.03em;
        color: #242424;
        opacity: 0.6;
        margin: 0 0 9px 0;
    }
    
    .prise-block {
        width: 100%;
        max-width: 600px;
        display: flex;
        align-items: center;
        justify-content: space-between; 
        @media(max-width:500px){
            flex-wrap: wrap;
        }
        .prise {
        background: #F1F1F1;
        font-weight: 600;
        border-radius: 15px;
        min-height: 50px;
        display: flex;
        align-items: center;
        min-width: 150px;
        outline: #F6A729;
        padding: 0 10px;
        justify-content: center;
        border: none;
        @media(max-width:500px){
            margin: 30px 0;
            width: 100%;
        }
}
    }
`
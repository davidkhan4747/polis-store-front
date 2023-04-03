import styled from 'styled-components'

export const RenewalBlock = styled.div`
    display: flex;
    justify-content: space-between;
    .w100 {
        width: 100%;
    @media(max-width:800px){
        margin: 20px auto;
        width: inherit;
    }
    .hidden {
        display: none;
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
   @media(max-width:1024px){
       max-width: 549px;
   }
   @media(max-width:500px){
     max-width: 355px;
     padding: 20px;
   }
`

export const PoleBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 25px 0;
    width: 100%;
    max-width: 790px;
    &.ogra {
        max-width: 600px;
    }
    &.min{
        max-width: 300px;
    }
    div {
        max-width: 393px;;
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
    .prise {
        background: #F1F1F1;
        font-weight: 600;
        border-radius: 15px;
        min-height: 50px;
        display: flex;
        align-items: center;
        min-width: 130px;
        justify-content: center;
        @media(max-width:500px){
            margin: 30px 0;
            width: 100%;
        }
}
    .prise-block {
        width: 100%;
        max-width: 597px;
        display: flex;
        align-items: center;
        justify-content: space-between; 
        @media(max-width:500px){
            flex-wrap: wrap;
        }
    }
`

export const InfoBlock = styled.div`
    max-width: 380px;
    padding: 40px;
    background: #FBFBFB;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    margin: 0 0 30px 0;
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
        max-width: 415px;
    }
    @media(max-width:800px){
        width: 100%;
        max-width: 650px;
    }
    @media(max-width:500px){
        max-width: 350px;
        margin: 22px auto;
    }
    &.priseBlock {
        span {
        padding: 10px 0;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.03em;
        color: #F6A729;
        opacity: 0.6
        }
        h4 {
            font-weight: 700;
            font-size: 24px;
        padding: 10px 0;

            line-height: 29px;
            letter-spacing: 0.03em;
            color: #242424;
        }
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
    }
`


export const StepBlock = styled.div`
    width: 100%;
    /* max-width: 893px; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between  ;
    flex-wrap: wrap;
`
export const Step = styled.div`
    width: 278px;
    padding: 20px 50px;
    background: #FBFBFB;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    min-height: 146px;
    margin: 40px 0;
    @media(max-width:500px){
        margin: 5px auto;
    }
    h4 {
        font-weight: 700;
        text-align: center;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 20px;
        color: #F6A729;
    }
    p {
        font-weight: 700;
        text-align: center;
        font-size: 18px;
        line-height: 22px;
        color: #242424;
    }
 `
export const Range = styled.input.attrs({ type: 'range' })`
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: 0;
    height: 10px;
    border-radius: 40px;
    width: 430px;

    background: ${(props) =>
    `linear-gradient(to right, #ff9800 0%, #ff9800 ${props.value}%, #fff ${props.value}%, #fff 100%);`};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);

    ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    /* background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%); */
    background: #F6A729;
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
    }

    ::-moz-range-thumb {
    width: 180px;
    height: 10px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
    }
`;
export const Option = styled.select`
    padding: 16px 30px;
    outline: none;
    border: none;
    background: #F1F1F1;
    border-radius: 15px;
    width: 100%;
    max-width: 709px ;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.03em;
    color: #242424;
    margin: 0 0 35px 0;

`
export const BlockCalc = styled.div`
    width: 100%;
    max-width: 379px;
`
export const Sale = styled.input`
    outline: none;
    border: none;
    margin: 0 0 30px 0;
    width: 100%;
    background: #F1F1F1;
    border-radius: 15px;
    padding: 16px 30px;
`
export const NewInput = styled.label`
        p {
            font-size: 18px;
            line-height: 22px;
            color: #242424;
            margin: 0  0 12px 0; 
        }
    
    input {
        background: #F1F1F1;
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
        border-radius: 15px;
        padding: 13px 30px;
        outline: none;
        border: none;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #242424;
        margin-bottom: 50px;
        width: 100%;
        max-width: 330px;
        border: 1px solid transparent;
        opacity: 0.6;
        &:active {
            border: 1px solid #F6A729;
        }
        @media(max-width:1024px) {
            max-width: 270px;
        }
    }
        

`
export const AddPersonB = styled.h6`
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.03em;
    cursor: pointer;
    color: #F6A729;
    margin: 0 0 40px 0;
    &:hover{
    text-decoration-line: underline;

    }
`
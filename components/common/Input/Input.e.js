import styled from 'styled-components'

export const NewInput = styled.label`
        p {
            font-size: 18px;
            line-height: 22px;
            color: #242424;
            margin: 0  0 12px 0; 
        }
        &.prise {
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
        min-width: 330px;
        border: 1px solid transparent;
        opacity: 0.6;
      
        &.w100 {
            width: 100%;
            max-width: 100%;
        }
        &.error {
        border: 1px solid red;

        }
        &:active {
            border: 1px solid #F6A729;
            
        }
        &:disabled {
            opacity: 0.5;
        }
        @media(max-width:1024px) {
            max-width: 270px;
            min-width: 316px
        }
        @media(max-width:500px){
            width: 100%;  
        }
        
    }
        

`
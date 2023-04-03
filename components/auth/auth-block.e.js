import styled from 'styled-components'

export const AuthBlock  = styled.div`
    min-height: 100vh;
    background: #E5E5E5;
`
export const SendMe = styled.h3`
    font-weight: 500;
    font-size: 18px;
    margin: 0 0 30px 0 ;
    line-height: 22px;
    cursor: pointer;
    padding: 30px 0;
    border-bottom: 1px solid #f4c479;
    color: #F6A729;
    &:hover {
        color: #242424;
    }
`
export const Content = styled.div`
    padding: 55px 0;
    width: 100%;
    max-width: 538px;
    
    margin: 0 auto;
    @media(max-width:800px){
    padding: 40px 0;

    }
    h2 {
    font-weight: 600;
    font-size: calc(16px + 6 * ((100vw - 200px) / 680));
    
    line-height: 43px;
    text-align: center;
    color: #242424;
   

    margin: 50px auto 50px auto;
    &.width {
        width: 100%;
        max-width:500px;
    }
    
    }

    p {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        margin: 30px auto 0 auto;
        width: 100%;
        /* max-width: 291px; */
        line-height: 150%;
        color: #242424;
        &.pointer {
            cursor:pointer;

        }
        &.info {
            padding:  0 0 40px 0;
            margin: 0 0 40px 0;
            border-bottom: 1px solid #f4c479;
        }
        &.minpad {
            margin: 10px auto 0 auto;

        }
        
    }
`
export const AuthInput = styled.input`
    width: 100%;
    max-width: 533px;
    background: #FBFBFB;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    padding: 14px 30px;
    border: none;
    outline: none;

    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #242424;
    margin: 0 10px 50px 10px;
    opacity: 0.6;
    &.no-margin {
    margin: 0 10px 0px 10px;

    }
    @media(max-width:500px){
        max-width: 396px;
    }
    @media(max-width:450px){
        max-width: 320px;
    }
`
export const ForgotPass = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    padding : 0 0 30px 0;
    text-align: center;
    color: #F6A729;
    cursor: pointer;
    opacity: 0.6;
    &:hover {
        opacity: 1;
    }
`

export const Enter = styled.button`
    background: #F6A729;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.1s all linear;
    width: 100%;
    max-width: 538px;
    font-weight: 700;
    padding: 11px 0;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #FBFBFB;

    &.min {
        margin: 10px 11px;
    }
    &:hover {
        background: #EAA840;
    }
    &:active {
        background: #C48015;

    }
    &:disabled{
        opacity: 0.5;
                &:hover {
                }
                &:active {
                        background-color: #F6A729;
                }
    }
    @media(max-width:500px){
        max-width: 396px;
    }
    @media(max-width:450px){
        max-width: 320px;
    }
    
`
export const RegestrB = styled.button`
    border: 1px solid #F6A729;
    box-sizing: border-box;
    background: transparent;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    padding: 11px 0px;
    width: 100%;
    max-width:538px ;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    margin: 30px 0;
    text-align: center;
    color: #242424;
    cursor: pointer;
    &:hover {
        background: #F6A729;
        color: #FBFBFB ;
    }
    &:active {
        background: #C48015;

    }
    @media(max-width:500px){
        max-width: 396px;
    }
    @media(max-width:450px){
        max-width: 320px;
    }
`
export const OneIdBtn = styled.button`
    max-width: 533px;
    min-width: 533px;
    background-color: transparent;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 3px solid #4825C1;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    font-weight: 400;
    padding: 11px 0;
    font-size: 25px;
    line-height: 30px;
    /* identical to box height */
    cursor: pointer;
    margin: 0 0 30px 0;

    color: #4825C1;
    &:hover {
        background: rgba(72, 37, 193, 0.65);
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
        border-radius: 15px;
        color: #fbfbfb;
        border: 3px solid #7F68CD;

    }
    &:active{
        background: rgba(72, 37, 193, 0.88);
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
        border-radius: 15px;
        border: 3px solid #5B3DC6;

    }

`
export const SendAgainBlock= styled.div`
    border-bottom: 1px solid #F6A729;
    margin: 0 0 30px 0;
    p {
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        color: #242424;
        margin: 0 0 30px 0;
    }
    h4 {
        font-weight: 500;
        font-size: 18px;
        padding: 0 0 30px 0;

        line-height: 22px;
        cursor: pointer;
        text-align: center;

        color: #F6A729;
    }
`
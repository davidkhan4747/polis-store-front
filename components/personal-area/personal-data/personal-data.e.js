import styled from 'styled-components'

export const TitleBlock = styled.div`
    text-align: center;
    padding: 50px 0;
`
export const Title = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    color: #242424;
`
export const GoPArea = styled.p`  
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #242424;
    padding: 0 0 50px 0;
    &:hover {
        color: #F6A729;;
    }
`
export const UserDataBlock = styled.div`
    width: 100%;
    padding: 50px;
    background: #FBFBFB;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    h2 {
        font-weight: 600;
        font-size: calc(16px + 10 * ((100vw - 320px) / 680));
        line-height: 43px;
        color: #242424;
        @media(max-width:500px){
            font-size: 18px;
        }
    }
    margin: 0 0 60px 0;
    @media(max-width:500px){
        padding: 30px;
    }
`
export const DataBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 50px 0 ;
    align-items: flex-end;
    @media(max-width:500px){
        justify-content: center;
    }
`
export const MyInput = styled.label`
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
        min-width: 330px;

        opacity: 0.6;
    }
        

`
export const Pasport = styled.select`
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
        opacity: 0.6;
        min-width: 330px;
        max-height: 50px;
        option {
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            color: #242424;
            opacity: 0.6;
        background: #F1F1F1;
        padding: 13px 30px;


        }
`

export const PageButton = styled.button`
    border: none;
    border-radius: 15px;
    background: #F6A729;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    padding: 12px 103px;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #FBFBFB;
    text-align: center;
    cursor: pointer;
    margin: 0 0 50px 0;
    &:hover {
        background: #EAA840;
    }
    &:active{
        background: #C48015;
    }
    &:disabled {
        opacity: 0.5;
    }
    @media(max-width:500px){
        font-size: 16px;
    }
`
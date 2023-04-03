import styled from 'styled-components'

export const MainBody = styled.div`
    background-color:  #f1f1f1;
    padding: 50px 0 150px 0;


`
export const MainTitle = styled.h1` 
    font-weight: 600;
    font-size: calc(16px + 15 * ((100vw - 320px) / 680)) ;
    text-align: center;
    color: #242424;
`
export const MainDes = styled.p`
    font-weight: 500;
    font-size: calc(16px + 8* ((100vw - 320px) / 680));
    text-align: center;
    color: #242424;
    padding: calc(16px + 10* ((100vw - 320px) / 680)) 0 ;

`
export const AreaMenu = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media(max-width:800px){
        justify-content: space-evenly;
}
`
export const MenuItem = styled.div`
    width: 216px;
    background: #FBFBFB;
    text-align: center;
    padding: 27px 9px 20px 9px;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    margin: 0 0 30px ;
        h2 {
            font-weight: 500;
            font-size: 24px;
            text-align: center;
            color: #242424;
            }
        p {
            font-weight: 500;
            font-size: 14px;
            text-align: left;
            line-height: 150%;
            color: #242424;
            padding: 36px 0 0 0;
        }
`
export const MenuBtn = styled.button`
    border: none;
    outline: none;
    padding: 10px 65px;
    background: #F6A729;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    color: #FBFBFB;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    margin: 36px 0 0 0;
    text-align: center;
    &:hover {
        background: #EAA840;
    }   
    &:active {
        background: #C48015;
    }
`
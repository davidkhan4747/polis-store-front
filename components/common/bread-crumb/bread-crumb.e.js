import styled from 'styled-components'

export const BreadCrumbs = styled.div`
    /* margin: 50px 0 0 0; */
    position: absolute;
    z-index: 100;
    top: 50px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.03em;
    color: #242424;
    opacity: 0.6;
    div {
        display: flex;
        align-items: center;
    }
    p {
       &.white{
        color:  #FBFBFB; 
        opacity: 1;
        font-weight: 600;   

       } 
    }
    p:hover {
        color: #F6A729;
        opacity: 1;
    }
    @media(max-width:500px){
        display: none;
    }
`
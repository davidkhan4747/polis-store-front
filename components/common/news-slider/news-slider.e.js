import styled from 'styled-components'

export const NSlider = styled.div`
    padding: 0 0 88px 0;
`
export const NewsSlide  = styled.div`
    width: 100%;
    max-width: 380px;
    background: #FBFBFB;
    overflow: hidden;
    border-radius: 20px;
    margin: 0 0 32px 0;
     p {
        font-weight: 600;
        font-size: 17px;
        line-height: 150%;
        color: #242424;
        padding: 15px 20px;
     }
     img {
         width: 100%;   
     }
     &:hover {
        p {
            color:  #F6A729;
        }
        box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.15);
     }
`
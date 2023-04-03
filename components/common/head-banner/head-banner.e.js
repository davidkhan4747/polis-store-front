import styled from 'styled-components'


export const BodyBanner = styled.div`
    width: 100% ;
    position: relative;
    display: block;

`
export const BannerContent = styled.div`
  z-index: 2;
    position: absolute;
    top: 0;
    h2 {
        font-style: italic;
        font-weight: 700;
        color: #FBFBFB;
        /* padding-top:calc(16px + 40 * ((100vw - 320px) / 680)); */
        padding-top: 100px;

        font-size:calc(16px + 20 * ((100vw - 320px) / 680));
        max-width: 1203px;
        @media(max-width:500px){
            padding-top: 30px ;
        }
    }
    p {
        font-weight: 500;
        font-size: calc(16px + 4 * ((100vw - 320px) / 680));
        color: #FBFBFB;
        max-width: 497px;
        margin: calc(16px + 20* ((100vw - 320px) / 680)) 0 calc(16px + 35 * ((100vw - 320px) / 680)) 0;
        line-height: 150%;
            max-width: 846px;
            @media(max-width:500px){
                line-height: 100%;
            }
    }
`
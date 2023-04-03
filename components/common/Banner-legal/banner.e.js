import styled from 'styled-components'

export const BannerBody = styled.div`
    position: relative;
    display: block;
`
export const SliderImg = styled.div`
  width: 100%;
  top: 0;
  max-height: 500px;
  .img {
      object-fit: cover;
      z-index: 1;
      width: 100%;
      @media(max-width:1024px){
          height: 500px !important;
      }
      @media(max-width:500px){
          height: 250px !important;
      }
  }
 
`;
export const BannerContent = styled.div`
    z-index: 2;
    position: absolute;
    top: 0;
    h2 {
        font-style: italic;
        font-weight: 700;
        color: #FBFBFB;
        margin-top:calc(16px + 10 * ((100vw - 320px) / 680));

        font-size:calc(16px + 20 * ((100vw - 320px) / 680));
        
    }
    p {
        font-weight: 500;
        font-size: calc(16px + 4 * ((100vw - 320px) / 680));
        color: #FBFBFB;
        max-width: 797px;
        margin: calc(16px + 20* ((100vw - 320px) / 680)) 0 calc(16px + 35 * ((100vw - 320px) / 680)) 0;
        line-height: 150%;

    }
`
export const ButtonB = styled.button`
    border: none;
    padding: calc(8px + 4* ((100vw - 320px) / 680))  calc(20px + 10* ((100vw - 320px) / 680))  ;
    cursor: pointer;
    background: #FFBE56;
    border-radius: 10px;
    font-weight: 500;
    font-size:  calc(4px + 8* ((100vw - 320px) / 680));
    color: #FBFBFB;
    transition: 0.1s all linear;
    &:hover{
        background-color: #EAA840;;
    }
    &:active {

        background: #C48015;;
    }
`
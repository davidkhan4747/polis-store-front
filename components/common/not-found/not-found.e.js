import styled , { keyframes } from 'styled-components'

export const ErrorBlock = styled.div`
    height: 100vh;
    background: #FBFBFB;
    overflow: hidden;
`
export const ErrorHigh  = styled.div`
    background: #E5E5E5;
    position: relative;
`
export const ErrorLow =  styled.div`
    background: #FBFBFB;
`
export const ErrorTitle = styled.h1`
    font-weight: 700;
    font-size: calc(16px + 50 * ((100vw - 320px) / 680));
    line-height: 150%;
    margin: -500px 0 0 0;
    text-align: center;
    z-index: 20;
    color: #F6A729;
    @media(max-width : 1024px){
        margin: 0px 0 0 0;
        padding: 200px 0 0 0;
    }   

    @media(max-width : 500px){
        font-weight: 700;
        font-size: 55px;
    margin: 0px 0 0 0;
    padding: 97px 0 0 0;

    }
`
export const ErrorMessage = styled.p`
    font-weight: 700;
    font-size:calc(16px + 17 * ((100vw - 320px) / 680));
    line-height: 150%;
    text-align: center;
    padding: 0 0 139px 0;
    color: #242424;
    z-index: 2;
    
    @media(max-width : 500px){
        padding: 50px 0 139px 0;
        font-weight: 700;
        font-size: 24px;
    }

`
export const Blick = styled.div`
    content: '';
    display: block;
    position: absolute;
    border-radius: 51% 49% 100% 0% / 100% 100% 0% 0%;
    width: 100%;
    max-width: 240px;
    height: 547px;
    background: #FBFBFB;
    opacity: 0.4;
    top: 110px;
    left: 42.4%;
    box-shadow: inset 0px 4px 4px rgb(0 0 0 / 25%);
`
export const ButtonBLock = styled.div`
    width: 100%;
    text-align: center;
    margin: calc(16px + 50 * ((100vw - 320px) / 680)) auto;
`
export const ButtonMain = styled.button`
    border: none;
    background: #F6A729;
    border-radius: 87px;
    font-weight: 700;
    font-size: calc(16px + 10 * ((100vw - 320px) / 680)) ;
    line-height: 150%;
    text-align: center;
    color: #FBFBFB;
    padding: calc(16px + 10 * ((100vw - 320px) / 680))  calc(16px + 35 * ((100vw - 320px) / 680));
    outline: none;
    cursor: pointer;
    &:hover {
        background: #EAA840;
    }
    &:active{
        background: #C48015;
    }
    
`
export const BigLampa =  styled.div`
    position: absolute;
    top: 367px;
    @media(max-width:1200px){
        display: none;
    }
`
const Lamp = keyframes`
  0% {
      opacity: 1;
  }
  10% {
      opacity: 0;
  }
  20% {
      opacity: 1;
  }
  30% {
      opacity: 0;
  }
  40% {
      opacity: 0;
  }
  50% {
      opacity: 0;
  }
  60% {
    opacity: 0;
  }
  70% {
      opacity: 0;
  }
  80% {
      opacity: 0;
  }
  90% {
      opacity: 0;
  }
  100% {
      opacity: 0;
  }
`;
export const Lampochka = styled.div`
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    .test {
        animation: ${Lamp} 1.5s linear infinite;
    }
        @media(max-width:1024px){
            display: none;
}
`

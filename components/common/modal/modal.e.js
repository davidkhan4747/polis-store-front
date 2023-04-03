import styled from "styled-components";
import { TextField , FormControl} from "@mui/material";

 
export const Parent = styled.section `
  
  .modal {
    height: 100vh;
    width: 100vw;
    /* Окно на весь экран и прорачное черное*/
    background-color: rgba(0, 0, 0, 0.4);
    /* чтобы оно оставалось всегда на месте - фиксируем */
    position: fixed ;
    left: 0; right: 0;
    top: 0; bottom: 0;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    transform: scale(0);
	  z-index: 100;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .modal.active {
    transform: scale(1);
	  z-index: 300;
  }
  .modal__content {
    /* padding: 20px; */
    border-radius: 12px;
    /* background-color: rgb(179, 37, 37); */
    background: transparent;
    z-index: 100;

  }
  
  .center {
	  align-items: center;
  }


.no-margin {
	margin: 0;
}
.border-bottom {
    border-bottom: 2px solid #000;
	  padding-bottom:10px;
}

@media(max-width:1500px){
	.app_hh {
		display:none
    }
  }
  .adven {
    margin:  0 0 -47px  0 ;
  }
  .home-heroe__Wrapper-sc-17ombvu-5  {
    margin-bottom:100px
  }
`
export const ModalB = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: 1000;
    position: fixed ;


  `
  export const PoUp = styled.div`
    max-width: 560px;
    width: 100%;
    background: #FBFBFB;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    box-sizing: content-box;
    margin:340px auto 0 auto;
    padding:40px 30px ;
    @media(max-width:500px){
      max-width:300px;
      margin:0 auto;
      border:none;
    }
    .harast {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;

      color: #000000;
      @media(max-width:500px){
      font-size:18px;
      margin: 35px 0 15px 0 ;
  }
    }
    
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;
      color: #EC4D19;
    }
  `

export const Ix = styled.p`
  cursor: pointer;
  font-size:24px;
  font-weight:bold;
  position:absolute;
  top: 110px;
  right: 217px;

  @media(max-widtH:500px){
    right: 30px;
    bottom: 30px;
  }
   
  `
export const Item = styled.div`
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    text-align: center;
  }
  div {
    display: flex;
    margin: 30px 0;
    justify-content: space-between;
  }
  
`
import { createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@200;300;400;600;700;800&display=swap'); */
html,
body {
  padding: 0;
  margin: 0;
  background-color: #f1f1f1;
  font-family: 'Exo 2', sans-serif;
  scroll-behavior: smooth;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: 0.3s all ease-in;
  color: #242424;

}
a {
  color: inherit;
  text-decoration: none;
}
img {
  -webkit-touch-callout: none; 
	-webkit-user-select: none;   
	-khtml-user-select: none;    
	-moz-user-select: none;     
	-ms-user-select: none;       
	user-select: none;   
}

.block-title {
  font-weight: 700;
  font-size: calc(16px + 10 * ((100vw - 320px) / 680));
  line-height: 43px;
  color: #242424;
  padding: 50px 0;
  @media(max-width:500px){
  padding: 30px 0;
    
  }
  &::before {
    content: '';
    padding: 0 4px;
    margin: 0 10px 0 0;
    border: 1px solid #F6A729 ;
    border-radius: 8px;
    background-color: #F6A729;
  }
}
  .back {
    background: #f1f1f1;
  }
  .relative {
  text-align: center;
  } 
  .khan {
    color: #E5E5E5;
    margin: 10px 0;
    display: none;
  }
  .w100 {
    width: 100%;
  }
  .error {
    color: #F6A729;;
    margin: 0 ;
  }
  .errorI {
    border: 1px solid red !important;
  }
  .center {
    text-align: center;
  }
  .Gcenter {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  /* mpdal */
  .flex {
    display: flex;
    align-items: center;
  }
  .flex122 {
    display: flex;
    justify-content: space-between;
    @media(max-width:500px){
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  .input {
    border: none;
    border-radius: 15px;
    max-width: 150px;
    background-color: #242424;
    color: #E5E5E5;
    padding:15px;
  }
  .balls {
  width: 4em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}


.balls div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fc2f70;
}

.balls div:nth-of-type(1) {
  transform: translateX(-100%);
  animation: left-swing 0.5s ease-in alternate infinite;
}

.balls div:nth-of-type(3) {
  transform: translateX(-95%);
  animation: right-swing 0.5s ease-out alternate infinite;
}
.cicrcleN {
  padding: 10px 15px;
  border-radius: 50%;
  background-color: #fff;
  display: inline;
}
@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}.balls {
  width: 4em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.balls div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color:  #f6a729;
}

.balls div:nth-of-type(1) {
  transform: translateX(-100%);
  animation: left-swing 0.5s ease-in alternate infinite;
}

.balls div:nth-of-type(3) {
  transform: translateX(-95%);
  animation: right-swing 0.5s ease-out alternate infinite;
}

@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}
.loader {
  div {
  width: 2.5em;
  height: 3em;
  border: 3px solid transparent;
  border-top-color: #f6a729;
  border-bottom-color: #f6a729;
  border-radius: 50%;
  animation: spin-stretch 2s ease infinite;
}

@keyframes spin-stretch {
  50% {
    transform: rotate(360deg) scale(0.4, 0.33);
    border-width: 8px;
  }
  100% {
    transform: rotate(720deg) scale(1, 1);
    border-width: 3px;
  }
}
}
.loader-two {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  -webkit-transform: translate3d(-50%, -50%, 0);
          transform: translate3d(-50%, -50%, 0);
}
.loader__square {
  height: 125px;
  width: 125px;
  background-color:#eca43329;
  -webkit-animation: loader 3.5s ease-in-out alternate infinite;
          animation: loader 3.5s ease-in-out alternate infinite;
}
.loader-label {
  font-size: 13.88888889px;
  font-family: 'Exo 2', sans-serif;
  color: #242424;
  font-weight: 800;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  -webkit-transform: translate3d(-50%, -50%, 0);
          transform: translate3d(-50%, -50%, 0);
  -webkit-animation: loader-text 3.5s ease-in-out alternate infinite;
          animation: loader-text 3.5s ease-in-out alternate infinite;
}
@-webkit-keyframes loader {
  10% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
    border-radius: 50%;
    background-color: #00796B;
  }
  98% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes loader {
  10% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
    border-radius: 50%;
    background-color:#F6A729;
  }
  98% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes loader-text {
  25% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
    color: #fff;
  }
}
@keyframes loader-text {
  25% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
    color: #fff;
  }
}
.body {
  background-color: #24242433;
  width: 100%;
  height: 100vh;
}
.m330 {
  min-width: 330px;
}
.heightB {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  background-color: #f1f1f1;
}
.none {
  display: none;
}
.flex_not {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  width: 100%;
}
.logout {
  background-color: #c60c23;
  &:hover {
  background-color: #7e0a18;

  }
}
`
 


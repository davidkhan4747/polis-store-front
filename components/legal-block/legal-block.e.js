import styled from 'styled-components'

export const StepBlock = styled.div`
    width: 100%;
    max-width: 893px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between  ;
    flex-wrap: wrap;
`
export const Step = styled.div`
    width: 278px;
    padding: 20px 50px;
    background: #FBFBFB;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    min-height: 146px;
    margin: 40px 0;
    @media(max-width:500px){
        margin: 30px auto;
    }
    h4 {
        font-weight: 700;
        text-align: center;
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 20px;
        color: #F6A729;
    }
    p {
        font-weight: 700;
        text-align: center;
        font-size: 18px;
        line-height: 22px;
        color: #242424;
    }
 `

 export const FormBlock = styled.div`
    width: 100%;
    max-width: 1200px;
    margin:  0 auto;
    padding: 40px;
    background: #FBFBFB;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.03em;
        color: #242424;
        margin-bottom: 40px;
    }
    div {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
 `
 
export const NewInput = styled.label`
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
width: 540px;
border: 1px solid transparent;
opacity: 0.6;
&.w100 {
    width: 100%;
}
&:active {
    border: 1px solid #F6A729;
}
@media(max-width:1024px) {
    max-width: 270px;
}
}
`
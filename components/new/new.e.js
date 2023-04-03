import styled from 'styled-components'

export const NewBody = styled.div`
    padding: 62px 0 0 0;
    @media(max-width:500px ){
        padding: 0;
    }
`
export const ImgBlock  = styled.div`
    width: 100%;
    margin: 0 0 30px 0;
    overflow: hidden;
    border-radius: 20px;
    max-width: 1199px;
    background-image:  ${(props) => `url(${props.imgUrl})`};
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;

`
export const NewTextB = styled.div`
    padding: 26px 30px ;
    background: #FBFBFB;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 150%;
        color: #242424;
        margin:  0 0 40px 0;
    }
    p {
        font-weight: 500;
        font-size: 18px;
        line-height: 150%;
        color: #242424;
        margin: 0 0 30px 0;

    }
`
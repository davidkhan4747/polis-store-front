import styled from "styled-components";

export const FooterBlock = styled.footer`
    background: #2C2C2C;
    border-bottom: 2px  solid #F6A729; ;

`
export const FooterHigh = styled.div`
    padding: 33px 0 38px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    .w100 {
     width: 100%;
     max-width: 526px;
  }
  .toptop {
    background-color: #2C2C2C;;
    width: 60px;
    border: none;
    @media(max-width:500px){
        margin: 15px 0;
    }
  }
`
export const FooterLow = styled.div`
    padding: 38px 0 62px 0;
    background: #2C2C2C;
    p {
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        color: #FFFFFF;
    }
`
export const Logo = styled.div`
  display: flex;
    align-items: center;

    p {
        font-size: 16px;
        font-weight: 600;
        padding: 0 5px;
        color: #FBFBFB;
    }

`
export const CompanyBlock = styled.div`
    @media(max-width:1024px){
        padding: 30px 0;
    }
    p {
        font-weight: 500;
        font-size: 12px;
        line-height: 150%;
        color: #F1F1F1;
        padding: 13px 0;

    }
    h3 {
        font-weight: 700;
        color: #F1F1F1;
        font-size: 12px;
    }
`
export const FooterNav = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    max-width: 526px;
`
export const FNavbar = styled.div`
    max-width: 162px;
    h2 {
        font-weight: 700;
        font-size: 12px;
        line-height: 150%;
        text-decoration-line: underline;
        color: #F6A729;
        margin: 0 0 13px 0;
        &:hover{
            color: #F1F1F1;
        }

    }
    p {
        font-weight: 500;
        margin:  0 0 13px 0;
        font-size: 12px;
        color: #F1F1F1;
        &:hover {
            color: #F6A729;
        }
    }
`
export const PushUp = styled.div`
    width: 63px;
    cursor: pointer;
    text-align: center;
    &:hover {
        .animation-down {
            transform:translateY(10px);
    }
    .animation-up {
            transform:translateY(-10px);
    }
    }
    

`
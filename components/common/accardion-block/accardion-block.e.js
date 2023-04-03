import styled from "styled-components";

export const Accardion = styled.div`
    width: 100%;
    background: #FBFBFB;
    user-select: none;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
    transition: 1s all ease-in-out;
    border-radius: 20px;
    padding: 30px 35px;
    cursor: pointer;
    margin: 0 0 15px 0;
    max-height: ${props => props.height};
    overflow: hidden;
    @media(max-width:500px){
        padding: 20px;
    max-height: ${props => props.heightmob};

    }
    .flex {
        display: flex;
        justify-content: space-between;
    }
    

    h2 {
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        color: #242424;
        @media(max-width:500px){
            font-size: 18px;
        }
    }
   
    .content {
        padding:  30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media(max-width:800px){
            flex-wrap: wrap;
        }
        @media(max-width:500px){
            padding:  10px 0 0 0;

        }
        .answer {
            h3 {
            font-weight: 700;
            font-size: 36px;
            color: #242424;
            margin: 0 0 30px 0;
            @media(max-width:500px){
                font-size: 22px;
            }

        }
            h4 {
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
                color: #242424;
                padding: 0 0 20px 0;
                @media(max-width:1024px){
                padding: 0 0 15px 0;

                }
            }
            p {
                font-weight: 600;
                font-size: 18px;
                line-height: 150%;
                color: #242424;
                opacity: 0.6;
                padding: 0 0 40px 0;
                @media(max-width:1024px){
                padding: 0 0 30px 0;

                }
            }
            max-width: 503px;
            button {
                font-size: 18px;
                line-height: 22px;
                letter-spacing: 0.03em;
                color: #FBFBFB;
                padding: 14px 50px;
                background: #F6A729;
                border: none;
                margin: 0 0 60px 0;
                cursor: pointer;
                border-radius: 15px;
                &:hover {
                    background-color: #EAA840;;
                }
                &:active {
                    background: #C48015;
                }
            }

        }
        .imgblokc {
            img {
                @media(max-width:1024px){
                max-width: 355px;
            }   
            @media(max-width:500px){
                max-width: 320px;
            }   
            }
            
        }
        
    }

`
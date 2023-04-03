import styled from 'styled-components'

export const Header = styled.header`
    color: #242424;
    background-color: #FBFBFB;
    /* padding: 0 20px; */
    @media(max-width:1024px){
        display: none;
    }

`

export const Hat = styled.nav`
    border-bottom:1px solid rgba(216, 216, 216, 0.5);

` 
export const Navhat = styled.header`
    display: flex;
    justify-content: space-between;
`
export const  Faceds = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width:548px;

    h2 {
        font-weight: 600;
        padding: 15px 0;
        font-size: 16px;
        cursor: pointer;
        letter-spacing: -0.035em;
        border-bottom: 5px solid transparent;
        border-radius: 5px;
        &:hover{
            border-bottom: 5px solid  #F6A729;

        }
        &.active ,  &.legal {
            border-bottom: 5px solid  #F6A729;
        }
        
    }

`
export const Contact = styled.div`
    padding: 15px 0;

    p {
        font-weight: 600;
        span {
        font-weight: 400;
    }
    }
    
`
export const Location = styled.div`
    align-items: center;
    
    display: flex;
    justify-content: space-between;
    width:100%;
    max-width: 81px;
    cursor: pointer;
    z-index: 33;
    border-bottom: 5px solid transparent;
    border-radius: 5px;
    &.disablet {
        opacity: 0.5;
        cursor: no-drop;
        pointer-events: none;
        }
    &:hover{
        border-bottom: 5px solid  #F6A729;
    }
    p{
        font-weight: 600;
        font-size: 12px;
    }
    &.table {
        padding: 27px 0;
    }
    a {
        z-index: 23;
    }
    
    &.userk {
        border-bottom: 5px solid  #F6A729;
    }
    &.langs {
        align-items: center;
    
    display: flex;
    justify-content: space-between;
    }
    
`
export const MaiNav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    
`
export const Logo = styled.div`
    display: flex;
    align-items: center;

    p {
        font-size: 16px;
        font-weight: 600;
        padding: 0 5px;
    }
    @media(max-width:500px){
        display: none;
    }
`
export const MainBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 566px;

    p {
        font-weight: 600;
        font-size: 16px;
        padding: 29px 0 32px 0;
        border-bottom: 5px solid transparent;
        border-radius: 5px;
        
        cursor: pointer;
        &:hover {
            border-bottom: 5px solid #F6A729;
        }
        &.active {
            border-bottom: 5px solid #F6A729;
        }
        &.renewal , &.chack {
            border-bottom: 5px solid #F6A729;
        }
        &.disablet {
            opacity: 0.5;
            cursor: no-drop;
            pointer-events: none;
            &:hover {
            border-bottom: 0px solid #F6A729;
            
            }
        }
    }


`
export const Lang = styled.p` 
         font-weight: 600;
        font-size: 16px;
        border-bottom: 5px solid transparent;
        border-radius: 5px;
        &.active {
            color: #F6A729;
        }
`
// TABLET AND MOBILE HEADER 

export const MobHeader  = styled.header`
    background: #FBFBFB;
    /* padding: 0 20px; */
    display: none;
    @media(max-width:1024px){
        display: block;
    }
`
export const MobNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
export const Burger = styled.div`
    h1,
    div,
    .boo {
            position: relative;
            float: left;
            width: calc(100% - 20px);
            text-align: center;
            margin: 20px 0 0 0;
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            color: #333;
    }

    html,
    body {
            width: 100%;
            height: 100%;
            overflow-x: hidden;
            margin-top: 0;
            margin-bottom: 0;
    }

    /*--------------------------------------
    Animation Magic, animations won't occur
    on IE9 and before and Opera Mini
    --------------------------------------*/
    *,
    *:before,
    *:after {
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
            box-sizing: border-box;
    }

    /*==============================================================================
    The burger icon with it's animation. Uses the checked property of a checkbox
    in order to make the animation happen as well as control the next elements
    I've used classes because of the + css selector, which will only ever animate
    the next label element. Does not work on IE8 or below and opera mini since
    they don't support the :checked selector.
    ==============================================================================*/
    .burger-check {
            display: none;
    }

    /*--------------------------------------
    Sets the actionable area for the burger
    including a label for usability
    --------------------------------------*/
    .burger {
            position: relative;
            float: left;
            width: 60px;
            height: 60px;
            cursor: pointer;
    }

    .burger:after {
            position: absolute;
            bottom: 7px;
            left: 0px;
            width: 100%;
            text-align: center;
            font-size: 13px;
    }

    /*--------------------------------------
    Creates the look of the burger icon
    using the inner span and pseudo-elements
    --------------------------------------*/
    
    .burger span,
    .burger span:before,
    .burger span:after {
            position: absolute;
            left: 0px;
            top: 22px;
            width: 40px;
            height: 4px;
            background: #333;
            border-radius: 0.2em;
    }
    .burger span:before {
        width: 35px;
    }
    .burger span:after{
        width: 15px;
    }
    .burger span {
        width: 25px;
    }
    /* Reset the left and create the pseudo-element */
    .burger span:before,
    .burger span:after {
            content: '';
            left: 0;
    }

    /* Top bar position */
    .burger span:before {
            top: -8px;
    }

    /* Bottom bar position */
    .burger span:after {
            top: 8px;
    }

    /* Get rid of more on action (IE9 or higher) */
    .burger-check:checked + .burger:after {
            width: 37px;
            content: '';
    }
    /* Get rid of the middle bar on action (IE9 or higher) */

    .burger-check:checked + .burger span {
            height: 0;
            width: 0;
                
    }

    /* Moves the top and bottom bars to the middle on action (IE9 or higher) */
    .burger-check:checked + .burger span:before,
    .burger-check:checked + .burger span:after {
        width: 37px;

            top: 6px;
    }

    /* Rotates the top bar on action with full browser support (IE9 or higher) */
    .burger-check:checked + .burger span:before {
            -webkit-transform: rotate(225deg);
            -ms-transform: rotate(225deg);
            transform: rotate(225deg);
    }

    /* Rotates the bottom bar on action with full browser support (IE9 or higher) */
    .burger-check:checked + .burger span:after {
            -webkit-transform: rotate(-225deg);
            -ms-transform: rotate(225deg);
            transform: rotate(-225deg);
    }

    /*==============================================================================
    Simple reveal (IE9 or higher)
    ==============================================================================*/
    span.boo {
            width: auto;
            margin-top: 0;
            line-height: 60px;
            height: 0;
            overflow: hidden;
    }

    /* Reveals Boo! (IE9 or higher) */
    #main-nav-test:checked ~ .boo {
            height: 50px;
    }

    /*==============================================================================
    Simple mobile menu opening and closing (IE9 or higher)
    ==============================================================================*/
    .a-header {
        
            position: absolute  ;
            float: left;
            width: 100%;
            left: 0;
            top: 1%;
            margin: 0;
            padding-left:7px;
            min-height: 50px;
            overflow: hidden;
    }
    
    .a-header ul {
            background: #FBFBFB;
            border-radius: 0px 0px 20px 20px;
            position: relative;
            float: left;
            width: 100%;
            list-style: none;
            margin: 0;
            z-index: 5;
            padding: 0;
            
    }

    .a-header ul a {
            position: relative;
            float: left;
            width: 100%;
            height: 0;
            line-height: 50px;
            padding: 0 15px;
            text-decoration: none;
            overflow: hidden;
            color: #333;
            text-align: left;
    }
    .navik {
        font-weight: 500;
        font-size: 25px;
        line-height: 43px;
        @media(max-width:800px){
            font-size: 20px;


            }
    }

    .a-header ul a:hover,
    .a-header ul a:active,
    .a-header ul a:focus,
    .a-header ul a:visited {
            text-decoration: none;
            background: #fff;
            border-bottom-color: #08c;
    }

    /* Animate height of 'a' element in order to reveal the menu on check (IE9 or higher) */
    #main-nav:checked ~ ul a {
            height: 60px;
            @media(max-width:800px){
                height: 40px;

            }
    }
`

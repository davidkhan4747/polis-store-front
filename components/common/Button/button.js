import styled from 'styled-components'

const Btn = styled.button`
    border: none;
    background: #F6A729;
    border-radius: 15px;
    padding: 14px 74px;

    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    cursor: pointer;
    letter-spacing: 0.03em;
    color: #FBFBFB;
    &:hover {
        background: #EAA840;
    }
    &:active {
        background: #C48015;
    }
    &:disabled {
        opacity: 0.6;
    }
`

const Button = (
    {
        title,
        func,
        disabled,
        type,
        onSubmit
    }
) => {
    return (
     <>
        <Btn type={type} disabled={disabled} onSubmit={onSubmit} onClick={func} >{title}</Btn>
     </>   
    )
}

export default Button
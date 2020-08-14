import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -90px;
`

export const InputContainer = styled.div`
    width: 300px;
    background-color: #FFF;
    height: 60px;
    border: 0px;
    border-radius: 30px;

    input {
        background: #FFF;
        border: 0px;
        width: 100%;
        height: 100%;
        border-radius: 60px;
        padding-left: 10px;
        box-shadow: 0px 0px 30px #000000aa;
    }
`

export const Label = styled.p`
    margin-left: 20px;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: bold;
`
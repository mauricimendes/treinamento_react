import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.div`
    background-color: ${props => props.typeColor === 'create' ? '#4EDB7E' : '#417EC7'};
    width: 300px;
    height: 60px;
    border: 0px;
    border-radius: 30px;
    margin-top: 40px;
    `

export const ButtonTitle = styled(Link)`
    font-size: 24px;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0px;
    border-radius: 30px;
`
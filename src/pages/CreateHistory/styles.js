import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
    background-color: #F3F3F3;
`

export const Header = styled.header`
    background-color: #417EC7;
    height: 250px;
    padding-top: 20px;
    padding-left: 70px;
    padding-right: 70px;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        div {
            flex-direction: row;
            justify-content: space-between;
        
            p {
                color: #FFF;
                font-family: 'Roboto', sans-serif;
                font-size: 36px;
                margin-left: 70px;
            }
        }

        a {
            color: #FFF;
            font-family: 'Roboto', sans-serif;
            font-size: 22px;
            text-decoration: underline;
        }
    }
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 180px;
    margin-right: 180px;
`

export const History = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 22px;
        color: #000747;
        font-family: 'Roboto', sans-serif;
    }

    textarea {
        border: 0px;
        border-radius: 60px;
        padding: 40px;
        font-family: 'Roboto', sans-serif;
    }
`

export const ContainerButton = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
    background-color: #F3F3F3;
`

export const Header = styled.header`
    background-color: #3AC168;
    height: 170px;
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

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 60px;
    padding-left: 180px;
    padding-right: 180px;
    align-items: center;

`

export const Button = styled.div`
    height: 100px;
    width: 450px;
    border: 0px;
    border-radius: 30px;
    background-color: #FFF;
    padding: 0px;
    margin-top: 20px;
    box-shadow: 0px 0px 30px #000000aa;
    
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        
        div {
            display: flex;
            flex-direction: column;

            button {
                font-family: 'Roboto', sans-serif;
                font-size: 16px;
                width: 380px;
                height: 100px;
                border: 0px;
                border-radius: 0px 30px 30px 0px;
                background-color: #FFF;
            }
        }
    }
`

export const Options = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #417EC7;
    border: 0px;
    border-radius: 30px 0px 0px 30px;
`

export const History = styled.div`
    width: 40%;
    height: 500px;
    margin-top: -300px;
    top: 570px;
    left: 50%;
    position: fixed;

    textarea {
        box-shadow: 0px 0px 30px #000000aa;
        resize: vertical;
        width: 90%;
        height: 80%;
        border: 0px;
        border-radius: 30px;
        padding: 40px;
    }

    div {
        margin-top: 10px;
        background-color: #417EC7;
        height: 60px;
        width: 100%;
        border-radius: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        p {
            color: #FFF;
            font-family: 'Roboto', sans-serif;
            font-size: 24px;
        }
    }
`
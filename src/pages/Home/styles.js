import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;

    img {
        width: 30%;
    }
`

export const Content = styled.div`
    padding: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 36px;
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    footer {
        bottom: 1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3 {
            font-family: 'Roboto', sans-serif;
            color: #878787;
        }

        h5 {            
            font-family: 'Roboto', sans-serif;
            color: #417EC7;
        }
    }
`
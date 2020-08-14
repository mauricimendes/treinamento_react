import React from 'react'

import ImgHome from '../../assets/home.png'
import Button from '../../components/Button'

import {
    Container,
    Content
} from './styles'

const Home = () => {
    return (
        <Container>
                <img src={ImgHome} />
                <Content>
                    <p>Ajude outras pessoas compartilhando sua história e inspire novas lições de vida</p>
                    <div>
                        <Button 
                            path='/create'
                            typeColor='create'
                            content='Crie sua história'
                        />
                        <Button 
                            path='/list'
                            typeColor='list'
                            content='Se inspire'
                        />
                    </div>
                    <footer>
                        <h3>
                            “nenhuma deficiência impede a vida”
                        </h3>
                        <h5>
                            Maria Lourdes Guarda
                        </h5>
                    </footer>
                </Content>
        </Container>
    )
}

export default Home
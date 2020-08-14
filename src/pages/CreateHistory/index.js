import React from 'react'

import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Container, Header, Inputs, History, ContainerButton } from './styles'

import Input from '../../components/Input'
import Button from '../../components/Button'

const CreateHistory = () => {
    return (
        <Container>
            <Header>
                <div>
                    <div>
                        <Link to='/'>
                            <FiArrowLeft color='#FFF' size={38} />
                        </Link>
                        <p>
                            Coloque seus <br/> dados e conte sua história
                        </p>
                    </div>
                
                    <Link to='list'>Ler outras histórias</Link>
                </div>
            </Header>
            <Inputs>
                <Input 
                    placeholder='seu nome'
                    label='Nome'
                    />
                <Input 
                    placeholder='seu celular'
                    label='Celular'
                    />
                <Input 
                    placeholder='seu e-mail'
                    label='E-mail'
                />
            </Inputs>
            <History>
                <p>Escreva aqui sua história</p>
                <textarea
                    cols='80'
                    rows='12'
                ></textarea>
            </History>
            <ContainerButton>
                <Button 
                    path='/list'
                    typeColor='create'
                    content='Salvar'
                />
            </ContainerButton>
        </Container>
    )
}

export default CreateHistory
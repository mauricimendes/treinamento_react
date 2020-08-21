import React, { useState, useCallback } from 'react'
import api from '../../services/api'

import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Container, Header, Inputs, History, ContainerButton, Button } from './styles'

import Input from '../../components/Input'

const CreateHistory = () => {

    const history = useHistory()

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        history: '',
    })

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    })

    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        const { name, phone, email, history } = formData

        const data = new FormData()

        data.append('name', name)
        data.append('phone', phone)
        data.append('email', email)
        data.append('history', history)

        console.log(data)

        api.post('/histories', data)
            .then(() => {
                navigateTo('/list')
            }
        )
    })

    const navigateTo = useCallback((path) => {
        history.push(path)
    })

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
            <form onSubmit={handleSubmit}>
                <Inputs>
                    <Input 
                        placeholder='seu nome'
                        label='Nome'
                        nameInput='name'
                        onChangeText={handleInputChange}
                    />
                    <Input 
                        placeholder='seu celular'
                        label='Celular'
                        nameInput='phone'
                        onChangeText={handleInputChange}
                    />
                    <Input 
                        placeholder='seu e-mail'
                        label='E-mail'
                        nameInput='email'
                        onChangeText={handleInputChange}
                    />
                </Inputs>
                <History>
                    <p>Escreva aqui sua história</p>
                    <textarea
                        cols='80'
                        rows='12'
                        name='history'
                        onChange={handleInputChange}
                    ></textarea>
                </History>
                <ContainerButton>
                    <Button
                        type='submit'
                    >
                        <p>Salvar</p>
                    </Button>
                </ContainerButton>
            </form>
        </Container>
    )
}

export default CreateHistory
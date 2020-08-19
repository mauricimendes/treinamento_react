import React, { useState, useCallback } from 'react'

import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Container, Header, Inputs, History, ContainerButton } from './styles'

import Input from '../../components/Input'

import api from '../../services/api'

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
        setFormData({ ...formData, [name]: value})
    })

    const handleSubmit = useCallback( async (e) => {
        e.preventDefault()

        const { name, phone, email, history } = formData

        const data = new FormData()

        data.append('name', name)
        data.append('phone', phone)
        data.append('email', email)
        data.append('history', history)

        await api.post('histories', data)

        handleNavigationToList('/list')
    
    })

    const handleNavigationToList = useCallback((route) => {
        history.push(route)
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
                        onChange={handleInputChange}
                        name='history'
                        cols='80'
                        rows='12'
                    ></textarea>
                </History>
                <ContainerButton>
                    <button type='submit'>
                        Salvar
                    </button>
                </ContainerButton>
            </form>
        </Container>
    )
}

export default CreateHistory
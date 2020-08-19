import React, { useState, useCallback, useEffect } from 'react'

import api from '../../services/api'

import { Link } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { IoLogoWhatsapp, IoIosMail } from 'react-icons/io'

import { Container, Header, Content, Button, Options, History } from './styles'

const ListHistories = () => {
    const [name, setName] = useState('')
    const [history, setHistory] = useState('')
    const [userHistories, setUserHistories] = useState([])

    const handleSelectHistoryUser = useCallback((user) => {
        setName(user.name)
        setHistory(user.history)
    })

    useEffect(() => {
        api.get('/histories').then(response => {
            if( !response ) {
                return
            }
            setUserHistories(response.data.data)
        })
    }, [])

    return (
        <Container>
            <Header>
                <div>
                    <div>
                        <Link to='/'>
                            <FiArrowLeft color='#FFF' size={38} />
                        </Link>
                        <p>
                            Leia uma história <br/> e se inspire...
                        </p>
                    </div>
                    <Link to='create'>contar minha história</Link>
                </div>
            </Header>
            <Content>
                <div>
                {userHistories.map(userHistory => (
                    <Button key={userHistory.id}>
                        <div>
                            <Options>
                                <a 
                                    href={`https://wa.me/55${userHistory.phone}`}
                                    target='_blank'
                                >
                                    <IoLogoWhatsapp
                                        color='#FFF'
                                        size={32}
                                    />
                                </a>
                                <a href={`mailto:${userHistory.email}`}>
                                    <IoIosMail
                                        color='#FFF'
                                        size={32}
                                    />
                                </a>
                            </Options>
                            <div>
                                <button
                                    type='button'
                                    onClick={() => handleSelectHistoryUser(userHistory)}
                                >
                                    Leia a história do <b>{userHistory.name}</b> e se inspire 
                                    <FiArrowRight />
                                </button>
                            </div>
                        </div>
                    </Button>
                ))}
                </div>
                <History>
                    <textarea
                        value={history}
                        readOnly={true}
                        // value
                    >
                        {history}
                    </textarea>
                    <div>
                        <p>{name ? name : 'selecione uma história'}</p>
                    </div>
                </History>
            </Content>
        </Container>
    )
}

export default ListHistories

const users = [
    { 
        id: 1,
        name: 'Maurici',
        phone: '47 997753823',
        email: 'mauricimendes.14@gmail.com',
        history: 'A musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia. Musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia,  musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia...'
    },
    { 
        id: 2,
        name: 'Marcos',
        phone: '47 997753823',
        email: 'mauricimendes.14@gmail.com',
        history: 'A musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia. Musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia,  musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia...'
    },
    { 
        id: 3,
        name: 'Fernanda',
        phone: '47 997753823',
        email: 'mauricimendes.14@gmail.com',
        history: 'A musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia. Musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia,  musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia...'
    },
    { 
        id: 4,
        name: 'Willian',
        phone: '47 997753823',
        email: 'mauricimendes.14@gmail.com',
        history: 'A musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia. Musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia,  musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia...'
    },
    { 
        id: 5,
        name: 'Lucas',
        phone: '47 997753823',
        email: 'mauricimendes.14@gmail.com',
        history: 'A musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia. Musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia,  musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia...'
    },
    { 
        id: 6,
        name: 'Andrey',
        phone: '47 997753823',
        email: 'mauricimendes.14@gmail.com',
        history: 'A musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia. Musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia,  musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia...'
    },
    { 
        id: 7,
        name: 'Sandro',
        phone: '47 997753823',
        email: 'mauricimendes.14@gmail.com',
        history: 'A musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia. Musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia,  musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia, musica foi minha forma de enxerguar que a vida podia ser vivida, e minha familia...'
    },
] 
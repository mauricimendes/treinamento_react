import React from 'react'

import { InputContainer, Label, Container } from './styles'

const Input = ({ placeholder, label }) => {
    return (
        <>
            <Container>
                <Label>
                    {label}
                </Label>
                <InputContainer>
                    <input placeholder={placeholder} />
                </InputContainer>
            </Container>
        </>
    )
}

export default Input
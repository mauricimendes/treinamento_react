import React from 'react'

import { InputContainer, Label, Container } from './styles'

const Input = ({ placeholder, label, nameInput, onChangeText }) => {
    return (
        <>
            <Container>
                <Label>
                    {label}
                </Label>
                <InputContainer>
                    <input 
                        placeholder={placeholder} 
                        name={nameInput}
                        onChange={onChangeText} 
                    />
                </InputContainer>
            </Container>
        </>
    )
}

export default Input
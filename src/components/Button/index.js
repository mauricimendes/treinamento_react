import React from 'react'

import { ButtonContainer, ButtonTitle } from './styles'

const Button = ({ typeColor, content, path, type }) => {
    return (
        <ButtonContainer
            typeColor={typeColor}
        >
            <ButtonTitle to={path}>
                <b>{content}</b>
            </ButtonTitle>
        </ButtonContainer>
    )
}

export default Button
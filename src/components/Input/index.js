import React from 'react'

import { InputContainer } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input value={value} placeholder = "Digite o repositório desejado" onChange={onChange}/>
    </InputContainer>
  )
}

export default Input

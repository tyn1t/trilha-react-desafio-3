import React from 'react'
import { Controller } from "react-hook-form";

import {InputContainer, InputText, IconContainer, ErrorText } from './styles';

const Input = ({leftIcon, name, control, ErroMessage, ...rest}) => {


  return (
    <>
      <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        render={({ field }) =>  <InputText {...field} {...rest} />}
      />
      </InputContainer>
      {ErroMessage ? <ErrorText>{ErroMessage}</ErrorText>: null}
    </>
  )
}

export { Input }; 

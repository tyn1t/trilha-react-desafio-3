import React from 'react';
import { useNavigate  } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock, MdAccountBox } from 'react-icons/md'

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from '../../services/api';

import { Container, Column, Title, TitleCadastro, Texto, SubTexto, FazerLogin, Wrapper, Row } 
from './styles';

const schema = yup.object({
  name: yup.string().min(7, 'O nome deve ter pelo menos 7 caracteres')
  .max(50, 'O nome não pode ter mais de 50 caracteres').required('Campo obrigatório'),
  email: yup.string().email('email não é valido').required('Campo obrigatório'),
  password: yup.string().min(6,'No minimo 6 caracteres').required('Campo obrigatório'),
});


const Cadastro =  () => {

  const navigate = useNavigate();
    
  const { control, handleSubmit, formState: { errors },} = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
    
    const onSubmit = async formData => {
      try {
       if(formData.name !== null  && formData.email !== null && formData.password !== null){
        const userData = {
              name: formData.name,
              email: formData.email,
              password: formData.password,
          } // Remember to never store passwords in plain text
        const response = await api.post('/users', userData);
        if(response.status){
          alert('Sucesso')
        }
        navigate('/login')
        };

      }catch (e){
        alert(e)
      }
      
  }
  
  return (
    <>
      <Header />
      <Container>
        <Column>
           <Title>
              A plataforma para você aprender com experts, dominar as principais tecnologias
              e entrar mais rápido nas empresas mais desejadas.
           </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleCadastro>Comece agora gratis</TitleCadastro>
            <SubTexto>Crie sua conta e make change._</SubTexto>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input placeholder="Nome completo" name="name" ErroMessage={errors?.name?.message} leftIcon={<MdAccountBox size={32} />} control={control} />
                <Input placeholder="E-mail" ErroMessage={errors?.email?.message}  leftIcon={<MdEmail size={31} />} name="email"  control={control} />
                <Input placeholder="Password" ErroMessage={errors?.password?.message}  leftIcon={<MdLock size={31} />} name="password"  control={control} />
                <Button title="Criar minha contra" variant="secondary" type="submit"/>
            </form>
            <Row>
              <Texto>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os T
               ermos de Uso da DIO.</Texto>           
            </Row>
            <Row>
              <SubTexto>Já tenho conta. <FazerLogin href="login">Fazer login</FazerLogin></SubTexto>
            </Row>
          </Wrapper>    
        </Column>
        
      </Container>
    </>
  )
}

export { Cadastro }

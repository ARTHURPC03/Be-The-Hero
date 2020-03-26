import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import { Container, SectionForm, Button, Form } from './styles'

import logoImg from '../../assets/logo1.svg'
import HeroesImg from '../../assets/heroes.png'

export default function Logon() {
  const [id, setId] = useState('')
  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('sessions', { id })

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)

      history.push('/profile')
    } catch (err) {
      alert('Falha no login, tente novamente')
    }
  }

  return (
    <Container>
      <SectionForm>
        <img src={logoImg} alt="Be The Hero" />

        <Form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Button type="submit">Entrar</Button>

          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </SectionForm>

      <img src={HeroesImg} alt="Heroes" />
    </Container>
  )
}

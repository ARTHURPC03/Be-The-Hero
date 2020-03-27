/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { Container } from './styles'

export default function Header({ toggleTheme }) {
  const { colors, title, logo } = useContext(ThemeContext)

  return (
    <Container>
      <img src={logo} alt="Be The Hero" width={90} />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.secundary}
        onColor={colors.text}
        offHandleColor={colors.secundary}
        onHandleColor={colors.text}
      />
    </Container>
  )
}

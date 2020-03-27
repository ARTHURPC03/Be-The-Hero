import React from 'react'
import { ThemeProvider } from 'styled-components'
import usePersistedState from './utils/usePersistedState'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import Routes from './routes'
import GlobalStyle from './styles/global'
import Header from './components/Header'

function App() {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Routes />
    </ThemeProvider>
  )
}

export default App

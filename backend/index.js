const express = require('express')

const app = express()

app.get('/',(request, response) => {
  return response.json({
    evento: 'Semana Omnistack 11.0',
    aluno: 'Arthur PC'
  })
})

app.listen(3333)
import express from 'express';

const app = express();

// mock
const selecoes = [
  {id: 1, selecoes: 'Brasil', grupo: 'G'},
  {id: 1, selecoes: 'Peru', grupo: 'B'},
  {id: 1, selecoes: 'Ilha de Salomão', grupo: 'F'},
  {id: 1, selecoes: 'Thaiti', grupo: 'A'}
];
//criar rota padrão ou raiz
// criando endPoint
app.get('/', (req, res) => {
  res.send('Olá Mundo, Node js...');
});

app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes);
})

export default app;
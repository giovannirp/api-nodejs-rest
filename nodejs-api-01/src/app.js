import express from 'express';

const app = express();

// indicar para express ler body com json
app.use(express.json());

// mock
const selecoes = [
  {id: 1, selecoes: 'Brasil', grupo: 'G'},
  {id: 2, selecoes: 'Peru', grupo: 'B'},
  {id: 3, selecoes: 'Ilha de Salomão', grupo: 'F'},
  {id: 4, selecoes: 'Thaiti', grupo: 'A'}
];
//criar rota padrão ou raiz
// criando endPoint
app.get('/', (req, res) => {
  res.send('Olá Mundo, Node js...');
});

app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes);
});

// Criando post para cadastrar
app.post('/selecoes', (req, res) => {
  selecoes.push(req.body);
  res.status(201).send('Seleção cadastrando com sucesso!');
})

export default app;
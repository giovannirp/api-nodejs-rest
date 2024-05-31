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

// função auxiliar

// retornar o objeto por id
function buscarSelecaoPorId(id) {
  return selecoes.filter((selecao) => selecao.id == id);
}

// pegar a posicao ou index do elemento do array por id
function buscarIdSelecao(id) {
  return selecoes.findIndex(selecao => selecao.id == id);
}

//criar rota padrão ou raiz
// criando endPoint
app.get('/', (req, res) => {
  res.send('Olá Mundo, Node js...');
});

app.get('/selecoes', (req, res) => {
  res.status(200).send(selecoes);
});

// Buscando por ID
app.get('/selecoes/:id', (req, res) => {
  let index = req.params.id;
  
  res.json(buscarSelecaoPorId(index));
})

// Criando post para cadastrar
app.post('/selecoes', (req, res) => {
  selecoes.push(req.body);
  res.status(201).send('Seleção cadastrando com sucesso!');
});

app.delete('/selecoes/:id', (req, res) => {
  let index = buscarIdSelecao(req.params.id);
  selecoes.splice(index, 1);
  res.send(`Seleção com id ${req.params.id} excluida com sucesso!`);
})

export default app;
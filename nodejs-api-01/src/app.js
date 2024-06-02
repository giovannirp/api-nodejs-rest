import express from 'express';
import SelecaoController from './app/controllers/SelecaoController.js';

const app = express();

// indicar para express ler body com json
app.use(express.json());

// criando endPoint
app.get('/', (req, res) => {
  res.send('Olá Mundo, Node js...');
});

app.get('/selecoes', SelecaoController.index);

// Buscando por ID
app.get('/selecoes/:id', SelecaoController.show)
// Criando post para cadastrar
app.post('/selecoes', SelecaoController.store);
app.put('/selecoes/:id', SelecaoController.update);
app.delete('/selecoes/:id', SelecaoController.delete);

export default app;
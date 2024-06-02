import conexao from '../database/conexao.js';

class SelecaoController {
  index(req, res) {
    const sql = "SELECT * FROM selecoes";
    conexao.query(sql, (erro, result) => {
      if (erro) {
        res.status(404).json({ erro: erro });
      } else {
        res.status(200).json(result);
      }
    });
  }

  show(req, res) {
    let id = req.params.id;

    const sql = "SELECT * FROM selecoes WHERE id=?;";
    conexao.query(sql, id, (erro, result) => {
      const linha = result[0];
      if (erro) {
        res.status(404).json({ erro: erro });
      } else {
        res.status(200).json(linha);
      }
    });
  }

  store(req, res) {
    let selecao = req.body;

    const sql = "INSERT INTO selecoes SET ?;";
    conexao.query(sql, selecao, (erro, result) => {
      if (erro) {
        res.status(400).json({ erro: erro });
      } else {
        res.status(201).json(result);
      }
    });
  }

  update(req, res) {
    const id = req.params.id;
    let selecao = req.body;
    const sql = "UPDATE selecoes SET ? WHERE id=?;";
    conexao.query(sql, [selecao, id], (erro, result) => {
      if (erro) {
        res.status(400).json({ 'erro': erro })
      } else {
        res.status(200).json(result);
      }
    });
  }

  delete(req, res) {
    let id = req.params.id;
    const sql = "DELETE FROM selecoes WHERE id=?;";
    conexao.query(sql, id, (erro, result) => {
      if (erro) {
        res.status(404).json({ erro: erro });
      } else {
        res.status(200).json(result);
      }
    });
  }
}

// Padrão Singleton
export default new SelecaoController();

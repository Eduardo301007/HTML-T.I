const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Servir arquivos estáticos da pasta "Atividade Final T.I"
app.use(express.static(__dirname));

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3307,
  user: 'root',
  password: '',
  database: 'eletronicos2'
});

app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  connection.query(
    'SELECT * FROM clientes WHERE email = ? AND senha = ?',
    [email, senha],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Erro no servidor' });

      if (results.length > 0) {
        const usuario = results[0];
        res.json({
          message: 'Login bem-sucedido',
          nome: usuario.Nome,
          email: usuario.email,
          senha: usuario.senha,
          telefone: usuario.Telefone
        });
      } 
      else {
        res.json({ message: 'Email ou senha incorretos' });
      }
    }
  );

});

app.get('/produtos', (req, res) => {
  connection.query('SELECT * FROM produto', (err, results2) => {
    if (err) return res.status(500).json({ error: 'Erro ao buscar produtos' });

    const produtos = results2.map(p => ({
      id_produto: p.id_produto,
      nome: p.nome,
      valor: p.valor,
      descricao: p.descrição,
      foto: p.foto ? Buffer.from(p.foto).toString('base64') : null
    }));

    res.json(produtos);
  });
});



app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});




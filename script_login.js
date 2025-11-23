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
  database: 'eletrônicos'
});

// Rota de login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  connection.query(
    'SELECT * FROM clientes WHERE email = ? AND senha = ?',
    [email, senha],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Erro no servidor' });

      if (results.length > 0) {
        res.json({ message: 'Login bem-sucedido' });
      } else {
        res.json({ message: 'Email ou senha incorretos' });
      }
    }
  );
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

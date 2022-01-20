const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const usuarioController = require('./src/controllers/usuarioController');
const despesaController = require('./src/controllers/despesaController');
const receitaController = require('./src/controllers/receitaController');
const bancoController = require('./src/controllers/bancoController');
const lancamentoController = require('./src/controllers/lancamentoController');
const categoria_despesaController = require('./src/controllers/categoria_despesaController');
const graficoController = require('./src/controllers/graficoController');
const faturaController = require('./src/controllers/faturaController');
const relatorioController = require('./src/controllers/relatorioController');
const middleware = require('./src/middlewares/middleware');


// Rota home
route.get('/', middleware.autenticacao, homeController.home);

// Rota usuarios
route.get('/usuario/novo', middleware.autenticacao, usuarioController.novo);
route.get('/usuario/index', middleware.autenticacao, usuarioController.index);
route.get('/usuario/editar/:id', middleware.autenticacao, usuarioController.editar);
route.post('/usuario/salvar', usuarioController.salvar);
route.post('/usuario/atualizar', middleware.autenticacao, usuarioController.atualizar);
route.post('/usuario/deletar', middleware.autenticacao, usuarioController.deletar);

// Rota login
route.get('/usuario/login', usuarioController.login);
route.get('/usuario/sair', usuarioController.sair);
route.post('/usuario/entrar', usuarioController.entrar);

//Rota despesas
route.get('/despesa/novo', middleware.autenticacao, despesaController.novo);
route.get('/despesa/index', middleware.autenticacao, despesaController.index);
route.post('/despesa/salvar', middleware.autenticacao, despesaController.salvar);
route.get('/despesa/editar/:id', middleware.autenticacao, despesaController.editar);
route.post('/despesa/atualizar', middleware.autenticacao, despesaController.atualizar);
route.post('/despesa/deletar', middleware.autenticacao, despesaController.deletar);

//Rota receita
route.get('/receita/novo', middleware.autenticacao, receitaController.novo);
route.get('/receita/index', middleware.autenticacao, receitaController.index);
route.post('/receita/salvar', middleware.autenticacao, receitaController.salvar);
route.get('/receita/editar/:id', middleware.autenticacao, receitaController.editar);
route.post('/receita/atualizar', middleware.autenticacao, receitaController.atualizar);
route.post('/receita/deletar', middleware.autenticacao, receitaController.deletar);

//Rota banco
route.get('/banco/novo', middleware.autenticacao, bancoController.novo);
route.get('/banco/index', middleware.autenticacao, bancoController.index);
route.post('/banco/salvar', middleware.autenticacao, bancoController.salvar);
route.get('/banco/editar/:id', middleware.autenticacao, bancoController.editar);
route.post('/banco/atualizar', middleware.autenticacao, bancoController.atualizar);
route.post('/banco/deletar', middleware.autenticacao, bancoController.deletar);

//Rota Categoria_despesa
route.get('/categoria_despesa/novo', middleware.autenticacao, categoria_despesaController.novo);
route.get('/categoria_despesa/index', middleware.autenticacao, categoria_despesaController.index);
route.post('/categoria_despesa/salvar', middleware.autenticacao, categoria_despesaController.salvar);
route.get('/categoria_despesa/editar/:id', middleware.autenticacao, categoria_despesaController.editar);
route.post('/categoria_despesa/atualizar', middleware.autenticacao, categoria_despesaController.atualizar);
route.post('/categoria_despesa/deletar', middleware.autenticacao, categoria_despesaController.deletar);

//Rota lancamento
route.get('/lancamento/index', middleware.autenticacao, lancamentoController.index);
route.get('/lancamento/novo', middleware.autenticacao, lancamentoController.novo);
route.post('/lancamento/lancamento', middleware.autenticacao, lancamentoController.lancamento);
route.get('/lancamento/editar/:id', middleware.autenticacao, lancamentoController.editar);
route.post('/lancamento/atualizar', middleware.autenticacao, lancamentoController.atualizar);
route.post('/lancamento/deletar', middleware.autenticacao, lancamentoController.deletar);

//Rota grafico
route.get('/grafico/01', middleware.autenticacao, graficoController.primeiro);

//Routa fatura
route.get('/fatura/index', middleware.autenticacao, faturaController.index);
route.post('/fatura/pagar', middleware.autenticacao, faturaController.pagar);

//Relatorios
route.get('/relatorio/lancamento_meses', middleware.autenticacao, relatorioController.lancamento_meses);
route.post('/relatorio/relatorio_meses', middleware.autenticacao, relatorioController.relatorio_meses);

module.exports = route;

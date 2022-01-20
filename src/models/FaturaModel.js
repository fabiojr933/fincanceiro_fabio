const database = require('../database/database');
const logger = require('../logger/logger');
const moment = require('moment');

class Fatura{
    constructor(body){
        this.erros = [],
        this.body = body,
        this.lista_cartao = [],
        this.lista_cartao_debito_pagar = []
    }
     async lista_cartao_credito(){
        await database.select('*').where({'tipo': 'credito'}).table('banco').then(dados => {
            dados.forEach(element => {
                this.lista_cartao.push({'id': element.id, 'banco': element.banco, 'saldo': element.saldo});
            });
        });
     }
     async lista_cartao_debito(){
        await database.select('*').where({'tipo': 'debito'}).table('banco').then(dados => {
            dados.forEach(element => {
                this.lista_cartao_debito_pagar.push({'id': element.id, 'banco': element.banco});
            });
        });
     }
     async pagar(){
         this.validacao();
         if(this.erros.length > 0){
            return;
        }
        await database.insert(this.body).table('fatura_paga').then(dados => {            
        }).catch(err => {
            logger.error(err);
        })
        //atualizando o saldo do banco
        await database.select('*').where({'id': this.body.id_cartao}).table('banco').then(dados => {
            var saldo = parseFloat(dados[0].saldo) - parseFloat(this.body.valor);
            database.update({'saldo': saldo}).where({'id': this.body.id_cartao}).table('banco').then(sucesso => {
            });           
        });

         //atualizando o saldo do banco
         await database.select('*').where({'id': this.body.tipo_pago}).table('banco').then(dados => {
            var saldo = parseFloat(dados[0].saldo) - parseFloat(this.body.valor);
            database.update({'saldo': saldo}).where({'id': this.body.tipo_pago}).table('banco').then(sucesso => {
            });           
        });
     }
     validacao(){
        this.cleanUp();
        if(this.body.valor == undefined || this.body.valor.length == 0){
            this.erros.push('O valor é obrigatorio');
        }
     }
     cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }
        this.body = {
            id_cartao: this.body.id_cartao,
            cartao: this.body.cartao,
            valor: this.body.valor,
            tipo_pago: this.body.tipo_pago,
            situacao: 'Pago',
            data: moment()
        };
    }
}

module.exports = Fatura;
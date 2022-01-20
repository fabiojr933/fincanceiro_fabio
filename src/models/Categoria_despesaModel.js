const database = require('../database/database');
const logger = require('../logger/logger');

class Categoria_despesa{
    constructor(body){
        this.body = body,
        this.erros = [],
        this.lista_categoria_despesa = []
    }
    async salvar(){
        this.validacao();
        if(this.erros.length > 0){
            return;
        }
        await database.insert(this.body).table('categoria_despesa').then(dados => {
        }).catch(err => {
            logger.error(err);
        });
    }
    async listar_categoria_despesa(){
        await database.select('*').table('categoria_despesa').then(dados => {
            dados.forEach(categoria_despesa => {
                this.lista_categoria_despesa.push({'categoria_despesa_id': categoria_despesa.id, 'categoria_despesa': categoria_despesa.categoria_despesa});
            });
        }).catch(err => {
            logger.error(err);
        })
    }
    async lista_categoria_despesa_id(id){
        await database.select('*').where({'id': id}).table('categoria_despesa').then(dados => {
            this.categoria_despesa = dados           
        }).catch(err => {
            logger.error(err);
        })
    }
    async atualizar(id){
        this.validacao();
        if(this.erros.length > 0){
            return;
        }
        await database.update(this.body).where({'id': id}).table('categoria_despesa').then(dados => [
        ]).catch(err => {
            logger.error(err);
        })
    }
    async deletar(id){
        if(id == null || id.length <= 0 || id == undefined){
            this.erros.push('Seleciona uma categoria_despesa');
            return;
        }
        await database.delete().where({'id': id}).table('categoria_despesa').then(dados => {
        }).catch(erro => {
            logger.error(erro);
        })
    }
    validacao(){
        this.cleanUp();
        if(this.body.categoria_despesa == undefined || this.body.categoria_despesa.length == 0){
            this.erros.push('Nome da categoria_despesa é obrigatorio');
        }
    }
    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }
        this.body = {
            categoria_despesa: this.body.categoria_despesa
        };
    }
}
module.exports = Categoria_despesa;

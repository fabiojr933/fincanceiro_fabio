const database = require('../database/database');
const validator = require('validator');
const logger = require('../logger/logger');
const bcryptjs  = require('bcryptjs');

class Usuario{
    constructor(body) {
        this.body = body;
        this.erros = [];
        this.user = null;
        this.lista_usuarios = [];
    }
    async salvar(){
        this.validacao();
        if(this.erros.length > 0){
            return;
        }
        const salt = bcryptjs.genSaltSync();
        this.body.senha = bcryptjs.hashSync(this.body.senha, salt);    
        await database.insert(this.body).table('usuario').then(dados => {
            this.usuario = dados;
        }).catch(erro => {
            console.log(erro);     
            logger.error(erro);     
        });
    }
    async Lista_usuario_id(id){
        await database.select('*').table('usuario').where({'id': id}).then(dados => {
            this.usuario = dados;
        }).catch(erro => {
            logger.error(erro);
        })
    }
    async listar_todos(){
        await database.select('*').table('usuario').then(dados => {
            dados.forEach(data => {
                this.lista_usuarios.push({'id': data.id, 'nome': data.nome, 'email': data.email, 'telefone': data.telefone});
            });
        }).catch(erro => {
            logger.error(erro);
        })
    }
    async atualizar(id){
        this.validacao();
        if(this.erros.length > 0) {
            return;
        }
        const salt = bcryptjs.genSaltSync();
        this.body.senha = bcryptjs.hashSync(this.body.senha, salt); 
        await database.update(this.body).where({'id': id}).table('usuario').then(dados => {            
        }).catch(err => {
            logger.error(err);
        })
    }
    async deletar(id){
        if(id == null || id.length <= 0 || id == undefined){
            this.erros.push('Seleciona um usuario');
            return;
        }
        await database.delete().where({'id': id}).table('usuario').then(dados => {
        }).catch(erro => {
            logger.error(erro);
        })
    }
    async entrar(){     
        if(this.erros.length > 0) return;
        await database.select(['email', 'senha']).table('usuario').where({email: this.body.email}).then(sucesso => {          
            if(sucesso == [] || sucesso.length <= 0 || sucesso ==  undefined){
                this.erros.push('Email e senha estão invalido!');   
                this.user = null;
                return;    
            }           
            if(!bcryptjs.compareSync(this.body.senha, sucesso[0].senha)){              
                this.erros.push('senha invalida!');   
                this.user = null;
                return;            
            }
            this.user = sucesso[0].email;
                    
        }).catch(err => {
            logger.error(err);
        })
    }
    validacao(){
        this.cleanUp();
        if(!validator.isEmail(this.body.email)){
            this.erros.push('Este email esta com um formato invalido');
        }
        if(this.body.senha < 2){
            this.erros.push('Senha muito franca');
        }
        if(this.body.nome == undefined || this.body.nome == ''){
            this.erros.push('Nome é obrigatorio');
        }
    }
    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }
        var data = new Date();
        this.body = {
            nome: this.body.nome,
            email: this.body.email,
            telefone: this.body.telefone,
            senha: this.body.senha,
            data: data.toLocaleDateString()
        }
    }
}
module.exports = Usuario;
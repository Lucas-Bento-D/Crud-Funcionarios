// @ts-nocheck
var dbConnection = require('../config/dbConnection')
var connection = dbConnection()

class Crud{
    constructor(){
        this.getAllEmployees.bind(this)
        this.getEmployee.bind(this)
    }

    async getAllEmployees(request: Request, response: Response){
        try{
            const sqlQuery = "select * from funcionarios";
            connection.query(sqlQuery, (error: Error, result: any) => {
                if (error) {
                    error
                } else {
                    response.json(result)
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }
    
    async getEmployee(request: Request, response: Response){
        const id = request.query.id
        const email = request.query.email
        try{
            const sqlQuery = `select * from funcionarios where email="${email}" and id=${id}`;
            connection.query(sqlQuery, (error: Error, result: any) => {
                if(error){
                    error
                }else{
                    response.json(result)
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }
    async addNewEmployee(request: Request, response: Response){
        const foto = "http://localhost:5000/uploads/images/" + request.file.filename
        const nome = request.body.nome
        const email = request.body.email
        const sexo = request.body.sexo
        const situacao = request.body.situacao
        const setor = request.body.setor
        const dependentes = request.body.dependentes
        const salario = request.body.salario
        const ativo = request.body.ativo
        try{

            const sqlQuery = "insert into `funcionarios` (`foto`, `nome`, `email`, `sexo`, `situacao`, `setor`, `dependentes`, `salario`, `ativo`) values('"+foto+"', '"+nome+"', '"+email+"', '"+sexo+"', '"+situacao+"', '"+setor+"', "+dependentes+", "+salario+", "+ativo+");";
            connection.query(sqlQuery, (error: Error, result: any) => {
                if(error){
                    error
                }else{
                    console.log("valores adicionado")
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = new Crud
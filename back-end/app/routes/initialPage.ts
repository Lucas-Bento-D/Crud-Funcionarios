module.exports = (app: any) =>{

    app.get('/', function(request: Object, response: any){
        response.send("Pagina inicial")
        
        // response.render()
    });
};
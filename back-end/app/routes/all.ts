// module.exports = (app: any) =>{
//     app.get('/', (res: any, req: any) =>{
//         var connection = app.dbConnection()
//         var all = new app.models.all(connection)

//         all.getAll( (error: any, result: any) => {
//             // res.render('/teste', {result})
//             console.log(result)
//         } )
//     })
// }
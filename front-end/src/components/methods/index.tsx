import axios from 'axios'

interface employeeParams {
    email: string;
    id: number;
}
interface addNewEmployeeParams{
    foto: any;
    nome: string;
    email: string;
    sexo: string;
    situacao: string;
    setor: string;
    dependentes: number;
    salario: number;
    ativo: boolean;
}
export const requestAllEmployees = async () => {
    try{
        const {data: result} = await axios.get('http://localhost:5000/allemployees')
        return result
    }
    catch(err){
        console.log(err)
    }
}

export const requestEmployee = async (Params: employeeParams) => {
    try{
        const {data: result} = await axios.get(`http://localhost:5000/employee?email=${Params.email}&id=${Params.id}`)
        return result
    }
    catch(err){
        console.log(err)
    }
}

export const addNewEmployee = async(Params: addNewEmployeeParams) => {
    try{
        // const{data: result} = await 
        const formData = new FormData()
        formData.append('foto', Params.foto)
        formData.append('nome', Params.nome)
        formData.append('email', Params.email)
        formData.append('sexo', Params.sexo)
        formData.append('situacao', Params.situacao)
        formData.append('setor', Params.setor)
        formData.append('dependentes', Params.dependentes.toString())
        formData.append('salario', Params.salario.toString())
        formData.append('ativo', Params.ativo.toString())
        await axios({
            method: 'post',
            url: 'http://localhost:5000/inclusionemployeeform',
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    catch(err){
        console.log(err)
    }
}
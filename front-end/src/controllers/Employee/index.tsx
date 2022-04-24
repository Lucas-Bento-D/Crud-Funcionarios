import React, { useEffect, useState } from 'react'
import { requestEmployee } from '../../components/methods'
import { User, UserInfo, UserInfoPersonal, UserInfoOrg, UserInfoMoreInformations } from './style'

function Employee(){

    const [response, setResponse] = useState<Array<object>>()

    useEffect(() =>{
        dataLocalStorage()
    },[])

    const dataLocalStorage = () => {

        const cleanSearch = window.location.search.substring(1).split("&")
        const cleanSearchEmail = cleanSearch[0].split("=")[1]
        const cleanSearchId = parseInt(cleanSearch[1].split("=")[1])

        request(cleanSearchEmail, cleanSearchId)
    }

    const request = async (email:string, id: number) =>{
        const result = await requestEmployee({email, id})
        setResponse(result)
    }
    console.log(response)

    // {new Date(e.inserido)}

    return(
        <User>
            {response?.map( (e: any) =>  {
                return(
                        <UserInfo key={e.id}>

                            <UserInfoPersonal>
                                <div>
                                    <div id='image'>
                                        <img src={e.foto} />
                                    </div>
                                </div>
                                <div>
                                    <div id='nome'>
                                        <h3>{e.nome}</h3>
                                    </div>
                                    <div id='email'>
                                        <span><strong>E-mail: </strong>{e.email}</span>
                                    </div>
                                    <div id='sexo'>
                                        <span><strong>Sexo: </strong>{e.sexo}</span>
                                    </div>
                                </div>
                            </UserInfoPersonal>

                            <UserInfoOrg>
                                <div id='setor'>
                                    <span><strong>Setor: </strong>{e.setor}</span>
                                </div>
                                <div id='salario'>
                                    <span><strong>Salario: </strong>{e.salario}</span>
                                </div>
                                <div id='data-entrada'>
                                    <span><strong>Data de entrada: </strong>{e.inserido}</span>
                                </div>
                            </UserInfoOrg>

                            <UserInfoMoreInformations>
                                <div id='situacao'>
                                    <span><strong>Situação: </strong>{e.situacao}</span>
                                </div>
                                <div id='dependentes'>
                                    <span><strong>Dependentes: </strong>{e.dependentes}</span>
                                </div>
                            </UserInfoMoreInformations>

                        </UserInfo>
                )
            })}
        </User>
    )
}
export default Employee
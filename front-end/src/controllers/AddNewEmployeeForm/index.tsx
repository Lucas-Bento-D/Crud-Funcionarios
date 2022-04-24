import React, { useState } from 'react'
import {addNewEmployee} from '../../components/methods'

function AddNewEmployeeForm(){
    const [dataForm, setDataForm] = useState(
        {
            foto: {},
            nome: '',
            email: '',
            sexo: '',
            situacao: '',
            setor: '',
            dependentes: 0,
            salario: 0,
            ativo: false,
        }
    )
        
        return(
            <div>
                <h3>Adicione um colaborador</h3>
            <form
                onSubmit={ () => {addNewEmployee(dataForm);}} encType="multipart/form-data">

                <div className='input-foto'>
                    <label  className='label label-foto'>Foto</label>
                    <input type="file" name="foto" id="foto" placeholder='Insira o nome da foto do colaborador'
                    onChange={e =>{
                        setDataForm(
                            {...dataForm,  foto: e.target.files![0]}
                        )
                    }} />
                </div>

                <div className='input-nome'>
                    <label  className='label label-nome'>nome</label>
                    <input type="text" name="nome" id="nome" placeholder='Insira o nome do colaborador'
                    onChange={e =>{
                        setDataForm(
                        {...dataForm, nome: e.target.value}
                    )
                    }}/>
                </div>

                <div className='input-email'>
                    <label  className='label label-email'>email</label>
                    <input type="email" name="email" id="email" placeholder='Insira o email do colaborador'
                    onChange={e =>{
                        setDataForm(
                        {...dataForm, email: e.target.value}
                    )
                    }}/>
                </div>

                <div className='input-sexo'>
                    <label  className='label label-sexo'>sexo</label>
                    <input type="text" name="sexo" id="sexo" placeholder='Insira o sexo do colaborador'
                    onChange={e =>{
                        setDataForm(
                        {...dataForm, sexo: e.target.value}
                    )
                    }}/>
                </div>

                <div className='input-situacao'>
                    <label  className='label label-situacao'>situacao</label>
                    <input type="text" name="situacao" id="situacao" placeholder='Insira a situação do colaborador'
                    onChange={e =>{
                        setDataForm(
                        {...dataForm, situacao: e.target.value}
                    )
                    }}/>
                </div>
                <div className='input-setor'>
                    <label  className='label label-setor'>setor</label>
                    <input type="text" name="setor" id="setor" placeholder='Insira o setor do colaborador'
                    onChange={e =>{
                        setDataForm(
                        {...dataForm, setor: e.target.value}
                    )
                    }}/>
                </div>

                <div className='input-dependentes'>
                    <label  className='label label-dependentes'>dependentes</label>
                    <input type="number" name="dependentes" id="dependentes" placeholder='Insira a quantidade de dependentes do colaborador'
                    onChange={e =>{
                        setDataForm(
                        {...dataForm, dependentes: e.target.valueAsNumber}
                    )
                    }}/>
                </div>

                <div className='input-Salario'>
                    <label  className='label label-Salario'>Salario</label>
                    <input type="number" name="salario" id="salario" placeholder='Insira o salario do colaborador'
                    onChange={e =>{
                        setDataForm(
                        {...dataForm, salario: e.target.valueAsNumber}
                    )
                    }}/>
                </div>
                <div className='input-ativo'>
                    <label  className='label label-ativo'>ativo</label>
                    <input type="checkbox" name="ativo" id="ativo"
                    onChange={e =>{
                            setDataForm(
                            {...dataForm, ativo: e.target.checked}
                            )
                    }}/>
                </div>

                <button type='submit' >Cadastrar</button>
            </form>

        </div>
    )
}

export default AddNewEmployeeForm;
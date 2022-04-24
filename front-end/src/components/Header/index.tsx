import React from 'react'
import { Link } from 'react-router-dom'
import { HEADER, HeaderBlock, HeaderBlockContent} from './styles'

function Header(){
    return(
        <HEADER>
            <HeaderBlockContent>
                <HeaderBlock>
                    <h2>
                        <Link to={{pathname:`/`}}>Adicione um Colaborador</Link>
                    </h2>
                </HeaderBlock>
                <HeaderBlock>
                    <Link to={{pathname:`addNewEmployeeForm`}}>Adicione um Colaborador</Link>
                    <Link to={{pathname:`allEmployees`}}>Seus colaboradores</Link>
                    <a href='https://www.linkedin.com/in/lucasbentodomiciano/'>Linkedin</a>
                </HeaderBlock>
            </HeaderBlockContent>
        </HEADER>
    )
}
export default Header
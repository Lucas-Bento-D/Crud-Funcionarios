import styled from 'styled-components'

export const FormEscope = styled.div`
    margin: 20px;
    padding: 20px;
    background: #ccc;
    border-radius: 10px;
    h2{
        text-align: center;
    }
    form{
        // display: flex;
        flex-wrap: wrap;
        div{
            margin: 10px;
            label{
                display: block;
                margin: 5px 0;
                font-weight: 600;
            }
            input{
                border-radius: 5px;
                border: none;
                padding: 5px
            }
        }
    }
`
export const InputsForm = styled.div`
`

export const BlockForm = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const ButtonAdd = styled.button`
    margin: 0 0 0 auto;    
    border: none;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #2ECC71; 
`
import styled from "styled-components"

export const HEADER = styled.header`
    background-color: #2ECC71;
    padding: 15px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    display:flex;
    justify-content: center;
    // h2{
    //     font-family: 'Montserrat Alternates', sans-serif;
    // }
`

export const HeaderBlock = styled.div`
    text-align: center;
    wisth:100%;
    a{
        &:hover{
            transition: .3s;
            color: #fff;
        }
        margin: 0 10px;
    }
`

export const HeaderBlockContent = styled.div`
    margin: 0 20px;
`

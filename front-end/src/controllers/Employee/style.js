import styled from 'styled-components'

export const User = styled.div`
    margin: 20px;
    padding: 20px;
    background: #ccc;
    border-radius: 10px;
`

export const UserInfo = styled.div`
`
export const UserInfoPersonal = styled.div`
    display: flex;
    #image{
        img{
            max-width: 150px
        }
    }
    div{
        margin: 10px;
        span{
            font-weight: 700;
            
        }
    }
    
`
export const UserInfoOrg = styled.div`
    display: flex;
    div{
        margin: 10px;
        span{
            font-weight: 700;
            
        }
    }
`
export const UserInfoMoreInformations = styled.div`
    display: flex;
    div{
        margin: 10px;
        span{
            font-weight: 700;
            
        }
    }
`
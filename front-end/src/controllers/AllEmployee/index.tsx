import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {requestAllEmployees} from '../../components/methods'


function AllEmployees() {
  const [response, setResponse] = useState<Array<object>>()

  useEffect( ()=>{
    requestAll()
  }, [])
  
  const requestAll = async () =>{
    const result: any = await requestAllEmployees()
    console.log(result)
    setResponse(result)
  }

  return (
    <ul>
      {response?.map( (e: any) =>  {
        
        return (
          <Link key={e.id} to={{
            pathname:`/employee`,
            search: `?email=${e.email}&id=${e.id}`
          }} >
            <li key={e.id}>{e.nome}</li>  
          </Link>
        )
      })}
    </ul>
  );
}

export default AllEmployees;
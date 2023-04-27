import React, { useEffect, useState } from 'react'
import { AxiosResourceRepository } from '../infrastructure/axios-resource-repository'


const repository = new AxiosResourceRepository(
    'https://reqres.in/api/unknown'
);

function ResourcePage () {

    const [res, setRes] = useState([]);
    
    useEffect(()=>{
        //mirar por aca....
        
        async function fetchData() {
            const resources = await repository.findAll();
            setRes(resources);
        }
        fetchData();
    },[]);

    return (
        <div>
            {
                JSON.stringify(res)
            }
        </div>
    )
}

export default ResourcePage
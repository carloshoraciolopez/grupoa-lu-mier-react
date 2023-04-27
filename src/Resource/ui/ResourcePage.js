import React, { useEffect, useState } from 'react'
import { AxiosResourceRepository } from '../infrastructure/axios-resource-repository'


const repository = new AxiosResourceRepository(
    'https://reqres.in/api/unknown'
);

function ResourcePage () {

    const [res, setRes] = useState([]);
    
    useEffect(async ()=>{
        //mirar por aca....
        const resources = await repository.findAll();
        setRes(resources);
    },[]);

    return (
        <div>
            {/* {
                JSON.stringify(resources)
            } */}
        </div>
    )
}

export default ResourcePage
import React, { useEffect } from 'react'
import EmisorComponent from '../../components/redux/ComponenteA/EmisorComponent'
import ReceptorComponent from '../../components/redux/ComponenteB/ReceptorComponent'
import { useDispatch, useSelector } from 'react-redux'
import { resetMessage } from '../../redux/states/mensaje'
import { createResource } from '../../redux/states/resource';
import { NavLink } from 'react-router-dom'

const ReduxPage = () => {

    const mensajeState = useSelector((store) => store.mensaje);

    const dispatcher = useDispatch();

    //me enchufo a la fuente
    const resourceState = useSelector(
        (store) => store.resource
    );
    
    const limpiarMensajes = () => {
        dispatcher(resetMessage());
    }

    //quiero cargar los datos del api, una sola vez
    useEffect(()=>{
        if(resourceState.resources.length === 0) {
            //cuando se carga el componente quiero saber si ya hay resources cargados
            //si no hay entonces:
            fetch('https://reqres.in/api/unknown')
            .then(response => response.json())
            .then(data => {
                dispatcher(createResource({resources: data.data}));
            });
        }
    },[]);

    return (
        <>
            <EmisorComponent/>
            <hr/>
            <ReceptorComponent/>
            <hr/>
            <b>Redux Page:</b> <span>Mensaje from redux {mensajeState.mensaje}</span>
            <button onClick={limpiarMensajes}>
                Reset
            </button>
            <hr/>
            <NavLink to={'/'}>Volver</NavLink>
        </>        
    )
}

export default ReduxPage;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateMensaje } from '../../../redux/states/mensaje';

const ReceptorComponent = () => {//ui
    const dispatcher = useDispatch();

    const mensajeState = useSelector(
        (store) =>  store.mensaje
    );
    
    const update = () => {
        //1 la ui dispath(action)
        dispatcher(updateMensaje({mensaje:'update de mensaje'}));
    }

    return (
        <div>
            <h1>Receptor</h1>
            <span>Mensaje: {mensajeState.mensaje}</span>
            <button onClick={update}>
                Update
            </button>
        </div>
    )
}

export default ReceptorComponent
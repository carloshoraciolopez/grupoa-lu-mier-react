import React from 'react'
import { useDispatch } from 'react-redux';
import { createMensaje } from '../../../redux/states/mensaje';

const EmisorComponent = () => {

    //necesito el dispatcher para  ejecutar una accion
    const dispatcher = useDispatch();
    
    const emitirMensaje = () => {
        //alert('emitiendo');
        dispatcher(createMensaje('hola mundo en redux'));
    }

    return (
        <button onClick={emitirMensaje}>
            Emite mensaje
        </button>
    )
}

export default EmisorComponent
import { useEffect, useState } from 'react';
import Turno from '../Turno/Turno';
import thisStyle from './Turnos.module.css';

function Turnos(props) {

    //INTERNAMENTE 
    const [listado, setListado] = useState([]);//un hook [valor,funcion]

    //hook 
    useEffect(()=>{
        //CUALQUIER ESTADO QUE SE MODIFIQUE
        // console.log('SIEMPRE, CUANDO CARGA EL COMPONENTE O SE MODIFIQUE CUALQUIER ESTADO');
    });

    //PUEDE CREAR MAS useEffect
    useEffect(()=>{
        //CUALQUIER ESTADO QUE SE MODIFIQUE
        console.log('UNA SOLA VEZ, CUANDO CARGA EL COMPONENTE');
        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setListado(data.map(d => {
                    return {
                        id:d.id,
                        name:d.name,
                        username:d.username,
                        email:d.email
                    }
                }))
            })

    },[]);//array de dependencias

    useEffect(()=>{
        //CUALQUIER ESTADO QUE SE MODIFIQUE
        console.log('UNA SOLA VEZ, CUANDO CARGA EL COMPONENTE O SE MODIFICA EL ESTADO "listado"');
        console.log(listado);
    },[listado]);
    
    return (
        <div className={thisStyle.turnosContainer}>
            { listado.map(t => <Turno key={t.id} turno={t}/>)}
        </div>
    )
}

export default Turnos;
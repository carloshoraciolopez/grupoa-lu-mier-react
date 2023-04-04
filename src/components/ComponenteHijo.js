import { useState } from "react";

function ComponenteHijo(props) {
    
    //const atributo = props.nombre;
    const { nombre, array } = props;
    const { fx } = props;
    const { actualizarCurso } = props;

    const funcionEnHijo = () => {
        alert('funcion en hijo...');
        fx({
            nombre,
            array
        });
    }

    //hooks!
    const [contador,setContador] = useState(0);

    const enviarCurso = () => {
        const miCurso = {
            id: Math.random(),
            name: 'Aprende react con charly'
        };

        //enviar al padre
        actualizarCurso(miCurso);
    }
    return(
        <>
            <h3>Hijo {nombre} {array.map(x=>'data: '+ x).join(',')}</h3>
            <button onClick={funcionEnHijo}>
                Boton en hijo
            </button>
            <h4>Contador={contador}</h4>

            <button onClick={enviarCurso}>
                Enviar curso al padre
            </button>
        </>
    );
}

export default ComponenteHijo;
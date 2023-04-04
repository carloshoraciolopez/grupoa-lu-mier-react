import { Fragment } from 'react';
import './App.css';
import ComponenteHijo from './components/ComponenteHijo';
import { useState,useEffect  } from 'react';

function App() { /*props */

  //estados
  const [displayDiv, setDisplayDiv] = useState(false);

  //defino un objeto como estado
  const [curso, setCurso] = useState(undefined);

  /* 
    JSX
    <></> es un fragment
    <Fragment></Fragment>

    Pueden tener atributos:
      name={'valor'} string
      name={1} number
      name={{atr:value,atr:value, etc:etc}} object
  */
  //crear una funcion que atienda el click de boton
  const handleClick = () => {
    setDisplayDiv(!displayDiv);
  }

  const funcionEnElpadre = (obj) =>{
    alert('alert en funcion definida en el App.js');
  }

  const actualizarCurso = (curso) => {
    console.log(curso);
    if(curso){
      //invocar al setCurso
      setCurso(curso);
    }
  }

  //¿como escuchamos cambios en el estado?
  //useEffect: cuando cambiar algun estado, renderizo o hago al adicional
  useEffect(() => {
    console.log('curso se modifico, se ejecuta siempre con cualquier cambio');
  });

  useEffect(() => {
    //acá!!! 
    console.log('se ejecuta una vez, cuando se monta el componente');
  },[]);

  useEffect(() => {
    console.log('curso se modifico');
  },[curso]);

  return (
    <>
      <button onClick={handleClick}>
        Saludar
      </button>
      { displayDiv && 
        <div id="miDiv">
          <h2>Saludando...</h2>
        </div>
      }

      <hr/>
      <p>Datos del curso: {curso?.id} {curso?.name}</p>
      {
        /*
        Incluimos nuestro componente
        */
      }
      <ComponenteHijo 
        nombre={'soy un chijo'}
        array={[10,15,20]}
        fx={funcionEnElpadre}
        actualizarCurso={actualizarCurso}
        />
    </>
  );
}

export default App;

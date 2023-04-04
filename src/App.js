import './App.css';
import { useState } from 'react';
import Cuenta from './components/Cuenta/Cuenta';
import Nav from './components/Nav/Nav';
import ListadoCuentas from './components/ListadoCuentas/ListadoCuentas';
import comments from './json.json';

const cuentas = [
  {
    id: 1,
    type: 'CC',
    currency: '$'
  },
  {
    id: 2,
    type: 'CA',
    currency: '$'
  },
  {
    id: 3,
    type: 'CA',
    currency: 'USD'
  }
];

const auxMap = () => {

  const mails = comments.map(c=> {
    const email = c.email.split('@')[1];
    const idx = email.indexOf('.'); //7
    return email.substr(idx, c.email.length);
  });

  const mapEmail = new Map();

  mails.forEach(m => {
    //no existe la clave en el mapa => carga el mapa con esa clave y valor 1 
    if(!mapEmail.has(m)) {
      mapEmail.set(m,1)
    }else {
      let value = mapEmail.get(m);
      mapEmail.set(m,value+1);
    }
  });

  console.log(mapEmail)
}

const auxSet = () => {
  const mails = comments.map(c=> {
    const email = c.email.split('@')[1];
    const idx = email.indexOf('.'); //7
    return email.substr(idx, c.email.length);
  });

  //filtrar elementos duplicados
  const commentsSet = new Set(mails);
  console.log(commentsSet);
}

function App(props) {
  return (
    <>
      <Nav />
      <ListadoCuentas cuentas={cuentas} />      
    </>
  );
}

export default App;

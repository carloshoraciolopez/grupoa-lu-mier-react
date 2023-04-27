import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

const Formulario = () => {
    // const [nombre,setNombre] = useState('inicial');
    // const [tyc,setTyc] = useState(false);

    const [form,setForm] = useState({fecha:'2023-04-12',nombre:'carlos'});

    const handleChange = (e) => {
        debugger;
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // envio al un back        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                {/*
                <input name="nombre" 
                     id="nombre"
                     value={form.nombre}
                     onChange={handleChange}
                    >
                </input>
            */}
            <TextField id="outlined-basic"
                label={form.nombre} 
                variant="outlined" 
                required
                defaultValue={form.nombre}
                onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="tyc">TyC:</label>
                <input name="tyc" 
                     id="tyc"
                     value={form.tyc}
                     defaultChecked={form.tyc}
                     onChange={handleChangeChecked}
                     type="checkbox"
                    >
                </input>
            </div>
            <div>
                <label htmlFor="fecha">Fecha:</label>
                <input name="fecha" 
                     id="fecha"
                     value={form.fecha}
                     onChange={handleChange}
                     type="date"
                    >
                </input>
                {form.tyc}
            </div>
            <div>
                <button type="submit">
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default Formulario
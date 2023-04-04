import Cuenta from '../Cuenta/Cuenta';
import thisStyle from './ListadoCuentas.module.css';

function ListadoCuentas(props) {
    //cuentas > array
    const { cuentas } = props;

    return(
        <div className={thisStyle.listadoCuentasContainer}>
            {
                //siempre que recorra un array para generar un componente
                //debo usar un key
                cuentas.map(c => <Cuenta key={c.id} cuenta={c}/>)
            }
        </div>
    );
}

export default ListadoCuentas;
import thisStyle  from './Cuenta.module.css';

function Cuenta(props) {
    
    const {cuenta} = props;
    
    return (
        <div className={thisStyle.cuentaContainer}>
            <h2>
                Id: {cuenta.id}
            </h2>
            <p>
                Tipo: {cuenta.type}
            </p>
            <b>Moneda:</b> <span>{cuenta.currency}</span>
        </div>
    );
}

export default Cuenta;
import thisStyle from './Turno.module.css';

function Turno(props) {

    //necesita el dato que viene de afuera
    const {turno} = props;

    return (
        <div className={thisStyle.turno}>  
            <span>{turno.id}</span>
            <span>{turno.username}</span>
        </div>
    )
}

export default Turno;
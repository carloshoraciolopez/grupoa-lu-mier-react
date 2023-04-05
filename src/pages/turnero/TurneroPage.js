import thisStyle from './TurneroPage.module.css';
import Header from  './components/Header/Header';
import Anuncios from './components/Anuncios/Anuncios';
import Turnos from './components/Turnos/Turnos';

function TurneroPage () {
    return (
        <>
            <Header/>
            <main>
                <section className={thisStyle.container}>
                    <Anuncios/>
                    <Turnos/>
                </section>
            </main>
            <footer className={thisStyle.footer}>
                <div className="maquee-container">
                    <span>texto largo texto largotexto largotexto largotexto largotexto largo</span>
                </div>
            </footer>
        </>
    );
}

export default TurneroPage;
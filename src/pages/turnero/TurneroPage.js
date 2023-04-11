import thisStyle from './Turnero.module.css';
import Header from  './components/Header/Header';
// import logo from '../../../public/logo192.png'

function TurneroPage () {

    return (
        <>
            <Header/>
            <main>
                <section className={thisStyle.container}>
                    <div className="anuncios">
                        <div className={thisStyle.anunciosWrapper}>
                            <video controls autoplay >
                                <source src="../videos/turnero-bcra-jul191.mp4"></source>
                            </video>
                        </div>
                    </div>
                    <div className="turnos">
                        <div>  
                            <span>273</span>
                            <span>BOX 1</span>
                        </div>
                    </div>
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
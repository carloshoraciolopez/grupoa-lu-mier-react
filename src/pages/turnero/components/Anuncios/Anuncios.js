import thisStyle from './Anuncios.module.css';

function Anuncios () {
  return (
    <div className={thisStyle.anunciosContainer}>
        <div className={thisStyle.anunciosWrapper}>
            <video controls autoPlay >
                <source src="../videos/turnero-bcra-jul191.mp4"></source>
            </video>
        </div>
    </div>
  )
}

export default Anuncios;
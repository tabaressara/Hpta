
import Navigator from "../../components/NavigatorBar/Navigator";
import styles from "./Recomendaciones.module.css";
import Contacto from "../../components/barraBaja/barraBaja";
import Login from "../../components/Login/LoginModal";

function Recomendaciones() {
    return (
        <div className = {styles.fondo}>
            <Login/>
            <Navigator/>
            <div className = {styles.base}>
                <img src="imagen5.jpg" className = {styles.imagen} alt="Imagen" />
                <div>
                    <p className = {styles.texto}>
                        Te invitamos a explorar nuestra sección de recomendaciones <br/>
                        para jugar, donde encontrarás valiosos consejos y <br/>
                        estrategias para mejorar tus habilidades en el voleibol.
                        <br/> <br/> <br/>
                        No importa si eres un principiante o un jugador experimentado, <br/>
                        siempre hay espacio para aprender.</p>
                    <button className = {styles.boton}>
                        ver recomendaciones
                    </button>
                </div>
            </div>
            <Contacto/>
        </div>
    );
}

export default Recomendaciones;
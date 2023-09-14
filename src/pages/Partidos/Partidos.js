
import Navigator from "../../components/NavigatorBar/Navigator";
import styles from "./Partidos.module.css"
import Contacto from "../../components/barraBaja/barraBaja";
import Login from "../../components/Login/LoginModal";
import Registrarse from "../../components/Registrarse/Registrarse";

function Partidos() {
    return (
        <div className = {styles.fondo}>
            <Login/>
            <Navigator/>
            <Registrarse/>
            <div className = {styles.base}>
                <img src="imagen6.jpg" className = {styles.imagen} alt="Imagen" />
                <div>
                    <h1 className = {styles.titulo}>
                        A jugar!
                    </h1>
                    <p className = {styles.texto}>
                        ¡Prepárate para jugar y <br/>
                        disfrutar al máximo en la cancha!</p>
                    <button className = {styles.boton}>
                        ver partidos
                    </button>
                </div>
            </div>
            <Contacto/>
        </div>
    );
}


export default Partidos;
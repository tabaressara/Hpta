
import Navigator from "../../components/NavigatorBar/Navigator";
import styles from "./Aprende.module.css"
import Contacto from "../../components/barraBaja/barraBaja";
import Login from "../../components/Login/LoginModal";
import Registrarse from "../../components/Registrarse/Registrarse";

function Aprende() {
    return (
        <div className = {styles.fondo}>
            <Login/>
            <Navigator/>
            <Registrarse/>
            <div className = {styles.base}>
                <img src="imagen3.jpg" className = {styles.imagen} alt="Imagen" />
                <div>
                    <h1 className = {styles.titulo}>
                        Es tiempo de aprender
                    </h1>
                    <p className = {styles.texto}>
                        El voleibol se convierte en un arte que puedes dominar desde 
                        la comodidad de tu hogar! Aquí, encontrarás una biblioteca de videos <br/>
                        cuidadosamente seleccionados para avanzar en tu viaje de aprendizaje. 
                        Sumérgete en la experiencia y descubre cómo tus habilidades en <br/>
                        el voleibol despegarán a nuevos niveles.</p>
                </div>
            </div>
            <Contacto/>
        </div>
    );
}

export default Aprende;

import Navigator from "../../components/NavigatorBar/Navigator";
import styles from "./Reglamento.module.css"
import Contacto from "../../components/barraBaja/barraBaja";
import Login from "../../components/Login/LoginModal";

function Reglamento() {
    return (
        <div className = {styles.fondo}>
            <Login/>
            <Navigator/>
            <div className = {styles.base}>
                <img src="imagen4.jpg" className = {styles.imagen} alt="Imagen" />
                <div>
                    <h1 className = {styles.titulo}>
                        Reglamento del <br/>
                        voleibol
                    </h1>
                    <p className = {styles.texto}>
                        Antes de dar el primer saque, es esencial conocer <br/> 
                        las reglas básicas del voleibol. <br/><br/>
                        En esta sección, te ofrecemos una introducción al reglamento básico del <br/> 
                        voleibol, para que puedas disfrutar de cada set.</p>
                    <button className = {styles.boton}>
                        ver reglamento
                    </button>
                </div>
            </div>
            <Contacto/>
        </div>
    );
}

export default Reglamento;
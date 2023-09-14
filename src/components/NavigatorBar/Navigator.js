import {Link} from 'react-router-dom';
import styles from "./Navigator.module.css";

function Navigator() {

    return(
        <nav className = {styles.header}>
                <Link to = '/' className = {styles.links}>
                    <img 
                        src='Logo.png'  
                        className = {styles.logo} 
                        alt='Logo'/> 
                </Link>
                <Link to = '/Aprende' className = {styles.links}>
                    Aprende a jugar
                </Link>
                <Link to = '/Reglamento' className = {styles.links}>
                    Reglamento
                </Link>
                <Link to = '/Recomendaciones' className = {styles.links}>
                    Recomendaciones
                </Link>
                <Link to = '/Partidos' className = {styles.links}>
                    Partidos
                </Link>
        </nav>
    );
}

export default Navigator;
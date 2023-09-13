import {Link} from 'react-router-dom';
import styles from "./barraBaja.module.css";

function Contacto() {

    return(
        <div>
            <div className = {styles.pies}>
                <Link to = '/' className = {styles.links}>
                    <img 
                        src='Logo.png'  
                        className = {styles.logo} 
                        alt='Logo'/> 
                </Link>
                <h3 className = {styles.contactanos}> 
                    Contactanos
                </h3>
                <img 
                        src='Email.png'  
                        className = {styles.email} 
                        alt='email'/> 
            </div>
        </div>
        
    );
}

export default Contacto;
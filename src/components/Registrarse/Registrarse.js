import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './Registrarse.module.css';

function Registrarse() {
  const [abierto, setAbierto] = useState(false);

  const cambiarEstado = () => {
    setAbierto(!abierto);
    document.body.style.overflow = abierto ? 'auto' : 'hidden';
  };

  const controlFornulario = (e) => {
    e.preventDefault();
    const nombre = e.target.name.value;
    const email = e.target.email.value;
    const contraseña = e.target.password.value;
    console.log("Nombre:", nombre)
    console.log("Email:", email);
    console.log("Contraseña:", contraseña);
    cambiarEstado();
  };

  return (
    <div>
      <button className={styles.registro} onClick={cambiarEstado}>
            Registrarse
      </button>
      <Modal
        isOpen = {abierto}
        onRequestClose = {cambiarEstado}
        className = {styles.modal} 
        overlayClassName = {styles.overlay} 
      >
        <div className={styles.base}>
            <button className={styles.cerrar} onClick={cambiarEstado}>
                X
            </button>
            <h1 className = {styles.titulo}>
                Registrarse
            </h1>
            <p className = {styles.texto}> 
                ¡No esperes más para explorar todas las oportunidades que tenemos para ti!</p>
            <form onSubmit = {controlFornulario} className ={styles.formulario}>
                <div className={styles.inputContainer}>
                    <input type = "name" id = "name" name = "name" required className = {styles.input}/> 
                    <label htmlFor = "name" className ={styles.label}>Nombre</label>
                </div>
                <div className={styles.inputContainer}>
                    <input type = "email" id = "email" name = "email" required className = {styles.input}/> 
                    <label htmlFor = "email" className ={styles.label}>Email</label>
                </div>
                <div className={styles.inputContainer}>
                    <input type = "password" id = "password" name = "password" required className = {styles.input}/>
                    <label htmlFor = "password" className ={styles.label}>Contraseña</label>
                </div>
                <div>
                    <button className = {styles.botonModel} type = "submit">Registrarse</button>
                </div>
            </form>
        </div>
      </Modal>
    </div>
  );
}

export default Registrarse;
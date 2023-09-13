import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './LoginModal.module.css';

function Login() {
  const [abierto, setAbierto] = useState(false);

  const cambiarEstado = () => {
    setAbierto(!abierto);
    document.body.style.overflow = abierto ? 'auto' : 'hidden';
  };

  const controlFornulario = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const contraseña = e.target.password.value;
    console.log("Email:", email);
    console.log("Contraseña:", contraseña);
    cambiarEstado();
  };

  return (
    <div>
      <button className={styles.login} onClick={cambiarEstado}>
        Inicia sesión
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
                Inicia sesión
            </h1>
            <p className = {styles.texto}>¡Bienvenido de nuevo! <br/> Estamos encantados de tenerte de regreso</p>
            <form onSubmit = {controlFornulario} className ={styles.formulario}>
                <div className={styles.inputContainer}>
                    <input type = "email" id = "email" name = "email" required className = {styles.input}/> 
                    <label htmlFor = "email" className ={styles.label}>Email</label>
                </div>
                <div className={styles.inputContainer}>
                    <input type = "password" id = "password" name = "password" required className = {styles.input}/>
                    <label htmlFor = "password" className ={styles.label}>Contraseña</label>
                </div>
                <div>
                    <button className = {styles.botonModel} type = "submit">Inicia sesión</button>
                </div>
            </form>
        </div>
      </Modal>
    </div>
  );
}

export default Login;


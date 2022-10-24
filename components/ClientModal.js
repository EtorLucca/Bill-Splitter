import { useState } from "react";
import styles from "../styles/Modal.module.css";

export default function ClientModal({ onCancel, onSubmit }) {
  const [name, setName] = useState("");
  const [consumption, setConsumption] = useState("");

  function handleClear() {
    setName("");
    setConsumption("");
  }

  return (
    <div className={styles.background}>
      <div className={styles.box}>
        <div className={styles.header}>
          <span className={styles.title}>Cadastro de Cliente</span>
          <button onClick={() => {
            onCancel();
            handleClear();
            }} className={styles.exit}>X</button>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit({name, consumption});
          handleClear();
        }} className={styles.form}>
          <div className={styles.wrapper}>
            <label className={styles.label}>Novo Cliente:</label>
            <input value={name} autoFocus onChange={(e) => setName(e.target.value)} className={styles.input} type="text" placeholder="nome"></input>
          </div>
          <div>
          <button onClick={() => {
              handleClear();
              onCancel();
            }} className={styles.cancel} type="button">Cancelar</button>
          <button onClick={(e) => {
              e.preventDefault();
              onSubmit({name, consumption});
              handleClear();
            }} className={styles.add} type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
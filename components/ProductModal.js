import { useState } from "react";
import styles from "../styles/Modal.module.css";

export default function ProductModal({ onCancel, onSubmit }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  function handleClear() {
    setName("");
    setAmount("");
    setPrice("");
  }

  return (
    <div className={styles.background}>
      <div className={styles.box}>
        <div className={styles.header}>
          <span className={styles.title}>Cadastro de Produto</span>
          <button onClick={() => {
            onCancel();
            handleClear();
            }} className={styles.exit}>X</button>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit({name, price, amount});
          handleClear();
        }} className={styles.form}>
          <div className={styles.wrapper}>
            <label className={styles.label}>Novo Produto:</label>
            <input value={name} autoFocus onChange={(e) => setName(e.target.value)} className={styles.input} type="text" placeholder="produto"></input>
          </div>
          <div className={styles.wrapper}>
            <label className={styles.label}>Preço:</label>
            <input value={price} onChange={(e) => setPrice(e.target.value)} className={styles.input} type="number" placeholder="preço"></input>
          </div>
          <div className={styles.wrapper}>
            <label className={styles.label}>Quantidade:</label>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} className={styles.input} type="number" placeholder="quantidade"></input>
          </div>
          <div>
            <button onClick={() => {
                handleClear();
                onCancel();
              }} className={styles.cancel} type="button">Cancelar</button>
            <button onClick={(e) => {
                e.preventDefault();
                onSubmit({name, price, amount});
                handleClear();
              }} className={styles.add} type="submit">Adicionar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
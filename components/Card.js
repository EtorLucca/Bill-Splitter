import styles from "../styles/Card.module.css";


export default function Card({tipo, value, onSelect}) {

  if(tipo == "cliente") {
    return (
      <div onClick={(event) => {
        event.preventDefault();
        onSelect( value );
      }} className={styles.card}>
        <div className={styles.name}>{value.name}</div>
        <div className={styles.total}>{value.total}</div>
      </div>
    );
  } else {
    return (
      <div className={styles.card}>
        <div className={styles.amount}>{value.amount}</div>
        <div className={styles.name}>{value.name}</div>
        <div className={styles.price}>{value.price}</div>
      </div>
    );
  }
}
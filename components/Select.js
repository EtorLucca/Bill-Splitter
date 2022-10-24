import styles from "../styles/Home.module.css"

export default function Select({ onChange, product }) {

  return(
    <select id={product.id} onChange={onChange} defaultValue="0" className={styles.select}>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="1/2">1/2</option>
      <option value="1/3">1/3</option>
      <option value="1/4">1/4</option>
      <option value="1/5">1/5</option>
      <option value="1/6">1/6</option>
      <option value="1/7">1/7</option>
      <option value="1/8">1/8</option>
      <option value="1/9">1/9</option>
      <option value="1/10">1/10</option>
    </select>
  );
}
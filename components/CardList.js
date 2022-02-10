import styles from "../styles/cardList.module.css";
import Card from "./Card";

const CardList = () => {
  return (
    <div className={styles.contaier}>
      <h3 className={styles.title}>Product Name </h3>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <Card />
      </div>
      <h3 className={styles.title}>Product Name </h3>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <Card />
      </div>
    </div>
  );
};

export default CardList;

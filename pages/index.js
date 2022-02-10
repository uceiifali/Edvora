import Head from "next/head";
import CardList from "../components/CardList";
import Filter from "../components/Filter";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.contaier}>
      <Head>
        <title>Edvora Assessment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Filter />
      <div className={styles.titleContaier}>
        <h1 className={styles.title}>Edvora</h1>
        <h3 className={styles.name}>Products</h3>
        <CardList />
      </div>
    </div>
  );
}

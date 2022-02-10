import Image from "next/image";
import styles from "../styles/card.module.css";
import allData from "../data";
import { useState } from "react";
const Card = () => {
  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "r") {
      setIndex(index !== 15 ? index + 1 : 0);
    }
  };
  return (
    <div className={styles.container}>
      {allData.map(function (d, idx) {
        return (
          <div
            key={idx}
            className={styles.cardContainer}
            style={{ transform: `translateX(${-250 * index}px)` }}
          >
            <div className={styles.left}>
              <Image
                src={d.image}
                className={styles.img}
                width={35}
                height={35}
                objectFit="contain"
              />
              <p className={styles.locat}>{d.address.state}</p>
              <p className={styles.desc}>{d.discription}</p>
            </div>

            <div className={styles.right}>
              <h3 className={styles.name}>{d.product_name}</h3>
              <h5 className={styles.brand}>{d.brand_name}</h5>
              <p className={styles.price}> $ {d.price}</p>
              <p className={styles.date}>Date: {d.date}</p>
            </div>
          </div>
        );
      })}
      <div
        className={styles.arrContainer}
        style={{ right: "0" }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/arrowr.png"
          width={30}
          height={30}
          objectFit="contain"
          className={styles.arr}
        />
      </div>
    </div>
  );
};

export default Card;

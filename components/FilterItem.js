import styles from "../styles/filterItem.module.css";
import Option from "./Option";
import allData from "../data";

const FilterItem = () => {
  return (
    <div className={styles.container}>
      <select className={styles.select}>
        {allData.map(function (d, idx) {
          return <Option title={d.brand_name} />;
        })}
      </select>
      ;
    </div>
  );
};

export default FilterItem;

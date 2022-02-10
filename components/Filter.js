import styles from "../styles/filter.module.css";
import FilterItem from "./FilterItem";
import FilterItem2 from "./FilterItem2";
import FilterItem3 from "./FilterItem3";

const Filter = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Filters</h4>
      <div className={styles.border}></div>

      <div>
        <FilterItem />
        <FilterItem2 />
        <FilterItem3 />
      </div>
    </div>
  );
};

export default Filter;

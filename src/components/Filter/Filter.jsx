import styles from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ handleFilter }) => {
  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.title}>Find contacts by name</h3>
      <input
        className={styles.input}
        placeholder="Find contact"
        onChange={handleFilter}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

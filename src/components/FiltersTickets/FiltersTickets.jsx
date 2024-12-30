import styles from './FiltersTickets.module.css';

const FiltersTickets = ({ filters, setFilters }) => {
  const handleClickInput = (stops) => {
    setFilters((prev) => {
      if (prev.includes(stops)) {
        return prev.filter((filter) => filter !== stops);
      } else {
        return [...prev, stops];
      }
    });
  };

  return (
    <div>
      <h4>Количество пересадок</h4>
      <div className={styles.filter__container}>
        <div className={styles.filter__block}>
          <input type="checkbox" checked={filters.length === 0} onChange={() => setFilters([])} />
          <p>Все</p>
        </div>
        <div className={styles.filter__block}>
          <input
            type="checkbox"
            checked={filters.includes(0)}
            onChange={() => handleClickInput(0)}
          />
          <p>Без пересадок</p>
        </div>
        <div className={styles.filter__block}>
          <input
            type="checkbox"
            checked={filters.includes(1)}
            onChange={() => handleClickInput(1)}
          />
          <p>1 пересадка</p>
        </div>
        <div className={styles.filter__block}>
          <input
            type="checkbox"
            checked={filters.includes(2)}
            onChange={() => handleClickInput(2)}
          />
          <p>2 пересадки</p>
        </div>
        <div className={styles.filter__block}>
          <input
            type="checkbox"
            checked={filters.includes(3)}
            onChange={() => handleClickInput(3)}
          />
          <p>3 пересадки</p>
        </div>
      </div>
    </div>
  );
};

export default FiltersTickets;

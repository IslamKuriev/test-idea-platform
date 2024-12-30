import styles from './CurrencyTickets.module.css';

const CurrencyTickets = ({ currency, setCurrency }) => {
  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  return (
    <div className={styles.currency__container}>
      <button
        className={`${styles.currency__button} ${
          currency === 'RUB' ? styles.currency__button__active : ''
        }`}
        onClick={() => handleCurrencyChange('RUB')}>
        RUB
      </button>
      <button
        className={`${styles.currency__button} ${
          currency === 'USD' ? styles.currency__button__active : ''
        }`}
        onClick={() => handleCurrencyChange('USD')}>
        USD
      </button>
      <button
        className={`${styles.currency__button} ${
          currency === 'EUR' ? styles.currency__button__active : ''
        }`}
        onClick={() => handleCurrencyChange('EUR')}>
        EUR
      </button>
    </div>
  );
};

export default CurrencyTickets;

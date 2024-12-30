import styles from './Card.module.css';

const Card = ({ tickets, currency, exchangeRates, isLoading }) => {
  const convertPrice = (price) => {
    return (price * exchangeRates[currency]).toFixed();
  };
  if (isLoading) {
    return <>Загрузка...</>;
  }
  return (
    <>
      {tickets.map((item, i) => (
        <div className={styles.card} key={i}>
          <div>
            <h3 className={styles.company__name}>
              Turkish <br /> Airlines
            </h3>
            <button className={styles.btn__buy}>
              Купить за <br /> {convertPrice(item.price)} {currency}
            </button>
          </div>
          <div>
            <div className={styles.title__time}>{item.departure_time}</div>
            <span>
              {item.origin}, <span>{item.origin_name}</span>
            </span>
            <br />
            <span className={styles.flight__data}>{item.departure_date}</span>
          </div>
          <div className={styles.stops}>{item.stops} Пересадок</div>
          <div>
            <div className={styles.title__time}>{item.arrival_time}</div>
            <span>
              {item.destination}, <span>{item.destination_name}</span>
            </span>
            <br />
            <span className={styles.flight__data}>{item.arrival_date}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;

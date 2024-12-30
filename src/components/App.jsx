import { useState, useEffect } from 'react';
import Card from './Card/Card';
import CurrencyTickets from './CurrencyTickets/CurrencyTickets';
import FiltersTickets from './FiltersTickets/FiltersTickets';
import logo from '/public/airplane.png';

function App() {
  const [filters, setFilters] = useState([]);
  const [dataTickets, setDataTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [currency, setCurrency] = useState('RUB');
  const [isLoading, setIsLoading] = useState(true);
  const [exchangeRates, setExchangeRates] = useState({
    RUB: 1,
    USD: 0.013,
    EUR: 0.011,
  });

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://672f4a27229a881691f27354.mockapi.io/tickets?&sortBy=price&order=desc`,
      );
      const data = await response.json();
      setDataTickets(data);
      setFilteredTickets(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredTickets(dataTickets);
    } else {
      setFilteredTickets(dataTickets.filter((ticket) => filters.includes(ticket.stops)));
    }
  }, [filters, dataTickets]);

  return (
    <div className="app">
      <div className="logo">
        <img style={{ width: '30px' }} src={logo} alt="Logo" />
      </div>
      <div className="main__content">
        <div className="option__block">
          <CurrencyTickets currency={currency} setCurrency={setCurrency} />
          <FiltersTickets filters={filters} setFilters={setFilters} />
        </div>
        <div className="card__container">
          <Card
            isLoading={isLoading}
            tickets={filteredTickets}
            currency={currency}
            exchangeRates={exchangeRates}
          />
        </div>
      </div>
    </div>
  );
}
export default App;

import { useState } from 'react'
import { findEuro } from './helpers/findEuro';
import { normalizeCurrency } from './helpers/normalizeCurrency';
import useCurrencyData from './hooks/useCurrencyData';
import CurrencyData from './components/CurrencyData/CurrencyData';
import classNames from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames('navbar-item', {
    'is-active': isActive,
  });

function App() {
  
  const { currencies, loading, error } = useCurrencyData();
  const [showRequisites, setShowRequisites] = useState<boolean>(false);
  const [showSchedule, setShowSchedule] = useState<boolean>(false);

  const handleRequisitesClick = () => {
    setShowRequisites(!showRequisites);

    if (showSchedule) {
      setShowSchedule(!showSchedule);
    }
  };

  const handleScheduleClick = () => {
    setShowSchedule(!showSchedule);

    if (showRequisites) {
      setShowRequisites(!showRequisites);
    }
  };

  if (loading) {
    return <div className='text-center'>Завантаження даних...</div>;
  }
  
  if (error !== null) {
    return (
      <div exchange-container>
        Помилка при завантажені данних: {error.message}.{' '}
        <a
          href='https://minfin.com.ua/ua/company/monobank/currency/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-blue-700 underline'
        >
          Подивитись поточний курс Монобанку на сайті minfin.com.ua
        </a>
      </div>
    );
  }

  const euroRate = findEuro(currencies);

  if (euroRate) {
    normalizeCurrency(euroRate);

    return (
      <>
        <div className='mb-2 bg-slate-800 text-white flex justify-center items-center'>
          <CurrencyData euroData={euroRate} />
        </div>
        <div className='text-center mb-2'>
          <div className='mb-2'>
            <b>Модуль:</b>
            <br />
            €150 = {Math.round(150 * euroRate!.rateSell)} грн
          </div>
          <div className='mb-2'>

          <NavLink to="/payment" className={getLinkClass}>
            <button
                onClick={handleRequisitesClick}
                className={`mr-2 text-sm text-gray-800 py-2 px-4 border border-gray-200 rounded ${
                  showRequisites ? 'hover:bg-white bg-gray-100' : 'bg-white hover:bg-gray-100 shadow'
                }`}
              >
                Реквізити
            </button>
          </NavLink>
            
          <NavLink to="/schedule" className={getLinkClass}>
            <button
                onClick={handleScheduleClick}
                className={`text-sm text-gray-800 py-2 px-4 border border-gray-200 rounded ${
                  showSchedule ?  'hover:bg-white bg-gray-100' : 'bg-white hover:bg-gray-100 shadow'
                }`}
              >
                Розклад
            </button>
          </NavLink>
        </div>
        </div>
        <Outlet />
      </>
    )
  }
}

export default App;

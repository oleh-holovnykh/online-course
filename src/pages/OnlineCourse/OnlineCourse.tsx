import React, { useState } from 'react'
import { Schedule } from '../../components/Schedule';
import { findEuro } from '../../helpers/findEuro';
import { normalizeCurrency } from '../../helpers/normalizeCurrency';
import useCurrencyData from '../../hooks/useCurrencyData';
import modules from '../../data/onlineModuleSchedule.json';
import practices from '../../data/onlinePracticeSchedule.json';
import retreats from '../../data/onlineRetreatSchedule.json';
import Requisites from '../../components/Requisites/Requisites';
import CurrencyData from '../../components/CurrencyData/CurrencyData';

export const OnlineCourse: React.FC = () => {
  const { currencies, loading, error } = useCurrencyData();
  const [showRequisites, setShowRequisites] = useState<boolean>(false);
  const [showSchedule, setShowSchedule] = useState<boolean>(true);

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
            <b>Група практики:</b> 600 грн 
          </div>
          <div className='mb-2'>
            <button
              onClick={handleRequisitesClick}
              className={`mr-2 text-sm text-gray-800 py-1 px-2 border border-gray-200 rounded ${
                showRequisites ? 'hover:bg-white bg-gray-100' : 'bg-white hover:bg-gray-100 shadow'
              }`}
            >
              {showRequisites ? 'Cховати реквізити' : 'Показати реквізити'}
            </button>

            <button
              onClick={handleScheduleClick}
              className={`text-sm text-gray-800 py-1 px-2 border border-gray-200 rounded ${
                showSchedule ?  'hover:bg-white bg-gray-100' : 'bg-white hover:bg-gray-100 shadow'
              }`}
            >
              {showSchedule ? 'Cховати розклад' : 'Показати розклад'}
            </button>
          </div>

        </div>
        {showRequisites && <Requisites />}
        
        {showSchedule && (
          <Schedule 
            modules={modules}
            practices={practices}
            retreats={retreats}
          />)}
      </>
    )
  }
}

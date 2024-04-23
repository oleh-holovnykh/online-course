import React from 'react';
import { Currency } from '../../types/currency';

type CurrencyDataProps = {
  euroData: Currency
}

const CurrencyData: React.FC<CurrencyDataProps> = ({euroData}) => {
  return (
    <table className='border-separate border-spacing-x-2'>
      <tbody>
        <tr>
          <td></td>
          <td className='text-gray-400'>Sell</td>
        </tr>
        <tr>
          <td>EUR</td>
          <td>{euroData?.rateSell}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default CurrencyData;

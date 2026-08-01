import React from 'react'
import { CopyButton } from '../CopyButton';
import ie from '../../data/individualEntrepreneur.json';
// import { createSchedule } from '../../helpers/сreateSchedule';
// import modules from '../../data/onlineModuleSchedule.json';
// import practices from '../../data/onlinePracticeSchedule.json';
// import retreats from '../../data/onlineRetreatSchedule.json';

const Requisites: React.FC = () => {

  // const nextGropuDate = new Date(createSchedule(modules, practices,retreats).filter(group => group.type === 'module')[0].startDate);
  // const nextGrupDateToPrint = `${nextGropuDate.getDate().toString().padStart(2, '0')}.${(nextGropuDate.getMonth() + 1).toString().padStart(2, '0')}`

  return (
    <div className='text-left w-max mt-2 mx-auto text-gray-600'>
    <br />
    ЗВЕРНІТЬ УВАГУ, ВАЖЛИВО:
    <br />
    🔥ПРАВИЛЬНО ВКАЗАТИ ПРИЗНАЧЕННЯ ПЛАТЕЖУ
    <br />
    🔥ПЕРЕКАЗ ЛИШЕ З КАРТКИ ПРИВАТНОЇ ОСОБИ, НЕ ВІД ФОП АБО ОРГАНІЗАЦІЇ
    <br/>
    🧾 ✅ <b>ПІСЛЯ ОПЛАТИ ПРИШЛІТЬ, БУДЬ ЛАСКА, СКРІНШОТ КВИТАНЦІЇ</b>
    <br/>
    <br/>
    <p className="bg-yellow-100 p-2 inline-block">РЕКВІЗИТИ</p>
    <br/>
    {ie.recipient} <CopyButton value={ie.recipient} />
    <br />
    IBAN: {ie.iban} <CopyButton value={ie.iban} />
    <br />
    ІПН/ЄДРПОУ: {ie.id} <CopyButton value={ie.id} />
    <br />
    Акціонерне товариство: {ie.bank} <CopyButton value={ie.bank} />
    <br />
    МФО: {ie.mfo} <CopyButton value={ie.mfo} />
    <br />
    ОКПО Банку: {ie.okpo} <CopyButton value={ie.okpo} />
    <br />
    <br />
    🔸Призначення платежу:
    <br />
    {`"За консультаційній послуги з психології відносин *вкажіть дату*"`} <CopyButton value={`За консультаційній послуги з психології відносин *вкажіть дату*`} /> 
  </div>
  )
}

export default Requisites;

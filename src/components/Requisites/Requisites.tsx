import React from 'react'
import { CopyButton } from '../CopyButton';
import ie from '../../data/individualEntrepreneur.json';
import { createSchedule } from '../../helpers/сreateSchedule';
import modules from '../../data/onlineModuleSchedule.json';
import practices from '../../data/onlinePracticeSchedule.json';
import retreats from '../../data/onlineRetreatSchedule.json';

const Requisites: React.FC = () => {

  const nextGropuDate = new Date(createSchedule(modules, practices,retreats).filter(group => group.type === 'module')[0].startDate);
  const nextGrupDateToPrint = `${nextGropuDate.getDate().toString().padStart(2, '0')}.${(nextGropuDate.getMonth() + 1).toString().padStart(2, '0')}`

  return (
    <div className='text-left w-max mt-2 mx-auto text-gray-600'>
    <p className="bg-yellow-100 p-2 inline-block">За модуль</p>
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
    {`"За навчання ${nextGrupDateToPrint}"`} <CopyButton value={`За навчання ${nextGrupDateToPrint}`} /> 
    <br />
    <br />
    🔥Важливо вказати призначення платежу
    <br />
    🔥Важливо, щоб платіж був від фізособи.
    <br />А не від ФОП, чи організації
    <br/>
    <br/>
    <p className="bg-yellow-100 p-2 inline-block">За групу практики</p>
    <br/>
    5363 5421 0223 6842 <CopyButton value={'5363542102236842'} />
  </div>
  )
}

export default Requisites;
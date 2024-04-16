import React from 'react';
import ReactDOM from 'react-dom/client';

import Saudacao from './components/Saudacao';

import Pai from './components/Pai';
import Filho from './components/Filho';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rand = (num) => Math.floor(Math.random() * num);
const hourMinutes = () => {
  const data = new Date();
  const hour = data.getHours();

  if (hour >= 0 && hour <= 12) return 'Bom dia';
  if (hour >= 13 && hour <= 18) return 'Boa tarde';
  if (hour >= 19 && hour <= 23) return 'Boa noite';
};

const nomes = ['Pedro', 'Paulo', 'Carla'];

root.render(
  <>
    <div>
      <Saudacao tipo={hourMinutes()} nome={nomes[rand(nomes.length)]} />
    </div>

    <div>
      <Pai nome="Paulo" sobrenome="Silva">
        <Filho nome={nomes[0]} />
        <Filho nome={nomes[1]} />
        <Filho nome={nomes[2]} />
      </Pai>
    </div>
  </>,
);

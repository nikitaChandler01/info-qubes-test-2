import React from "react";
import ReactDOM from "react-dom/client";

import App from './App';
const items = [
  {
    name: 'Head & Shoulders',
    description: 'Мужской шампунь 100 в 1',
    price: '70',
    rating: '5',
  },
  {
    name: 'Голова & плечи',
    description: 'Результат программы импортозамещения',
    price: '49',
    rating: '5',
  },
  {
    name: 'Nivea men',
    description: 'Мужской шампунь ',
    price: '100',
    rating: '4',
  },
  {
    name: 'Axe',
    description: 'Гель для душа',
    price: '30',
    rating: '3',
  },
  {
    name: 'Тоже шампунь',
    description: 'Тоже шампунь 2 в 1',
    price: '95',
    rating: '4',
  },
  {
    name: 'Clear men',
    description: 'Никто такое не покупает',
    price: '45',
    rating: '4',
  },
  {
    name: 'Kapous Professional',
    description: 'Вроде профессиональный шампунь',
    price: '110',
    rating: '3',
  },
  {
    name: 'KeraSays',
    description: 'Кера говорит',
    price: '20',
    rating: '1',
  },
  {
    name: 'Хозяйственное мыло',
    description: 'Кожа скажет спасибо',
    price: '1',
    rating: '5',
  },
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App items={items}/>);

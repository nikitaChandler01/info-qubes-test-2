import React, { useState } from 'react';
import './styles/App.css'
import Row from './components/Row.js';

function App(props) {
  const initData = [...props.items]
  const [state, sortItems] = useState({ data: initData, sorted: '' });
  const switchAscDesc = (e) => {
    e.preventDefault();
    const compareFunc = (category, parameter) => {
      if (parameter === '' || parameter === 'DESC') {
        const sortedArray = initData.sort((item1, item2) => item1[category] - item2[category]);
        sortItems({ data: [...sortedArray], sorted: 'ASC' })
      } else if (parameter === 'ASC') {
        const sortedArray = initData.sort((item1, item2) => item2[category] - item1[category]);
        sortItems({ data: [...sortedArray], sorted: 'DESC' })
      }
    }
    const mapping = { // делаем диспетчеризацию по ключу (через функции)
      '': compareFunc,
      'DESC': compareFunc,
      'ASC': compareFunc,
    }

    // достаем id элемента и сортируем по нему (он выбранный критерий)
    mapping[state.sorted](e.target.id, state.sorted);
  }
  // добавил кнопку сортировки по рейтингу для демонстрации
  return (
    <div>
      <table>
        <tr>
          <td className="titles">Name</td>
          <td className="titles">Description</td>
          <td className="titles">Price</td>
          <td className="titles">Rating</td>
        </tr>
        {state.data.map((item, index) => {
          return <Row key={index} item={item}/>
        })}
      </table>
      <div className="btn-group">
        <button className='button' id="price" onClick={switchAscDesc}>Сортировка по цене</button>
        <button className='button' id="rating" onClick={switchAscDesc}>Сортировка по рейтингу</button>

      </div>
    </div>
  )
}

export default App;
import React, { useState } from 'react';
import cn from 'classnames';
import './styles/App.css'

function App(props) {
  const initData = [...props.items]
  const [state, sortItems] = useState(initData);

  const sortByInc = () => {
    const sorted = initData.sort((item2, item1) => item1.price > item2.price ? 1 : -1);
    sortItems(sorted);
  }
  const sortByDec = () => {
    const sorted = initData.sort((item2, item1) => item1.price > item2.price ? 1 : -1);
    sortItems(sorted);
  }
  return (
    <div>
      <table>
        <tr>
          <td className="titles">Name</td>
          <td className="titles">Description</td>
          <td className="titles">Price</td>
          <td className="titles">Rating</td>
        </tr>
        {state.map((item) => {
          const itemPrice = item.price;
          return <tr className={cn({
            "red": itemPrice > 90,
            "green": itemPrice < 50,
            "yellow": itemPrice > 50 && itemPrice < 90,
          })}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.rating}</td>
          </tr>
        })}
      </table>
      <div className="btn-group">
      <button className='button' onClick={sortByInc}>Сортировать по возрастанию цены</button>
      <button className='button' onClick={sortByDec}>Сортировать по убыванию цены</button>
    </div>
    </div>
  )
}

export default App;
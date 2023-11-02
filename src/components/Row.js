import React from 'react';
import cn from 'classnames';
import StarIcon from '@mui/icons-material/Star';

const Row = (props) => {
  const { item } = props;
  const itemPrice = item.price;
  const multiply = Array.from({length: item.rating})
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td className={cn({
        "red": itemPrice > 90,
        "green": itemPrice < 50,
        "yellow": itemPrice > 50 && itemPrice < 90,
      })}>{item.price}</td>
      <td>{multiply.map((item, index) => {
        return <StarIcon key={index} style={{
          color: '#ffb42a',
        }} />
      })}</td>
    </tr>
  );
}

export default Row;

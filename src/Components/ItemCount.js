import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'


const ItemCount = () => {
  const initial = 1; 
  const stock = 7; 

  
  const [qty, setQty] = useState(initial);

  const onAdd = (qty) => {
    alert(`Se agregaron ${qty} productos correctamente`);
  };

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__qty">{qty}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      <Button
        variant="warning"
        onClick={() => onAdd(qty)}
        disabled={stock === 0 ? true : null}
      >
        Añadir Productos
      </Button>
    </div>
  );
};

export default ItemCount;

import React, { useState } from 'react';
import flechaAbajo from "/src/assets/img/caret-abajo.png";
import flechaArriba from "/src/assets/img/caret-flecha-hacia-arriba.png";
import "./ProductSorting.css"

function ProductSortingBar({ handleSort }) {
    const [activeField, setActiveField] = useState(null);
    const [imageSrc, setImageSrc] = useState(flechaAbajo); 
    const [order, setOrder] = useState('asc'); 

    const handleClick = (field) => {
      // Cambiar el estado del campo activo
      setActiveField(field);

      // Cambiar el orden
      const newOrder = order === 'asc' ? 'desc' : 'asc';
      setOrder(newOrder);

      // Cambiar la flechilla de organizacion según el campo activo y el orden
      setImageSrc(newOrder === 'asc' ? flechaArriba : flechaAbajo);

      // Llamar a la función de ordenamiento
      handleSort(field, newOrder);
    };
  
    return (
      <div className="product-sorting-general">
        <div className="product-categories">
          <button
            className={activeField === 'code' ? 'active' : ''}
            onClick={() => handleClick('code')}
          >
            Código
          </button>
          <button
            className={activeField === 'name' ? 'active' : ''}
            onClick={() => handleClick('name')}
          >
            Nombre
          </button>
        
          <button
            className={activeField === 'price' ? 'active' : ''}
            onClick={() => handleClick('price')}
          >
            Precio
          </button>
          <button
            className={activeField === 'stock' ? 'active' : ''}
            onClick={() => handleClick('stock')}
          >
            Stock
          </button>
          <img
            className={`image-format ${activeField === 'image' ? 'active' : ''}`}
            src={imageSrc} // Usar la imagen dinámica
            alt="caret-abajo"
            onClick={() => handleClick('image')}
          />
        </div>
      </div>
  );
}

export default ProductSortingBar;

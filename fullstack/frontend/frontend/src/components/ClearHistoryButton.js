import React from 'react';
import API from '../api'; 

function ClearHistoryButton({ onClear }) {
  const handleClick = () => {

    API.post('history/clear/')
      .then(() => {
        if (onClear) onClear(); 
      })
      .catch(err => {
        console.error('Ошибка при удалении истории:', err);
        alert('Произошла ошибка при удалении истории.');
      });
  };

  return (
    <button onClick={handleClick}>
      Очистить историю
    </button>
  );
}

export default ClearHistoryButton;

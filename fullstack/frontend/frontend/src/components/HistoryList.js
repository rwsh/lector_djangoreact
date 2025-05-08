import React, { useEffect, useState } from 'react';
import API from '../api'; 

function HistoryList() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    API.post('history/')
      .then(res => setHistory(res.data))
      .catch(err => console.error('Ошибка при получении истории:', err));
  }, []);

  return (
    <div>
      <b>История вычислений</b>
      <ul>
        {history.map(entry => (
          <li key={entry.id}>
            {entry.x} ^ {entry.y} = {entry.result}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryList;

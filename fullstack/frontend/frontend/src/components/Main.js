import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HistoryList from './HistoryList';
import ClearHistoryButton from './ClearHistoryButton';

function Main() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleClear = () => {
    setRefreshKey(prev => prev + 1); // заставит HistoryList перезапросить
  };

  return (
    <div>
      <div>Шаблонное приложение React.</div>
      <Link to="/calc">Вычисление на backend</Link>
      <br /><br />
      <ClearHistoryButton onClear={handleClear} />
      <HistoryList key={refreshKey} />
    </div>
  );
}

  export default Main;
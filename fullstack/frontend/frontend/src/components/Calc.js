import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import API from '../api'; // axios с baseURL

function ResultComponent({ x, y }) {
    const [data, setData] = useState([]);
  
    const fetchData = (x, y) => {
      API.post('power/', { x: x, y: y })  
        .then(response => setData(response.data))
        .catch(error => console.error('Ошибка при запросе:', error));
    };

    useEffect(() => {
      fetchData(x, y);
    }, [x, y]); 
  
    return (
      <div>
          Результат: {data.power}
      </div>
    );
  }
  
  function Calc() {
    const [input_x, setInput_x] = useState(2);
    const [input_y, setInput_y] = useState(3);
 
    const [submitted, setSubmitted] = useState(null);

    const handleChange1 = (e) => {
      setInput_x(parseFloat(e.target.value));
    };
  
    const handleChange2 = (e) => {
      setInput_y(parseFloat(e.target.value));
    };
  
    const handleSubmit = () => {
      const parsedX = parseFloat(input_x);
      const parsedY = parseFloat(input_y);
    
      if (isNaN(parsedX) || parsedX <= 0 || isNaN(parsedY) || parsedY <= 0) {
        alert('Введите положительные числа!');
        return;
      }
    
      setSubmitted({ x: parsedX, y: parsedY });
    };
  
    return (
      <div>
        <label>Вычисление степени x^y</label><br />
        <label>Введите x:</label>
        <input
          type="number"
          value={input_x}
          onChange={handleChange1}
        />
        <br />
        <label>Введите y:</label>
        <input
          type="number"
          value={input_y}
          onChange={handleChange2}
        />
        <br />
        <button onClick={handleSubmit}>Вычислить</button>
        <br/><br/>
          <div>
          {submitted && (
            <ResultComponent x={submitted.x} y={submitted.y} />
          )}
        </div>
        <Link to="/">На главную</Link>
      </div>
    );
  }
  
  export default Calc;
  
import React, { useState } from 'react';
import Clock from './Clock'
import './ClockApp.css'

const ClockApp = () => {
  const [clocks, setClocks] = useState([]);  // Список часов
  const [name, setName] = useState('');      // Название (например, "Moscow")
  const [timezone, setTimezone] = useState('');  // Временная зона (например, "Europe/Moscow")

  // Функция для добавления часов
  const addClock = () => {
    if (name && timezone) {
      setClocks([...clocks, { id: Date.now(), name, timezone }]);
      setName('');        // Сброс имени
      setTimezone('');    // Сброс часового пояса
    }
  };

  // Функция для удаления часов
  const removeClock = (id) => {
    setClocks(clocks.filter(clock => clock.id !== id));
  };

  return (
    <div>
      <h1>Мировые Часы</h1>
      <div>
        <input 
          type="text" 
          placeholder="Название" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Временная зона (например, Europe/Moscow)" 
          value={timezone} 
          onChange={(e) => setTimezone(e.target.value)} 
        />
        <button onClick={addClock}>Добавить</button>
      </div>

      <div>
        {clocks.map(clock => (
          <Clock key={clock.id} clock={clock} removeClock={removeClock} />
        ))}
      </div>
    </div>
  );
};

export default ClockApp;

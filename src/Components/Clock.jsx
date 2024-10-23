import moment from 'moment-timezone'
import { useState, useEffect } from 'react';
import './Clock.css';

const Clock = ({ clock, removeClock }) => {
  const [time, setTime] = useState(moment.tz(clock.timezone).format('HH:mm:ss'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment.tz(clock.timezone).format('HH:mm:ss'));  // Обновляем время каждую секунду с использованием moment.js
    }, 1000);

    return () => {
      clearInterval(intervalId);  // Очищаем интервал при удалении часов
    };
  }, [clock.timezone]);

  return (
    <div>
      <h3>{clock.name}</h3>
      <div>{time}</div>
      <button onClick={() => removeClock(clock.id)}>Удалить</button>
    </div>
  );
};

export default Clock

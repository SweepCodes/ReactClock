/* React Clock
   A Simple React app to display the time
   Made By: Abdulla Jamal
   Last Updated: 08-10-2024
*/
import { useState, useEffect } from 'react';
import Clock from './Clock';
import './App.css';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const Id = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(Id);
  }, []);

  return (
    <div>
      <Clock time={currentTime} />
    </div>
  );
}

export default App;



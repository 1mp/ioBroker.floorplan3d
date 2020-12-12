import React, {useEffect, useState} from 'react';

export default function Widget() {

  const [time, setTime] = useState(new Date());
  const [random, setRandom] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
      setRandom(Math.random());
    }, 1000);
  }, []);

  return (
    <div>
      Hello from React: {time.getSeconds()} {random}
    </div>
  );
}
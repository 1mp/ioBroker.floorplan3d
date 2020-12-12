import React, {useEffect, useState} from 'react';

export default function Widget() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      Hello from React: {time.getSeconds()}
    </div>
  );
}
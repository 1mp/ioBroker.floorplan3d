import React, {useState} from 'react';
import Widget from './domain/widget/widget';

export interface AppProps {
  data: { oid: string | undefined };
}

export function App({ data }: AppProps) {
  console.log('data', data);

  console.log('vis type', typeof vis);
  const [watch] = useState(data.oid);

  // vis.states.bind(data.oid_command + '.val', onChange);

  return (
    <>
      <Widget/>
      <br/>
      Watch: {watch}
    </>
  );
}
import React, {useState} from 'react';
import Widget from './domain/widget/widget';
import {visIsEnabled} from './vendor/vis';

export interface AppProps {
  data: { oid: string | undefined };
}

export function App({ data }: AppProps) {
  console.log('data', data);

  console.log('vis type', typeof vis);
  const [value, setValue] = useState<any>(visIsEnabled ? vis.states[data.oid + '.val'] : 0);

  if (visIsEnabled) {
    vis.states.bind(data.oid + '.val', (e: any, newVal: any, oldVal: any) => {
      console.log(e, newVal, oldVal);
      setValue(newVal);
    });
  }

  return (
    <>
      <Widget/>
      <br/>
      Watch: {data.oid} <br/>
      Value: {value}<br/>

      {value == 1 && (
        <div style={{ backgroundColor: '#F90', width: 200, height: 200 }}>
          LICHT
        </div>
      )}
    </>
  );
}
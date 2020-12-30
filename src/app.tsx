import React, {useEffect, useState} from 'react';
import {visIsEnabled} from './vendor/vis';
import {cx} from '@emotion/css';
import {cssBackgroundColor, cssHeightFull, cssWidthFull} from './domain/ui/style/css';
import ColorCode from './domain/ui/style/color-code';
import Main from "./domain/main/components/main";

export interface AppProps {
  data: { oid: string | undefined };
}

export function App({ data }: AppProps) {
  console.log('data', data);

  // TODO Die ganze Vis States dinger in einen Store legen? Damit man im dev auch einfach einen anderen Store laden kann???

  console.log('vis type', typeof vis);
  const [value, setValue] = useState<any>(visIsEnabled ? vis.states[data.oid + '.val'] : 0);

  if (visIsEnabled) {
    vis.states.bind(data.oid + '.val', (e: any, newVal: any, oldVal: any) => {
      console.log(e, newVal, oldVal);
      setValue(newVal);
    });
  }

  useEffect(() => {
    console.log('value changed ', value);
  }, [value]);

  return (
    <>
      <div
        className={cx(cssWidthFull, cssHeightFull, !visIsEnabled && cssBackgroundColor(ColorCode.GRAY_LIGHTER))}>
        <Main/>
      </div>
    </>
  );
}
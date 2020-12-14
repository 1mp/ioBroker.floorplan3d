import React, {useEffect, useState} from 'react';
import {visIsEnabled} from './vendor/vis';
import {cx} from '@emotion/css';
import {cssBackgroundColor, cssHeightFull, cssWidthFull} from './domain/ui/style/css';
import ColorCode from './domain/ui/style/color-code';
import FloorPlan from './domain/floorplan/floor-plan';

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
        <FloorPlan/>
      </div>

      {/*<div className={cx(cssMarginTop(100))}>*/}
      {/*  <br/>*/}
      {/*  Watch: {data.oid} <br/>*/}
      {/*  Value: {value}<br/>*/}

      {/*  {value == 1 && (*/}
      {/*    <div style={{ backgroundColor: '#F90', width: 200, height: 200 }}>*/}
      {/*      LICHT*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</div>*/}
    </>
  );
}
import React from 'react';
import Widget from './domain/widget/widget';

export interface AppProps {
  data: any;
}

export function App({ data }: AppProps) {
  console.log('data', data);

  return (
    <Widget/>
  );
}
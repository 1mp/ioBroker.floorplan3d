import './vendor';
import ReactDOM from 'react-dom';
import React from 'react';
import {App} from './app';
import {visIsEnabled} from './vendor/vis';

if (!visIsEnabled) {
  // We are in de mode, find app element and start react
  const element = document.getElementById('app')!;
  const defaultData = {};

  render(element, defaultData);

  // enable hot replacement
  module.hot && module.hot.accept('./app.tsx', () => {
    render(element, defaultData);
  });

} else {

  vis.binds['floorplan3d'] = {

    // TODO Was hiervon brauchen wir wirklich?
    // TODO Parameter übersetzten und schauen was wir für react brauchen (als Provider oder so)
    version: '0.0.1',
    createWidget: (widgetID: any, view: any, data: any, style: any) => {
      const $div = $('#' + widgetID);
      // if nothing found => wait
      if (!$div.length) {
        return setTimeout(function () {
          vis.binds['floorplan3d'].createWidget(widgetID, view, data, style);
        }, 100);
      }

      // Müssen wir eine registry haben für alle react apps?
      // Gibt es möglichkeiten das hier mehrere element gibt?
      render($div.get()[0], data);
    },
  };
}


function render(element: HTMLElement, data: any) {
  ReactDOM.render(
    <App data={data}/>,
    element,
  );
}
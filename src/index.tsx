import './vendor';
import ReactDOM from 'react-dom';
import React from 'react';
import {App} from './app';

// add translations for edit mode
$.extend(
  true,
  // TODO nicht mit ignore!!
  // @ts-ignore
  systemDictionary,
  {
    // Add your translations here, e.g.:
    // "size": {
    // 	"en": "Size",
    // 	"de": "Größe",
    // 	"ru": "Размер",
    // 	"pt": "Tamanho",
    // 	"nl": "Grootte",
    // 	"fr": "Taille",
    // 	"it": "Dimensione",
    // 	"es": "Talla",
    // 	"pl": "Rozmiar",
    // 	"zh-cn": "尺寸"
    // }
  }
);

// this code can be placed directly in floorplan3d.html
vis.binds["floorplan3d"] = {
  version: "0.0.1",
  showVersion: function () {
    if (vis.binds["floorplan3d"].version) {
      console.log('Version floorplan3d: ' + vis.binds["floorplan3d"].version);
      vis.binds["floorplan3d"].version = null;
    }
  },
  createWidget: function (widgetID: any, view: any, data: any, style: any) {
    let $div = $('#' + widgetID);
    // if nothing found => wait
    if (!$div.length) {
      return setTimeout(function () {
        vis.binds["floorplan3d"].createWidget(widgetID, view, data, style);
      }, 100);
    }

    render($div.get()[0]);

    // var text = '';
    // text += 'OID: ' + data.oid + '</div><br>';
    // text += 'OID value: <span class="floorplan3d-value">' + vis.states[data.oid + '.val'] + '</span><br>';
    // text += 'Color: <span style="color: ' + data.myColor + '">' + data.myColor + '</span><br>';
    // text += 'extraAttr: ' + data.extraAttr + '<br>';
    // text += 'Browser instance: ' + vis.instance + '<br>';
    // text += 'htmlText: <textarea readonly style="width:100%">' + (data.htmlText || '') + '</textarea><br>';
    //
    // $('#' + widgetID).html(text);
    //
    // // subscribe on updates of value
    // function onChange(_e: any, newVal: any, _oldVal: any) {
    //   $div.find('.template-value').html(newVal);
    // }
    // if (data.oid) {
    //   vis.states.bind(data.oid + '.val', onChange);
    //   //remember bound state that vis can release if didnt needed
    //   $div.data('bound', [data.oid + '.val']);
    //   //remember onchange handler to release bound states
    //   $div.data('bindHandler', onChange);
    // }
  }
};

vis.binds["floorplan3d"].showVersion();






function render(element: HTMLElement) {
  ReactDOM.render(
    <App/>,
    element,
  );
}

// if (module.hot) {
//   module.hot.accept('./app.tsx', () => {
//     render();
//   });
// }
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store} from './store';


import AppLayout from './src/app';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider
        store={store}
      >

      </Provider>
    );
  }
}
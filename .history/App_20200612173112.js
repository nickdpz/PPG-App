import React from 'react';
import { Provider } from 'react-redux';
import AppLayout from './src/app';

import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { createStore } from 'redux'
import CounterApp from './src/CounterApp'
import { Provider } from 'react-redux'
const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return { counter: state.counter + 1 }
        case 'DECREASE_COUNTER':
            return { counter: state.counter - 1 }
    }
    return state
}


const store = createStore(reducer)

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <View>
                    <Text>Hola</Text>
                </View>
            </Provider>
        );
    }
}

export default App
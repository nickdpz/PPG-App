// import React, { Component } from 'react';
// import { Provider } from 'react-redux';// Imports: Screens
// import { store } from './redux/store';
// import AppLayout from './src/app';

// export default class App extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <AppLayout />
//             </Provider>
//         );
//     }
// }
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendReducer from './FriendReducer';
import AppNavigator from './AppNavigator';

const store = createStore(friendReducer);
export default class App extends React.Component {
    constructor(props) {
        super(props)
        // ...
    }
    render() {
        return (
            <Provider store={store}>
                             <AppLayout />
             </Provider>
        )
    }
}
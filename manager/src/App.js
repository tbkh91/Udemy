import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAoFOToOaNyI0sVmkTVgfcfx1TUsI5In7Q',
            authDomain: 'udemy-manager-def16.firebaseapp.com',
            databaseURL: 'https://udemy-manager-def16.firebaseio.com',
            projectId: 'udemy-manager-def16',
            storageBucket: '',
            messagingSenderId: '1032137684248'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router';

class App extends Component {

    componentWillMount() {

        const config = {
            apiKey: "AIzaSyD_bli",
            authDomain: "bli.firebaseapp.com",
            databaseURL: "https://bli.firebaseio.com",
            projectId: "bli",
            storageBucket: "bli.appspot.com",
            messagingSenderId: "bla"
        };
        firebase.initializeApp(config);

    }

    render() {
        // with ReduxThunk, we need to also add arguments {}, applyMiddleware(ReduxThunk)
        // {} is for Server Side Rendering, containing the initial state
        // applyMiddleware is a store enhancer (tune up!)
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
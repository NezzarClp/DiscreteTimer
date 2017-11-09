import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import Main from './components/Main.react';

import reducers from './reducers';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            isReady: false,
        };

        this._store = createStore(reducers);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
        });

        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }

        return (
            <Provider store={this._store}>
                <Main />
            </Provider>
        );
    }
}

import React from 'react';

import { connect } from 'react-redux';

import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'native-base';

import MainAction from '../actions/MainAction';

import Timer from './Timer.react';
import TimerOptionsList from './TimerOptionsList.react';

function mapStateToProps(state) {
    return {
        page: state.main.page,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onStartPress: () => {
            dispatch(MainAction.startButtonPress());
        },
    };
}

export class Main extends React.Component {

    _renderStartPage() {
        return (
            <Button block onPress={this.props.onStartPress}>
                <Text>{'START'}</Text>
            </Button>
        );
    }

    _renderTimerPage() {
        return (
            <Timer />
        );
    }

    render() {
        const { page } = this.props;
        const style = (page === 'LIST' ? styles.timerOptionsList : styles.container);

        return (
            <View style={style}>
                {(page === 'START') ? this._renderStartPage() : null}
                {(page === 'MAIN') ? this._renderTimerPage() : null}
                {(page === 'LIST') ? <TimerOptionsList /> : null}
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerOptionsList: {
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    }
});

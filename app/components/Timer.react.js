import React from 'react';

import { connect } from 'react-redux';

import { View, Vibration } from 'react-native';
import { Text, Button } from 'native-base';

function mapStateToProps(state) {
    return {
        isTimerStarted: state.timer.isTimerStarted,
        duration: state.timer.duration,
    };
}

export class Timer extends React.Component {

    componentDidMount() {
        Vibration.vibrate(5);
    }

    render() {
        return (
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <Button onPress={this.props.onStartPress}>
                    <Text>{'END'}</Text>
                </Button>
                <Button onPress={this.props.onStartPress}>
                    <Text>{'END'}</Text>
                </Button>
            </View>
        );
    }
}

export default connect()(Timer);

import React from 'react';

import { connect } from 'react-redux';

import { Vibration } from 'react-native';
import { Text, Button } from 'native-base';

export class Timer extends React.Component {

    componentDidMount() {
        Vibration.vibrate(5);
    }

    render() {
        return (
            <Button block onPress={this.props.onStartPress}>
                <Text>{'END'}</Text>
            </Button>
        );
    }
}

export default connect()(Timer);

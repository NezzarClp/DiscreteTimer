import React from 'react';

import { connect } from 'react-redux';

import { StyleSheet, View } from 'react-native';

import TimerOptions from './TimerOptions.react';

export class TimerOptionsList extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TimerOptions />
                <TimerOptions />
                <TimerOptions />
                <TimerOptions />
                <TimerOptions />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

export default connect()(TimerOptionsList);

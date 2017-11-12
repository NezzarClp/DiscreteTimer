import React from 'react';

import { connect } from 'react-redux';

import { StyleSheet, View } from 'react-native';

import TimerOptionContainer from './TimerOptionContainer.react';

function mapStateToProps(state) {
    return {
        optionsList: state.timerOptions.optionsList,
    };
}

export class TimerOptionsList extends React.Component {

    _renderTimerOptions() {
        const { optionsList } = this.props;
        const numOptions = optionsList.length;
        const timerOptions = [];

        for (let i = 0; i < numOptions; i++) {
            const { id } = optionsList[i];

            timerOptions.push(
                <TimerOptionContainer
                    key={`timerOption-${id}`}
                    id={id}
                />
            );
        }

        return timerOptions;
    }

    render() {
        return (
            <View style={styles.container}>
                {this._renderTimerOptions()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

export default connect(mapStateToProps)(TimerOptionsList);

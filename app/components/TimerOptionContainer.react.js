import React from 'react';

import { connect } from 'react-redux';

import TimerOption from './TimerOption.react';

import TimerOptionAction from '../actions/TimerOptionAction';

function mapStateToProps(state, ownProps) {
    const timerOption = state.timerOptions.optionsList.find((timerOption) => (
        timerOption.id === ownProps.id
    ));

    if (!timerOption) {
        console.error(state.timerOptions.optionsList[0].id, ownProps.id,
            state.timerOptions.optionsList[0].id === ownProps.id);
    }

    return {
        duration: timerOption.duration,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeOption: (id) => { dispatch(TimerOptionAction.removeOption(id)); }
    }
}

export class TimerOptionContainer extends React.Component {

    _handleRemovePressed = () => {
        const {
            id,
            removeOption
        } = this.props;

        removeOption(id);
    }

    render() {
        const { duration, id } = this.props;

        return (
            <TimerOption
                id={id}
                duration={duration}
                onRemovePressed={this._handleRemovePressed}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerOptionContainer);

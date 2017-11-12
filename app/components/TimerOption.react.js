import React from 'react';

import { connect } from 'react-redux';

import { StyleSheet, View } from 'react-native';
import { Text, Button, Icon } from 'native-base';

export class TimerOption extends React.Component {

    render() {
        const { duration, onRemovePressed } = this.props;

        return (
            <View style={styles.container}>
                <Button rounded style={styles.propButton}>
                    <Text>
                        {`Number of seconds: ${duration}`}
                    </Text>
                </Button>
                <Button rounded style={styles.removeButton} onPress={onRemovePressed}>
                    <Icon name='trash' />
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flexDirection: 'row',
    },
    propButton: {
        flex: 1,
        justifyContent: 'space-around',
    },
    removeButton: {
        marginLeft: 5,
    },
});

export default connect()(TimerOption);

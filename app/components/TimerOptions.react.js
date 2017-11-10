import React from 'react';

import { connect } from 'react-redux';

import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'native-base';

export class TimerOptions extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Button rounded>
                    <Text>
                        {'Hello world'}
                    </Text>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        margin: 20,
    },
});

export default connect()(TimerOptions);

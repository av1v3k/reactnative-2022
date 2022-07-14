import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentScreen = () => {
    const r = 2;
    return (<View>
        <Text style={styles.text}>Component - Screen {r}</Text>
    </View>);
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default ComponentScreen;

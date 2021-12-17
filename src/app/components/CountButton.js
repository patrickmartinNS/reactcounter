import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';

import styles from '../styles/CountButtonStyles';

const CountButton = () => {
    
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.fontSize32}>{count}</Text>
            <Button 
                title="Increment Count"
                onPress = {() => setCount(count+1)}
            />
            <Text>   </Text>
            <Button
                title="Decrement Count"
                onPress = {() => setCount(count-1)}
            />
            <StatusBar style="auto"/>
        </View>
    );
}

export default CountButton;
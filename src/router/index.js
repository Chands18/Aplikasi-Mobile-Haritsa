import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../pages';

const Stack = createStackNavigator();

const index = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default index

const styles = StyleSheet.create({})

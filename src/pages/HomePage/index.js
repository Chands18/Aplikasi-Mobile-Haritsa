import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../components/atoms'
import { Photo } from '../../components/atoms/Logo'

export default function HomePage() {
    return (
        <View style={styles.container}>
            <Logo/>
            <Photo/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    }
})

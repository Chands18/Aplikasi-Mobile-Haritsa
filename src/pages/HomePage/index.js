import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../components/atoms'
import { Photo } from '../../components/atoms/Logo'
import { Pickers } from '../../components/atoms/Picker'
import { Layout } from '../../components/molecules'

export default function HomePage() {
    return (
        <View style={styles.container}>
            <Logo/>
            <Photo/>
            <Pickers/>
            <Layout/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'dimgrey',
        justifyContent:'flex-start',
        alignItems:'center'
    }
})

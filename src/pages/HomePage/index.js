import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../components/atoms'
import { Photo } from '../../components/atoms/Logo'

export default function HomePage() {
    return (
        <View>
            <Logo/>
            <Photo/>
        </View>
    )
}

const styles = StyleSheet.create({

})

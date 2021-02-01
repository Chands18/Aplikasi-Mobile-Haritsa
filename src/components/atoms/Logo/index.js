import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {images} from '../../../assets'

export default function Logo() {
    return (
        <View>
            <Text>Logo</Text>
        </View>
    )
}

export const Photo = () => {
    return (
        <Image 
        source={images.img_Logo}
        />
    );
    }

const styles = StyleSheet.create({

})

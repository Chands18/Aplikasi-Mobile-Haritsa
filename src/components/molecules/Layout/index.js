import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import { DiscountCard } from '..'
import { SliderBox } from "react-native-image-slider-box";
import { images } from '../../../assets';

const dummiImage = [images.img_Logo,images.img_Logo]

const dummies = [
    {
        id:1,
        text:'abc'
    },
    {
        id:2,
        text:'def'
    },
    {
        id:3,
        text:'ghi'
    },
    {
        id:4,
        text:'jkl'
    },
]

export default function Layout() {
    const renderItem=({item,index})=>{
        return(
            <View style={{width:100,marginRight:20}}>

            <DiscountCard>
                <Text>{item.text}</Text>
            </DiscountCard>
            </View>
        )
    }
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Promo Di Bulan Ini</Text>
                    <View style={{marginTop:5, justifyContent:'flex-start',width:'100%'}}>
                        <FlatList scrollEnabled={true} data={dummies} horizontal style={{height:200}} renderItem={renderItem} keyExtractor={(item,index)=>index.toString()} />
                    </View>
                    <SliderBox style={{width:'50%'}} images={dummiImage} />
                    <View style={{flexDirection:'row',marginTop:20}}>
                        <View style={{backgroundColor:'purple',width: 400, height: 120, borderRadius:8}} />
                    </View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:20,
        paddingHorizontal:10,
        width: 420,
        height: '70%',
        backgroundColor: 'white',
    },
    text: {
        width: '100%',
        textAlign: 'left',
        fontWeight: 'bold'
    }
})


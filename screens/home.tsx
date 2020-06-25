import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Card from './winScoreCard'

export default function Home(){
    const [reviews, setReviews]=useState([
        {title:'how are you'},
        {title:'where are you'},
        {title:'what are you'}
    ])
return(
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <FlatList
            data={reviews}
            renderItem={({item})=>(
            <Card>
            <Text style={{backgroundColor:'pink',padding:40}}>
                {item.title}
            </Text>
            </Card>
            )}
            />
    </View>
)

}
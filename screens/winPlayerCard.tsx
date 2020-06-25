import React from 'react';
import { StyleSheet, View} from 'react-native';

export default function Card(props:any){
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
                </View>
        </View>
    )
}

const styles=StyleSheet.create({
    card:{
        borderWidth:0.25,
        borderColor:'black',
        backgroundColor:'#639080',
        marginHorizontal:1,
        marginVertical:1,
        width:104,
        height:50
    },
    cardContent:{
        marginHorizontal:4,
        marginVertical:8,
    }
})
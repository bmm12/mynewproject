import React from 'react';
import { StyleSheet, View} from 'react-native';

export default function Score(props:any){
    return (
        <View style={styles.card}>
            <View >
                {props.children}
                </View>
        </View>
    )
}

const styles=StyleSheet.create({
    card:{
        borderWidth:0.25,
        borderColor:'black',
        backgroundColor:'#fff',
        marginHorizontal:1,
        marginVertical:1,
        width:34,
        height:50
    },
    
})
import React from 'react';
import {  View} from 'react-native';
import styles from '../style';

export default function Score(props:any){
    return (
        <View style={styles.scorecard2}>
            <View >
                {props.children}
                </View>
        </View>
    )
}


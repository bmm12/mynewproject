import React from 'react';
import { View} from 'react-native';
import styles from '../style';

export default function Card(props:any){
    return (
        <View style={styles.scorecard1}>
            <View >
                {props.children}
                </View>
        </View>
    )
}


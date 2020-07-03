import React from 'react';
import { StyleSheet, View} from 'react-native';
import { inputStyle } from '../style';

const styles = StyleSheet.create(inputStyle);
export default function Score(props:any){
    return (
        <View style={styles.scorecard2}>
            <View >
                {props.children}
                </View>
        </View>
    )
}


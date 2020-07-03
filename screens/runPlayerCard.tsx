import React from 'react';
import { StyleSheet, View} from 'react-native';
import { inputStyle } from '../style';

const styles = StyleSheet.create(inputStyle);
export default function Card(props:any){
    return (
        <View >
            <View >
                {props.children}
                </View>
        </View>
    )
}

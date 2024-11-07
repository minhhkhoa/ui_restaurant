import React, { useState } from 'react'
import { View,TouchableOpacity,Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {colors,fontSizes} from '../constants'


function UIbutton(props) {
    let {title,press,isChecked} = props
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: isChecked ? colors.primary : null }]}
            onPress={press}
        >
            {
            isChecked&&<Ionicons style={styles.iconCheck} 
            name="checkmark-circle" size={32} 
            color="yellow" />
            }
            <Text style={{ color: isChecked ? 'black' : 'white', fontSize: 20 }}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    iconCheck:{
        position:'absolute',
        top:8,
        left:10
    },
    button: {
        height: 50,
        borderRadius: 20,
        width: "80%",
        borderWidth:2,
        borderColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
})

export default UIbutton
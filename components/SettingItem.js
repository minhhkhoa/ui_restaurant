import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { colors, fontSizes } from '../constants'
import {
    View, Text, Image, StyleSheet, TouchableOpacity, Linking, Switch
} from 'react-native'
import { Rating } from 'react-native-elements';

function SettingItem(props) {
    const [switchh, setSwitchh] = useState(false)

    let { iconLeft, settingName, placeholder, iconRight } = props
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingStart: 10 }}>
                <Ionicons name={iconLeft} size={25} />
                <Text style={{ fontSize: fontSizes.h4, paddingStart: 15}}>{settingName}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: fontSizes.h4, color: colors.placeHolder, paddingBottom: 5 }}>{placeholder}</Text>
                {iconRight.length > 0 ?
                    <TouchableOpacity onPress={()=>
                        alert('you press '+`${settingName}`)
                    }>
                        <Ionicons name={iconRight} size={30} />
                    </TouchableOpacity>
                    :
                    <Switch
                        trackColor={{ false: "#767577", true: "#FF4500" }} // Màu nền của switch Mô tả: Màu nền của switch.
                        //Kiểu: object với hai thuộc tính false và true
                        thumbColor={switchh ? "white" : "#f4f3f4"} // Màu chuyển của nút
                        onValueChange={() => setSwitchh(!switchh)}
                        value={switchh}
                    />}
            </View>
        </View>
    )
}

export default SettingItem
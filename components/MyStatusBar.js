import { View, Text, Platform } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Constants } from "expo-constants";

export default function MyStatusBar(props) {

    const backgroundColor = props.backgroundColor ? props.backgroundColor : '#fff'
    const statusBarHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 0

    return(
        <View style={{backgroundColor: backgroundColor, height: statusBarHeight}} >
            <StatusBar {...props} />
        </View>
    )
}
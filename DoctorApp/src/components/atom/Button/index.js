import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Button = ({type, title}) => {
    return (
        <View style={styles.container(type)}>
            <Text style={styles.text(type)}> {title} </Text>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (type) => (
        {
            backgroundColor: type === "secondary" ? "white" : "cyan",
            paddingVertical: 10,
            borderRadius: 10
        }),
    text: (type) => (
        {
            fontSize: 18,
            fontFamily: "Nunito-SemiBold",
            textAlign: "center",
            color: type === "secondary" ? "black" : "white"
        })
})
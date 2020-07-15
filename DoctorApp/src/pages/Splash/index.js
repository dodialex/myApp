import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets/illustration'

const Splash = () => {
    return (
        <View style={styles.page}>
            <ILLogo/>
            <Text style={styles.title}>Doctor App</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: { flex: 1, 
            alignItems: "center", 
            justifyContent: "center"},
    
    title: {fontSize: 20, 
            fontFamily: "Nunito-SemiBold", 
            color: "magenta", 
            marginTop: 20}

})

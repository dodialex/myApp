import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Button } from '../../components'
import { ILLogo, ILGetStarted } from '../../assets/illustration'

const GetStarted = () => {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <ILLogo/>
                <Text style={styles.title}>
                    Konsultasi dengan dokter jadi lebih mudah & fleksibel
                </Text>
            </View>   
            <View>
                <Button title="Get Started"/>
                <View style={{height: 16}}/>
                <Button type="secondary" title="Sign In"/>
            </View>
            
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: "space-between",
        flex: 1
    },
    title: {
        fontSize: 28,
        fontWeight: "600",
        color: "white",
        marginTop: 91
    }
})

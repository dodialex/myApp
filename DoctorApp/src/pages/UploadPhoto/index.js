import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Header, Button, Link, Gap } from '../../components'
import { ILNullPhoto } from '../../assets/illustration'
import { IconAdd } from '../../assets/icon'
import { colors, fonts } from '../../utils'

const UploadPhoto = () => {
    return (
        <View style={styles.page}>
            <Header title="Upload Photo"/>
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={ILNullPhoto} style={styles.avatar}/>
                        <IconAdd style={styles.addPhoto}/>
                    </View>
                    <Text style={styles.name}>Dodi Alexsander</Text>
                    <Text style={styles.job}>Noob Player Mobile Legend</Text>
                </View>

                <View>
                    <Button title="Upload and Continue"/>
                    <Gap height={30}/>
                    <Link title="Skip for This" align="center" size={16}/>
            </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 40,
        flex: 1,
        justifyContent: "space-between"
    },
    profile: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    avatar: {
        width: 110,
        height: 110
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: "center",
        justifyContent: "center"
    },
    addPhoto: {
        position: "absolute",
        bottom: 8,
        right: 6
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: "center"
    },
    job: {
        fontSize: 18,
        fontFamily: fonts.primary.Normal,
        textAlign: "center",
        color: colors.text.secondary,
        marginTop: 4
    }
})

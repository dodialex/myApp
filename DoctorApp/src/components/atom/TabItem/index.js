import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconDoctor, IconDoctorActive, IconHospitals, IconHospitalsActive, IconMessages, IconMessagesActive } from '../../../assets/icon'
import { colors, fonts } from '../../../utils'

const TabItem = ({title,active,onPress,onLongPress}) => {
    const Icon = () => {
        if (title === "Doctor") {
            return active ? <IconDoctorActive/> : <IconDoctor/>;
        }
        if (title === "Messages") {
            return active ? <IconMessagesActive/> : <IconMessages/>;
        }
        if (title === "Hospitals") {
            return active ? <IconHospitalsActive/> : <IconHospitals/>;
        }
        return <IconDoctor/>;
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon/>
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    text: (active) => (
        {
            fontSize: 12,
            color: active ? colors.text.menuActive : colors.text.menuInactive,
            fontFamily: fonts.primary[700],
            marginTop: 4
        }
    )
})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HomeProfile, DoctorCategory, Rated, NewsItem } from '../../components'

const Doctor = () => {
    return (
        <View>
            <HomeProfile/>
            <Text>Mau konsultasi dengan siapa hari ini?</Text>
            <DoctorCategory/>
            <DoctorCategory/>
            <DoctorCategory/>
            <DoctorCategory/>
            <Text>Top Rated Doctors</Text>
            <Rated/>
            <Rated/>
            <Rated/>
            <Text>Good News</Text>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({})

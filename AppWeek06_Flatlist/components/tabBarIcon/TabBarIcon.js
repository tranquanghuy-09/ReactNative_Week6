import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

const icons = {
    Screen01: {
        icon: require('../../assets/image/MenuIcon.png'),
        width: 23,
        height: 14,
    },
    Screen02: {
        icon: require('../../assets/image/HomeIcon.png'),
        width: 24,
        height: 24,
    },
    Screen03: {
        icon: require('../../assets/image/BackIcon.png'),
        width: 26,
        height: 25,
    },
};

export default function TabBarIcon({ route }) {
    const { icon, width, height } = icons[route.name];

    return <Image style={{ width, height }} source={icon} />;
}

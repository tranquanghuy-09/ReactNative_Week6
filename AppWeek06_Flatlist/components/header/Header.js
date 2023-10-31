import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';

const Header = ({ cartActive = false, moreActive = false, children }) => {
    const handleClickBack = () => console.log('Header back');
    const handleClickCart = () => console.log('Header cart');

    return (
        <View style={[styles.container, !!children || styles.spaceBetween]}>
            <Pressable onPress={handleClickBack} style={styles.icon}>
                <Image
                    style={styles.image}
                    source={require('../../assets/image/ant-design_arrow-left-outlined.png')}
                />
            </Pressable>
            {children || <Text style={styles.title}>Chat</Text>}
            <Pressable onPress={handleClickCart} style={styles.icon}>
                <Image
                    style={styles.image}
                    source={require('../../assets/image/bi_cart-check.png')}
                />
                {cartActive && <View style={styles.notify} />}
            </Pressable>
            {moreActive && (
                <Pressable style={styles.more}>
                    <Image
                        style={styles.moreImage}
                        source={require('../../assets/image/MoreIcon.png')}
                    />
                </Pressable>
            )}
        </View>
    );
};

export default Header;

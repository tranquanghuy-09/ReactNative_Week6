import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Product from '../components/product/Product';
import Header from '../components/header/Header';

const products = [
    {
        image: require('../assets/image/ca_nau_lau.png'),
        title: 'Lorem',
        shop: 'Devang',
    },
    {
        image: require('../assets/image/ga_bo_toi.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
    {
        image: require('../assets/image/xa_can_cau.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
    {
        image: require('../assets/image/xa_can_cau.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
    {
        image: require('../assets/image/xa_can_cau.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
    {
        image: require('../assets/image/ca_nau_lau.png'),
        title: 'Lorem',
        shop: 'Devang',
    },
    {
        image: require('../assets/image/ga_bo_toi.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
    {
        image: require('../assets/image/xa_can_cau.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
    {
        image: require('../assets/image/xa_can_cau.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
    {
        image: require('../assets/image/xa_can_cau.png'),
        title: 'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!',
        shop: 'Devang',
    },
];
const Screen01 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={{ backgroundColor: '#e5e5e5', flex: 1 }}
                stickyHeaderIndices={[0]}
            >
                <Header />
                <Text style={styles.desc}>
                    Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với
                    shop!
                </Text>
                <View style={styles.products}>
                    {products.map((item, index) => (
                        <Product
                            active={activeIndex === index}
                            product={item}
                            key={index}
                            onPress={() => setActiveIndex(index)}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Screen01;

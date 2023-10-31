import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        flex: 1,
        backgroundColor: 'rgba(27, 169, 255, 1)',
    },
    desc: {
        paddingVertical: 17,
        paddingHorizontal: 30,
    },
    products: {
        paddingTop: 4,
        borderTopWidth: 1,
        borderColor: '#C4C4C4',
    },
});

export default styles;

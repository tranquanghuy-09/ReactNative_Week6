import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    spaceBetween: {
        justifyContent: 'space-between',
    },
    container: {
        paddingTop: 6,
        paddingBottom: 12,
        paddingLeft: 16,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1BA9FF',
    },
    icon: {
        width: 24,
        height: 24,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    title: {
        alignSelf: 'center',
        color: '#fff',
    },
    notify: {
        width: 17,
        aspectRatio: 1 / 1,
        backgroundColor: 'rgba(233, 56, 56, 1)',
        borderRadius: 9999,
        position: 'absolute',
        top: -5,
        right: -5,
    },
    more: {
        width: 18,
        height: 5,
        marginLeft: 30,
    },
    moreImage: {
        width: '100%',
        height: '100%',
    },
});

export default styles;

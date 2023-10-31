import {StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-ionicons'

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar hidden={true} />
      <Text>Screen_4a</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

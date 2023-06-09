import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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

//YELP API KEY
//VdQ_VQz5NJxp88xLTHpoWlyw6gMmxRTY3vszLfPFew-Y5bcwP-24-JpuSQ2jZ8wBFObb20fXV8t7W50VK-jyRWGbPSfp4KDqNsr2_lYb3Az1g3zx_09QRGdR9-uCZHYx

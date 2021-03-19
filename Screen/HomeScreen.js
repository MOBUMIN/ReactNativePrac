import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
		<Button title="Go Settings" onPress={()=>navigation.navigate('Setting')} />
		<Button title="Go Todo" onPress={()=>navigation.navigate('Todo')} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

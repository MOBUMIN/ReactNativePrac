import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const SettingScreen = ({ navigation }) => {
    return (
		<ScrollView contentContainerStyle={styles.listContainer}>
			<View style={styles.list}>
				<Text>미래관 1층</Text>
			</View>
		</ScrollView>
    );
}

const styles = StyleSheet.create({
	listContainer: {
		alignItems: 'center',
	},
	list: {

	}
});

export default SettingScreen;

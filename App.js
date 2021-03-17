import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import { TodoInsert, TodoList } from './components';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3143e8',
	},
	appTitle: {
		color: '#fff',
		fontSize: 36,
		marginTop: 30,
		marginBottom: 30,
		fontWeight: '300',
		textAlign: 'center',
	},
	card: {
		backgroundColor: '#fff',
		flex: 1,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		marginLeft: 10,
		marginRight: 10,
	},
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
		<Text style={styles.appTitle}>TDL</Text>
		<View style={styles.card}>
			<TodoInsert />
			<TodoList />
		</View>
	</SafeAreaView>
  );
};

export default App;

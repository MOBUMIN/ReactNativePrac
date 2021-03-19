import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import TodoScreen from './TodoScreen';

const Stack = createStackNavigator();
function StackNav() {
	return(
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						borderBottomColor: 'gray',
					},
					headerTitleStyle: {
						alignSelf: 'center'
					}
				}}
			>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: 'My home' }}
				/>
				<Stack.Screen
					name="Setting"
					component={SettingScreen}
					options={{ title: '생리대함 관리' }}
				/>
				<Stack.Screen name="Todo" component={TodoScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Setting" component={SettingScreen} />
				<Tab.Screen name="Todo" component={TodoScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	)
}
//export default StackNav;
export default TabNavigator;
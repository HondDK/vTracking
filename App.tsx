import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VehicleListScreen from './screenPages/VehicleListScreen';
import MapScreen from './screenPages/MapScreen';
import VehicleDetailScreen from "./screenPages/VehicleDetailScreen";
import {Text} from "react-native";
import React from "react";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Список" component={VehicleListStack} />
                <Tab.Screen name="Карта со всеми доступными ТС" component={MapStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const VehicleListStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="VehicleList" component={VehicleListScreen} />
            <Stack.Screen name="VehicleDetail" component={VehicleDetailScreen} />
        </Stack.Navigator>
    );
};

const MapStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
    );
};

export default App;

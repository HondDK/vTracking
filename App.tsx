import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VehicleListScreen from './screenPages/VehicleListScreen';
import MapScreen from './screenPages/MapScreen';
import VehicleDetailScreen from "./screenPages/VehicleDetailScreen";
import React from "react";
import {I18nextProvider, useTranslation} from "react-i18next";
import i18 from "./helpers/i18";
import SettingsScreen from "./screenPages/SettingsScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
    const { t, i18n } = useTranslation();

    return (
        <I18nextProvider i18n={i18}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name={t("mainScreen.list")} component={VehicleListStack}/>
                    <Tab.Screen name={t("mainScreen.MapVehicles")}component={MapStack}/>
                    <Tab.Screen name={t("mainScreen.setting")} component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </I18nextProvider>
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

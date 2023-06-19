import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import VehicleListScreen from './screenPages/VehicleListScreen';
import MapScreen from './screenPages/MapScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Список" component={VehicleListScreen} />
          <Tab.Screen name="Карта" component={MapScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
};

export default App;

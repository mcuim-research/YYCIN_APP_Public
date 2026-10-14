import ForthScreen from '../../screens/ForthScreen';
import FifthScreen from '../../screens/FifthScreen';
import SixScreen from '../../screens/SixScreen';
import SevenScreen from '../../screens/SevenScreen';
import LoginScreenNavigator from './LoginScreenNavigator';
import HomeScreen from '../../screens/HomeScreen';
import DetailsScreen from '../../screens/DetailsScreen';
import ThirdScreen from '../../screens/ThirdScreen';
import EveryMedBoxScreen from '../../screens/EveryMedBoxScreen';
import OwnMedBoxScreen from '../../screens/OwnMedBoxScreen';
import MedmaterialScreen from '../../screens/MedmaterialScreen';
import MedmaterialScreen2 from '../../screens/MedmaterialScreen2';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function HomeStackNavigator() {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreenNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="首頁" component={HomeScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="資料統計" component={DetailsScreen} />
        <Stack.Screen name="用藥追蹤" component={ForthScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="藥物辨識" component={FifthScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="藥物資訊" component={SixScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="功能表" component={SevenScreen} options={{ headerShown: false }}/> */}
      </Stack.Navigator>
    );
  }
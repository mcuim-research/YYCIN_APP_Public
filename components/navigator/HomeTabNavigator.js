import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import ForthScreen from '../../screens/ForthScreen';
import FifthScreen from '../../screens/FifthScreen';
import SixScreen from '../../screens/SixScreen';
import SevenScreen from '../../screens/SevenScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigationState } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  // Use the hook inside the functional component
  const isLoginScreen = useNavigationState((state) => {
    const currentRoute = state?.routes[state.index];
    return (
      currentRoute &&
      currentRoute.name === '藥藥Check It Now' &&
      currentRoute.state?.routes?.[currentRoute.state.index]?.name === 'Login'
    );
  });

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === '藥藥Check It Now') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === '用藥追蹤') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === '藥單辨識') {
            iconName = focused ? 'camera' : 'camera-outline';
          } else if (route.name === '藥物資訊') {
            iconName = focused ? 'reader' : 'reader-outline';
          } else if (route.name === '功能表') {
            iconName = focused ? 'grid' : 'grid-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarStyle: isLoginScreen ? { display: 'none' } : { backgroundColor: '#84C1FF' },
        headerStyle: {
          backgroundColor: '#84C1FF',
          height: 55,
          shadowColor: 'transparent',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen
        name="藥藥Check It Now"
        component={HomeStackNavigator}
        options={{
          headerTitleAlign: 'center',
          title: '藥藥Check It Now',
          headerShown: false,
        }}
      />
      <Tab.Screen name="用藥追蹤" component={ForthScreen} options={{ headerShown: false }} />
      <Tab.Screen name="藥單辨識" component={FifthScreen} options={{ headerShown: false }} />
      <Tab.Screen name="藥物資訊" component={SixScreen} options={{ headerShown: false }} />
      <Tab.Screen name="功能表" component={SevenScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

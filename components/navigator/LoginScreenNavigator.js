import LoginScreen from '../../screens/LoginScreen';
import { SelRoleScreen} from '../../screens/LoginScreen';
import { EmailAndPasswordScreen} from '../../screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import BACKSVG from '../../assets/back.svg';
const Stack = createStackNavigator();
export default function LoginScreenNavigator() {
    return (

            <Stack.Navigator initialRouteName="SelRoleScreen">
            <Stack.Screen name="SelRoleScreen" component={SelRoleScreen} options={{headerShown: false}}  />
            <Stack.Screen name="EmailAndPasswordScreen" component={EmailAndPasswordScreen} options={{headerShown: false,keyboardHandlingEnabled: false}} />
            </Stack.Navigator>
    );
}

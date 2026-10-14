import {ActivityIndicator, View} from 'react-native';


export default function LoadingComponent() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', position:"fixed",height:"100%", width:"100%"}}>
        <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
    }
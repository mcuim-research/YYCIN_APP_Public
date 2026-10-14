import * as React from 'react';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Image, TextInput, ScrollView, Dimensions, Button, Alert, Switch, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BarChart } from 'react-native-chart-kit';
import * as MediaLibrary from 'expo-media-library';
import TabNavigator from './components/navigator/HomeTabNavigator';
import {AppRegistry} from 'react-native';

import axios from 'axios';
import * as Font from 'expo-font';


import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message is handled in the background!');
});
function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    console.log('App launched by iOS in background, ignore it');
    // App has been launched in the background by iOS, ignore
    return null;
  }
}
AppRegistry.registerComponent(appName, () => HeadlessCheck);


export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
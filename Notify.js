import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
let fcmUnsubscribe = null;
export default function Notify() {
  useEffect(() => {
    messaging()
      .requestPermission()
      .then(authStatus => {
        console.log('APNs Status: ', authStatus);
        if (
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL
        ) {
          messaging()
            .getToken()
            .then(token => {

              AsyncStorage.setItem('fcmToken', token);
            });
          messaging().onTokenRefresh(token => {

              AsyncStorage.setItem('fcmToken', token);
          });
          fcmUnsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert(
              remoteMessage.notification.title,
              remoteMessage.notification.body,
            );
          });
        }
      })
      .catch(err => {
        console.error('Notification permission request failed.');
      });
  }, []);
  return (
    <View>
     {/* <Text style={styles.title}>Notify</Text> */}
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
  },
});
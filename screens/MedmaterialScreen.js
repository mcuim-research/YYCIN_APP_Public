
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
import styles from '../styles';
// import RNPickerSelect from 'react-native-picker-select';

export default function MedmaterialScreen() {
    const route = useRoute();
    const navigation = useNavigation(); // Using useNavigation hook
    const { savedData } = route.params; // Receiving passed data
    const [selectedValue, setSelectedValue] = useState('');
    const [showRecords, setShowRecords] = useState(false); // Control the display state of records
  
    const pickerSelectStyles = {
      inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        color: 'black',
        paddingRight: 30,
        width: 100,
        backgroundColor: '#f0f0f0',
      },
      inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        color: 'black',
        paddingRight: 30,
        width: 100,
        backgroundColor: '#f0f0f0',
      },
    };
  
    return (
      <View style={styles.screenContainer}>
        <View style={styles.pickerContainer}>
          {/* <RNPickerSelect
            onValueChange={(value) => setSelectedValue(value)}
            items={[
              { label: '藥物1', value: 'option1' },
              { label: '藥物2', value: 'option2' },
              { label: '藥物3', value: 'option3' },
            ]}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            value={selectedValue}
            placeholder={{ label: '請選擇', value: null }}
          /> */}
        </View>
  
        <TouchableOpacity
          onPress={() => setShowRecords(!showRecords)} // Toggle record display state
          style={styles.queryButton}
        >
          <Text style={styles.buttonText}>查詢紀錄</Text>
        </TouchableOpacity>
  
        {showRecords && savedData && savedData.length > 0 && (
          <View style={styles.savedDataContainer}>
            {savedData.map(item => (
              <View key={item.id} style={styles.savedItem}>
                <Text>日期: {item.date}</Text>
                <Text>早: {item.morningTime}</Text>
                <Text>中: {item.afternoonTime}</Text>
                <Text>晚: {item.eveningTime}</Text>
                <Text>睡前: {item.bedtime}</Text>
                <Text>選擇的藥盒: {item.selectedValue}</Text>
              </View>
            ))}
          </View>
        )}
  
        <TouchableOpacity
          onPress={() => navigation.navigate('藥物新增')} // Navigate to AddMedicineScreen
          style={styles.confirmButton}
        >
          <Text style={styles.buttonText}>確認</Text>
        </TouchableOpacity>
      </View>
    );
  }
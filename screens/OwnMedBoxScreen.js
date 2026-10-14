import * as React from 'react';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Image} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';
// import RNPickerSelect from 'react-native-picker-select';

export default function OwnMedBoxScreen({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [morningTime, setMorningTime] = useState(new Date());
    const [showMorningTime, setShowMorningTime] = useState(false);
    const [afternoonTime, setAfternoonTime] = useState(new Date());
    const [showAfternoonTime, setShowAfternoonTime] = useState(false);
    const [eveningTime, setEveningTime] = useState(new Date());
    const [showEveningTime, setShowEveningTime] = useState(false);
    const [bedtime, setBedtime] = useState(new Date());
    const [showBedtime, setShowBedtime] = useState(false);
    const [selectedValue2, setSelectedValue2] = useState('');
    const [savedData, setSavedData] = useState([]); // 用于存储选择的数据数组
  
    useEffect(() => {
      const loadSavedData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('savedData');
          if (jsonValue != null) {
            setSavedData(JSON.parse(jsonValue));
          }
        } catch (e) {
          console.error('Failed to load saved data.');
        }
      };
  
      loadSavedData();
    }, []);
  
    const saveDataToStorage = async (data) => {
      try {
        const jsonValue = JSON.stringify(data);
        await AsyncStorage.setItem('savedData', jsonValue);
      } catch (e) {
        console.error('Failed to save data.');
      }
    };
  
    const onChangeDate = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShowDate(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const onChangeMorningTime = (event, selectedTime) => {
      const currentTime = selectedTime || morningTime;
      setShowMorningTime(Platform.OS === 'ios');
      setMorningTime(currentTime);
    };
  
    const onChangeAfternoonTime = (event, selectedTime) => {
      const currentTime = selectedTime || afternoonTime;
      setShowAfternoonTime(Platform.OS === 'ios');
      setAfternoonTime(currentTime);
    };
  
    const onChangeEveningTime = (event, selectedTime) => {
      const currentTime = selectedTime || eveningTime;
      setShowEveningTime(Platform.OS === 'ios');
      setEveningTime(currentTime);
    };
  
    const onChangeBedtime = (event, selectedTime) => {
      const currentTime = selectedTime || bedtime;
      setShowBedtime(Platform.OS === 'ios');
      setBedtime(currentTime);
    };
  
    const showDatepicker = () => {
      setShowDate(true);
    };
  
    const showMorningTimepicker = () => {
      setShowMorningTime(true);
    };
  
    const showAfternoonTimepicker = () => {
      setShowAfternoonTime(true);
    };
  
    const showEveningTimepicker = () => {
      setShowEveningTime(true);
    };
  
    const showBedtimepicker = () => {
      setShowBedtime(true);
    };
  
    const handleSave = () => {
      const boxLabels = {
        option1: '藥盒1',
        option2: '藥盒2',
        option3: '藥盒3',
      };
      const newData = {
        id: Date.now(), // 使用时间戳作为唯一标识符
        date: date.toLocaleDateString(),
        morningTime: morningTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        afternoonTime: afternoonTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        eveningTime: eveningTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        bedtime: bedtime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        selectedValue: boxLabels[selectedValue2] || '未選擇', // 使用标签来显示
      };
      const updatedData = [...savedData, newData];
      setSavedData(updatedData);
      saveDataToStorage(updatedData);
    };
  
    const handleDeleteAll = () => {
      setSavedData([]); // 清空所有已保存的数据
      saveDataToStorage([]);
    };
  
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
        <TouchableOpacity
          onPress={() => navigation.navigate('藥物資料2', { savedData })} // 将保存的数据传递到藥物資料页面
          style={styles.medmaterialButtonContainer}
        >
          <Image
            source={require('../assets/pill.png')}
            style={{ width: 60, height: 60 }}
          />
        </TouchableOpacity>
  
        <TouchableOpacity onPress={showDatepicker} style={styles.datebutton}>
          <Image
            source={require('../assets/calendar.png')}
            style={{ width: 60, height: 60 }}
          />
          <Text>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}
  
        <TouchableOpacity onPress={showMorningTimepicker} style={styles.timebutton}>
          <Text style={styles.timeText}>早: {morningTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        </TouchableOpacity>
        {showMorningTime && (
          <DateTimePicker
            testID="timePickerMorning"
            value={morningTime}
            mode="time"
            display="default"
            onChange={onChangeMorningTime}
          />
        )}
  
        <TouchableOpacity onPress={showAfternoonTimepicker} style={styles.timebutton2}>
          <Text style={styles.timeText}>中: {afternoonTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        </TouchableOpacity>
        {showAfternoonTime && (
          <DateTimePicker
            testID="timePickerAfternoon"
            value={afternoonTime}
            mode="time"
            display="default"
            onChange={onChangeAfternoonTime}
          />
        )}
  
        <TouchableOpacity onPress={showEveningTimepicker} style={styles.timebutton3}>
          <Text style={styles.timeText}>晚: {eveningTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        </TouchableOpacity>
        {showEveningTime && (
          <DateTimePicker
            testID="timePickerEvening"
            value={eveningTime}
            mode="time"
            display="default"
            onChange={onChangeEveningTime}
          />
        )}
  
        <TouchableOpacity onPress={showBedtimepicker} style={styles.timebutton4}>
          <Text style={styles.timeText}>睡前: {bedtime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
        </TouchableOpacity>
        {showBedtime && (
          <DateTimePicker
            testID="timePickerBedtime"
            value={bedtime}
            mode="time"
            display="default"
            onChange={onChangeBedtime}
          />
        )}
  
        <View style={styles.pickerContainer}>
          {/* <RNPickerSelect
            onValueChange={(value) => setSelectedValue2(value)}
            items={[
              { label: '藥盒1', value: 'option1' },
              { label: '藥盒2', value: 'option2' },
              { label: '藥盒3', value: 'option3' },
            ]}
            style={pickerSelectStyles}
            useNativeAndroidPickerStyle={false}
            value={selectedValue2}
            placeholder={{ label: '請選擇', value: null }}
          /> */}
        </View>
  
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.buttonText}>保存</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={handleDeleteAll} style={styles.deleteButton}>
          <Text style={styles.buttonText}>刪除記錄</Text>
        </TouchableOpacity>
      </View>
    );
  }
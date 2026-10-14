import { API_BASE_URL } from '../apiConfig';
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';
import axios from '../axiosConfig';

export default function ForthScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Set the initial value to today's date
  const [medicationLogs, setMedicationLogs] = useState([]); // Stores logs for selected date

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
  };

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/UsageLog/date/${selectedDate}/smartBox/1234`);
        setMedicationLogs(response.data); // Set the fetched data
      } catch (error) {
        console.error("Error fetching data:");
      }
    };

    fetchMedications();
  }, [selectedDate]);

  const markedDates = {
    [selectedDate]: { selected: true, marked: true, selectedColor: '#97CBFF' },
    ...Object.keys(medicationLogs).reduce((acc, date) => {
      acc[date] = {
        marked: true,
        dotColor: 'red',
      };
      return acc;
    }, {}),
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={handleDateSelect}
          markedDates={markedDates}
          style={styles.calendar}
          monthFormat={'yyyy年MM月'}
          theme={{
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#4CAF50',
            selectedDayTextColor: '#ffffff',
            todayTextColor: 'red',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            arrowColor: '#97CBFF',
            monthTextColor: '#000000',
            indicatorColor: '#4CAF50',
            dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          }}
        />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.medtimeTitle}>用藥紀錄</Text>
        <ScrollView  style={{ marginTop: 320 }}>
          {medicationLogs.length > 0 ? (
            medicationLogs.map((log) => (
              <View key={log.logID} style={styles.logItem}>
                <Text style={styles.logText}>藥物名稱: <Text style={styles.medicationName}>{log.medication.name}</Text></Text>
                <Text style={styles.logText}>劑量: <Text style={styles.medicationName}>{log.medication.dosage}</Text></Text>
                <Text style={styles.logText}>時間: <Text style={styles.medicationName}>{new Date(log.dateTime).toLocaleString()}</Text></Text>
              </View>
            ))
          ) : (
            <Text style={styles.noDataText}>今天沒有用藥紀錄。</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

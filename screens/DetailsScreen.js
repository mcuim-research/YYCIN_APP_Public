import * as React from 'react';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Image, TextInput, ScrollView, Dimensions, Button, Alert, Switch, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../styles';
import { BarChart } from 'react-native-chart-kit';


export default function DetailsScreen({ navigation }) {
    const route = useRoute();
    const { savedData = [] } = route.params || {}; // 確保有默認值
  
    const totalDoses = savedData.length;
  
    const medicationFrequency = savedData.reduce((acc, item) => {
      acc[item.selectedValue] = (acc[item.selectedValue] || 0) + 1;
      return acc;
    }, {});
  
    // 準備圖表數據
    const chartData = {
      labels: Object.keys(medicationFrequency),
      datasets: [
        {
          data: Object.values(medicationFrequency),
        },
      ],
    };
    
    return (
      <View style={styles.screenContainer}>
        <Text>Details Screen</Text>
        <Text>用藥總次數: {totalDoses}</Text>
        <Text>藥物使用頻率:</Text>
        {Object.entries(medicationFrequency).map(([medication, count]) => (
          <Text key={medication}>{medication}: {count} 次</Text>
        ))}
  
        {/* 顯示圖表 */}
        <BarChart
          data={chartData}
          width={Dimensions.get('window').width - 16} // 設置圖表寬度
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
            borderWidth: 1, // 添加框線寬度
            borderColor: '#000', // 添加框線顏色
          }}
        />
  
        {/* 返回按鈕 */}
        <Button title="返回" onPress={() => navigation.goBack()} />
      </View>
    );
  }
  
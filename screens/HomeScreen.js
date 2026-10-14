import { API_BASE_URL } from '../apiConfig';
import { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ScrollView, View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from '../styles';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerActions } from '@react-navigation/native';
import { BarChart } from 'react-native-chart-kit'; // 引入 BarChart
import { Dimensions } from 'react-native';
import moment from 'moment'; // 引入 moment.js 來處理日期
import axios from '../axiosConfig';
import Notify from '../Notify';

export default function HomeScreen() {
  const [smartboxid, setSmartboxId]= useState('1234') // 目前暫定1234
  const navigation = useNavigation();
  const route = useRoute();
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [medicationSlots, setMedicationSlots] = useState([]);
  // const [medicationData, setMedicationData] = useState([]);
  // const [medicationLabels, setMedicationLabels] = useState([]);

  const savedData = [
    { id: 1, date: '2023-10-01', morningTime: '07:30', afternoonTime: '11:00', eveningTime: '17:00', bedtime: '' },
    { id: 2, date: '2023-10-02', morningTime: '08:00', afternoonTime: '', eveningTime: '18:00', bedtime: '' },
    { id: 3, date: '2023-10-03', morningTime: '07:45', afternoonTime: '12:00', eveningTime: '17:30', bedtime: '22:30' },
    { id: 4, date: '2023-10-04', morningTime: '08:15', afternoonTime: '11:45', eveningTime: '18:45', bedtime: '21:45' },
    { id: 5, date: '2023-10-05', morningTime: '', afternoonTime: '', eveningTime: '19:00', bedtime: '' },
    { id: 6, date: '2023-10-06', morningTime: '08:30', afternoonTime: '12:15', eveningTime: '17:15', bedtime: '' },
    { id: 7, date: '2023-10-07', morningTime: '07:15', afternoonTime: '12:00', eveningTime: '18:00', bedtime: '' },
  ];


  useEffect(() => {
    // 向伺服器發送 GET 請求以取得天氣資料
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/EnvLog/${smartboxid}/latest`); // 替換為您的 API URL
        // 假設 API 回傳的資料結構包含 temperature 和 humidity
        const weatherData = response.data;
        // 假設我們只取第一個資料       
        setTemp(weatherData.temperature);
        setHumidity(weatherData.humidity);
      } catch (error) {
        console.error('Error fetching weather data:');
      }
    };
    const fetchMedicationData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/SmartBoxMedication/smartboxid/${smartboxid}`);
        setMedicationSlots(response.data); // Assume API returns an array of medication data
      } catch (error) {
        console.error('Error fetching medication data:');
      }
    };
    fetchWeatherData();
    fetchMedicationData();
  }, []);

  // 計算每一天的用藥次數
  const daysOfWeek = ['日', '一', '二', '三', '四', '五', '六'];
  const weeklyMedicationFrequency = daysOfWeek.reduce((acc, day) => {
    acc[day] = 0;
    return acc;
  }, {});

  // 計算用藥頻率
  savedData.forEach(item => {
    const dayOfWeek = parseInt(moment(item.date).format('d'), 10); // 轉換為整數
    const medicationCount = [item.morningTime, item.afternoonTime, item.eveningTime, item.bedtime]
      .filter(time => time !== '').length;

    // 只有當 dayOfWeek 是有效的時候才增加頻率
    if (dayOfWeek >= 0 && dayOfWeek < daysOfWeek.length) {
      weeklyMedicationFrequency[daysOfWeek[dayOfWeek]] += medicationCount;
    } else {
      console.error('無效的星期幾:', dayOfWeek);
    }
  });

  const medicationLabels = Object.keys(weeklyMedicationFrequency); // x軸標籤 (星期)
  const medicationData = Object.values(weeklyMedicationFrequency); // y軸數據 (次數)

  // 獲取螢幕寬度
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer} style={styles.scrollView} decelerationRate="normal">
      <View style={styles.container}>
        <Text style={styles.chartTitle}> </Text>
        <Text style={styles.chartTitle}>藥盒內藥物</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 20 }}>
          {medicationSlots.slice(0, 8).map((slot, index) => (
            <View key={index} style={{ width: '23%', alignItems: 'center', padding: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, marginBottom: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>{slot.pos || 'N/A'}</Text>
              <Text style={{ fontWeight: 'bold' }}>{slot.medication?.name || '未放入'}</Text>
            </View>
          ))}
        </View>

        {/* <Image source={require('../assets/box.png')} style={{ width: 250, height: 250,  }} /> */}
        <Text style={styles.chartTitle}>每週用藥次數</Text>
        <BarChart
          data={{
            labels: medicationLabels,
            datasets: [{ data: medicationData }],
          }}
          width={screenWidth - 30}
          height={220}
          yAxisSuffix="次"
          fromZero={true}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#97CBFF",
            backgroundGradientTo: "#97CBFF",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            fillShadowGradient: "#fff",
            fillShadowGradientOpacity: 30,
            style: { borderRadius: 16 },
            propsForDots: { r: "6", strokeWidth: "2", stroke: "#fff" },
          }}
          verticalLabelRotation={0}
          style={{
            marginVertical: 10,
            borderRadius: 16,
            alignSelf: 'center',
            paddingLeft: 0,
          }}
          yAxisInterval={1} // Ensure intervals of 1
          minValue={0} // Start y-axis at 0
          maxValue={4} // Set maximum y-axis value to 4
          withVerticalLabels={true} // Ensure vertical labels are displayed
          withHorizontalLabels={true} // Show horizontal labels
          yLabelsOffset={20} // Clear any existing y-axis la
        />
        <View style={styles.temperatureHumidityContainer}>
          <View style={styles.temperatureContainer}>
            <Text style={styles.homelabel}>目前溫度</Text>
            {temp !== null ? (
              <Text style={{ fontSize: 40, textAlign: 'center' }}>{temp}°C</Text>
            ) : (
              <Text style={{ fontSize: 20, textAlign: 'center' }}>讀取中...</Text>
            )}
          </View>
          <View style={styles.humidityContainer}>
            <Text style={styles.homelabel}>目前濕度</Text>
            {humidity !== null ? (
              <Text style={{ fontSize: 40, textAlign: 'center' }}>{humidity}%</Text>
            ) : (
              <Text style={{ fontSize: 20, textAlign: 'center' }}>讀取中...</Text>
            )}
          </View>
          <Notify />
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
} 

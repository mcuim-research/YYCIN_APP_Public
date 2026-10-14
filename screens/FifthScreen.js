import { API_BASE_URL } from '../apiConfig';
import { useEffect, useRef, useState } from 'react';
import { Alert, Image, SafeAreaView, Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { useCameraDevice, Camera, CameraType, useCameraPermission } from 'react-native-vision-camera';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import styles from '../styles';
import ActionSheet from "react-native-actions-sheet";
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../axiosConfig';
import FormData from 'form-data';

export default function FifthScreen({navigation}) {
  const [capturedPic, setCapturedPic] = useState(null);
  const [open, setOpen] = useState(null);
  const [medicationInfo, setMedicationInfo] = useState([]);
  const [savedScans, setSavedScans] = useState([]);  // 儲存多張藥單掃描結果
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const actionSheetRef = useRef(null);
  const viewActionSheetRef = useRef(null); // 第二個 ActionSheet 的引用
  const { requestPermission } = useCameraPermission();
  const [isPermissionChecked, setIsPermissionChecked] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [active, setActive] = useState(true);
  useEffect(() => {
    const checkPermission = async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
      setIsPermissionChecked(true);
    };

    checkPermission();
  }, []);
  const device = useCameraDevice('back', {
    physicalDevices: [
      'wide-angle-camera',
    ]
  });

  const camera = useRef(null);

  useEffect(() => {
    const loadSavedScans = async () => {
      const savedData = await AsyncStorage.getItem('savedScans');
      if (savedData) {
        setSavedScans(JSON.parse(savedData));
      }
    };
    loadSavedScans();
  }, []);
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      setActive(false);
    });
    return unsubscribe;
  }, [navigation]);
  // 保存掃描結果至 AsyncStorage
  const saveScansToStorage = async (newScans) => {
    try {
      await AsyncStorage.setItem('savedScans', JSON.stringify(newScans));
    } catch (error) {
      console.error("無法保存掃描結果");
    }
  };

  const clearSavedScans = async () => {
    try {
      await AsyncStorage.removeItem('savedScans');
      setSavedScans([]); // 清空狀態
      Alert.alert("成功", "已清除所有掃描結果");
    } catch (error) {
      console.error("無法清除掃描結果");
    }
  };


  // 拍照並處理藥單辨識
  const takePhoto = async () => {
    await requestPermission();
    const file = await camera.current.takePhoto();
    await CameraRoll.save(`file://${file.path}`, { type: 'photo' });


    const form = new FormData();
    form.append("ufile", {
      uri: `file://${file.path}`,
      type: 'image/jpeg',
      name: 'ufile.jpg',
    });

    const sessionId = await AsyncStorage.getItem('sessionId');
    try {
      let res = await axios.post(`${API_BASE_URL}/prescription/classifications/11`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Cookie': `.AspNetCore.Session=${sessionId}`,
        }
      });

      if (res && res.data && res.data.medicationDetails) {
        setMedicationInfo(res.data.medicationDetails);
        const updatedScans = [...savedScans, res.data.medicationDetails];
        setSavedScans(updatedScans);
        saveScansToStorage(updatedScans); // 保存結果到 AsyncStorage
      } else {
        console.error("回應格式不正確");
      }
    } catch (err) {
      console.error('Request failed.');
    }

    actionSheetRef.current.show();
  };

  const renderSavedScans = () => {
    return savedScans.map((scan, index) => (
      <View key={index} style={styles.medicineBox}>
        <Text style={styles.medicineInfoLabel}>藥單 {index + 1}</Text>
        {scan.map((med, medIndex) => (
          <View key={medIndex}>
            <Text style={styles.medicineInfoLabel2}>藥物名稱：{med.medication.name || "N/A"}</Text>
            <Text style={styles.medicineInfoLabel2}>服用時段：{med.takeAfterBreakfast ? "早 " : ""}{med.takeAfterLunch ? "中 " : ""}{med.takeAfterDinner ? "晚 " : ""}{med.takeBeforeBed ? "睡前" : ""}</Text>
          </View>
        ))}
      </View>
    ));
  };

  const renderMedicationInfo = () => {
    return medicationInfo.map((med, index) => (
      <View key={index} style={styles.medicineBox}>
        <Text style={styles.medicineInfoLabel}>藥物名稱：</Text>
        <Text style={styles.medicineInfoValue}>{med.medication.name || "N/A"}</Text>
        <Text style={styles.medicineInfoLabel}>服用時段：</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox value={med.takeAfterBreakfast} />
          <Text style={styles.checkboxLabel}>早</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox value={med.takeAfterLunch} />
          <Text style={styles.checkboxLabel}>中</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox value={med.takeAfterDinner} />
          <Text style={styles.checkboxLabel}>晚</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox value={med.takeBeforeBed} />
          <Text style={styles.checkboxLabel}>睡前</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox value={med.takeWhenNeeded} />
          <Text style={styles.checkboxLabel}>有需要時</Text>
        </View>
      </View>
    ));
  };


  return (
    <View style={styles.container}>
      <Camera
        photo={true}
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={active}
      />
      <TouchableOpacity onPress={takePhoto} style={styles.captureButton}>
        <Text style={styles.loginbuttonText}>藥單辨識</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => viewActionSheetRef.current?.show()} style={styles.viewButton}>
        <Text style={styles.loginbuttonText}>查看掃描結果</Text>
      </TouchableOpacity>

      {/* 查看結果的 ActionSheet */}
      <ActionSheet ref={viewActionSheetRef}>
        <ScrollView contentContainerStyle={styles.fifscrollViewContainer} horizontal={true}>
          {savedScans.length > 0 ? renderSavedScans() : <Text style={styles.medicineInfoLabel}>目前無儲存結果</Text>}
          <TouchableOpacity onPress={clearSavedScans} style={styles.clearButton}>
            <Text style={styles.returnButtonText}>清除紀錄</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => viewActionSheetRef.current?.hide()} style={styles.returnButton}>
            <Text style={styles.returnButtonText}>返回</Text>
          </TouchableOpacity>
        </ScrollView>
      </ActionSheet>

      {/* 藥物辨識結果的 ActionSheet */}
      <ActionSheet ref={actionSheetRef}>
        <ScrollView contentContainerStyle={styles.fifscrollViewContainer} horizontal={true}>
          {medicationInfo.length > 0 ? renderMedicationInfo() : <Text>載入中...</Text>}
          <TouchableOpacity
            onPress={() => actionSheetRef.current?.hide()}
            style={styles.returnButton}
          >
            <Text style={styles.returnButtonText}>返回</Text>
          </TouchableOpacity>
        </ScrollView>
      </ActionSheet>
    </View>
  );
}

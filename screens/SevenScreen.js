import { API_BASE_URL } from '../apiConfig';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import styles from '../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import axios from '../axiosConfig';

export default function SevenScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // 药物信息模态框可见性
  const [modalListVisible, setModalListVisible] = useState(false); // 药物信息模态框可见性
  const [aboutusModalVisible, setAboutusModalVisible] = useState(false); // 关于我们模态框可见性
  const [editProfileModalVisible, setEditProfileModalVisible] = useState(false); // 修改资料模态框可见性
  const [bindingModalVisible, setBindingModalVisible] = useState(false); // 新增：照護者綁定模態框狀態
  const [savedScans, setSavedScans] = useState([]);  // 儲存多張藥單掃描結果
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        let res = await axios.get(`${API_BASE_URL}/Account/session`);

        let remoteEmail = res.data.email;
        let remoteRole = res.data.accountType;
        let remoteUsername = "";
        let userID = "";

        if (remoteRole === "Patient") {
          remoteUsername = res.data.patient.name;
          userID = res.data.patient.patientID; // 當角色為 Patient 時抓取 patientID
        } else if (remoteRole === "Caregiver") {
          remoteUsername = res.data.caregiver.name;
          userID = res.data.caregiver.caregiverId; // 當角色為 Caregiver 時抓取 caregiverID
        }

        // 從本地獲取現有資料
        const storedUsername = await AsyncStorage.getItem('username');
        const storedEmail = await AsyncStorage.getItem('email');
        const storedRole = await AsyncStorage.getItem('userRole');

        // 僅當遠端資料與本地資料不同時才進行更新
        if (remoteUsername && remoteUsername !== storedUsername) setUsername(remoteUsername);
        if (remoteEmail && remoteEmail !== storedEmail) setEmail(remoteEmail);
        if (remoteRole && remoteRole !== storedRole) {
          setRole(
            remoteRole === "Patient" ? `病患 ID: ${userID}` : `照護者 ID: ${userID}`
          );
        }
      } catch (error) {
        console.error('載入個人資料數據時發生錯誤:');
      }
    };

    loadProfile();
  }, []);

  // 修改资料模态框组件
  const EditProfileModal = ({ visible, onClose }) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <LinearGradient
          colors={['rgba(151, 203, 255, 1)', 'rgba(151, 203, 255, 0.7)', 'rgba(151, 203, 255, 0.5)']}
          style={styles.aboutusmodalContainer}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>修改個人資料</Text>

            <Text style={styles.userlabel}>用戶名</Text>
            <TextInput
              style={styles.userinput}
              value={username}
              onChangeText={setUsername}
              placeholder="輸入您的用戶名"
            />

            <Text style={styles.emaillabel}>電子郵件</Text>
            <TextInput
              style={styles.emailinput}
              value={email}
              onChangeText={setEmail}
              placeholder="輸入您的電子郵件"
            />

            <TouchableOpacity style={styles.savepersonalbutton} onPress={handleSaveProfile}>
              <Text style={styles.savepersonalbuttonText}>保存個人資料</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onClose} style={styles.savepersonalcloseButton}>
              <Text style={styles.savepersonalbuttonText}>關閉</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </Modal>
    );
  };


  const handleSaveProfile = async () => {
    try {
      // 儲存修改後的資料到本地
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('email', email);
      alert('個人資料已成功更新！');

      // 關閉模態框
      setEditProfileModalVisible(false);
    } catch (error) {
      console.error('Error saving profile data:');
    }
  };

  const CaregiverBindingModal = ({ visible, onClose }) => {
    const [caregiverID, setCaregiverID] = useState('');
    const [bindingStatus, setBindingStatus] = useState(null);
    const [boundCaregivers, setBoundCaregivers] = useState([]); // Array to store bound caregivers
  
    // Fetch bound caregivers on modal open
    useEffect(() => {
      if (visible) {
        fetchBoundCaregivers();
      }
    }, [visible]);
  
    const fetchBoundCaregivers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/Account/Bind`); 
        if (response.status === 200) {
          setBoundCaregivers(response.data);
        }
      } catch (error) {
        console.error('Error fetching bound caregivers:');
      }
    };
  
    const handleBindCaregiver = async () => {
      try {
        const response = await axios.post(`${API_BASE_URL}/Account/Bind/caregiver/${caregiverID}`, {});
        if (response.status === 200) {
          setBindingStatus('綁定成功');
          fetchBoundCaregivers(); // Refresh the bound caregivers list
        } else {
          setBindingStatus('綁定失敗');
        }
      } catch (error) {
        setBindingStatus('綁定失敗，請稍後再試');
        console.error('Binding error:');
      }
    };
  
    const handleUnbindCaregiver = async () => {
      try {
        const response = await axios.delete(`${API_BASE_URL}/Account/Bind/caregiver/${caregiverID}`);
        if (response.status === 200) {
          setBindingStatus('解除綁定成功');
          fetchBoundCaregivers(); // Refresh the bound caregivers list
        } else {
          setBindingStatus('解除綁定失敗');
        }
      } catch (error) {
        setBindingStatus('解除綁定失敗，請稍後再試');
        console.error('Unbinding error:');
      }
    };
  
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <LinearGradient
          colors={['rgba(151, 203, 255, 1)', 'rgba(151, 203, 255, 0.7)', 'rgba(151, 203, 255, 0.5)']}
          style={styles.aboutusmodalContainer}
        >
          <View style={styles.modalContent}>
            <View style={styles.bindingInputContainer}>
              <TextInput
                placeholder="請輸入ID"
                value={caregiverID}
                onChangeText={setCaregiverID}
                style={styles.bindingInput}
              />
              <TouchableOpacity onPress={handleBindCaregiver} style={styles.bindingAddButton}>
                <Text style={styles.bindingAddButtonText}>綁定</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleUnbindCaregiver} style={styles.unbindingButton}>
                <Text style={styles.unbindingButtonText}>解除綁定</Text>
              </TouchableOpacity>
            </View>
  
            <ScrollView style={styles.bindingList}>
              <Text style={styles.heading}>已綁定的照護者</Text>
              {boundCaregivers.map((caregiver, index) => (
                <View key={index} style={styles.caregiverItem}>
                  <Text style={styles.caregiverText}>{caregiver.name} ID:{caregiver.caregiverId}</Text>
                </View>
              ))}
              {bindingStatus && <Text style={styles.bindingStatus}>{bindingStatus}</Text>}
            </ScrollView>
            
            <TouchableOpacity onPress={onClose} style={styles.leaveButton}>
              <Text style={styles.leaveButtonText}>離開</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </Modal>
    );
  };
  



  const MedicineListModal = ({ visible, onClose }) => {
    const [selectedMedicine, setSelectedMedicine] = useState(null);
    const [medicines, setMedicines] = useState([]);

    // 使用 useEffect 載入藥物列表
    useEffect(() => {
      if (visible) {
        fetchMedicines();
      }
    }, [visible]);

    const fetchMedicines = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/Medication`);
        if (response.ok) {
          const data = await response.json();
          setMedicines(data);
        } else {
          console.error('Failed to fetch medicines:', response.status);
        }
      } catch (error) {
        console.error('Error fetching medicines:');
      }
    };

    const MedicineDetail = ({ medicine }) => (
      <View style={styles.medicineDetailContainer}>
        <Text style={styles.medicinelistName}>{medicine.name}</Text>
        <Text style={styles.medicinelistDescription}>用途: {medicine.description}</Text>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>用量: {medicine.dosage}</Text>
      </View>
    );

    const MedicineCard = ({ medicine }) => (
      <TouchableOpacity style={styles.medicineCard} onPress={() => setSelectedMedicine(medicine)}>
        <Text style={styles.medicineCardTitle}>{medicine.name}</Text>
      </TouchableOpacity>
    );

    return (
      <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
        <LinearGradient
          colors={['rgba(151, 203, 255, 1)', 'rgba(151, 203, 255, 0.7)', 'rgba(151, 203, 255, 0.5)']}
          style={styles.aboutusmodalContainer}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>我的藥物</Text>

            {/* 根據是否選擇藥物顯示不同內容 */}
            {!selectedMedicine ? (
              <ScrollView>
                {medicines.map((medicine) => (
                  <MedicineCard key={medicine.id} medicine={medicine} />
                ))}
              </ScrollView>
            ) : (
              <MedicineDetail medicine={selectedMedicine} />
            )}

            {/* 藥物列表時顯示「離開」按鈕 */}
            {!selectedMedicine && (
              <TouchableOpacity onPress={onClose} style={styles.listleaveButton}>
                <Text style={styles.leaveButtonText}>離開</Text>
              </TouchableOpacity>
            )}

            {/* 選擇藥物後顯示「返回」按鈕 */}
            {selectedMedicine && (
              <TouchableOpacity
                onPress={() => setSelectedMedicine(null)} // 返回藥物列表
                style={styles.backButton}
              >
                <Text style={styles.leaveButtonText}>返回</Text>
                {/* <Image source={require('../assets/left.png')} style={{ width: 45, height: 45 }} /> */}
              </TouchableOpacity>
            )}
          </View>
        </LinearGradient>
      </Modal>
    );
  };


  const MedicineInfoModal = ({ visible, onClose }) => {
    const [medicationInfo, setMedicationInfo] = useState([]);
  
    useEffect(() => {
      const fetchMedicationInfo = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/Prescription`);
          const data = await response.json();
          setMedicationInfo(data || []); // 確保資料格式正確
        } catch (error) {
          console.error('Error fetching medication info:');
        }
      };
  
      if (visible) {
        fetchMedicationInfo();
      }
    }, [visible]);
  
    return (
      <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
        <LinearGradient
          colors={['rgba(151, 203, 255, 1)', 'rgba(151, 203, 255, 0.7)', 'rgba(151, 203, 255, 0.5)']}
          style={styles.aboutusmodalContainer}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>我的藥單</Text>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              {medicationInfo.length > 0 ? (
                medicationInfo.map((prescription, index) => (
                  <View key={index} style={styles.prescriptionItem}>
                    <Text style={styles.patientName}>患者: {prescription.patient.name}</Text>
                    {prescription.medicationDetails.map((detail, idx) => (
                      <View key={idx} style={styles.medicationDetail}>
                        <Text style={styles.patientName}>開始日期: {new Date(detail.startDate).toLocaleDateString()}</Text>
                        <Text style={styles.patientName}>結束日期: {new Date(detail.endDate).toLocaleDateString()}</Text>
                        <Text style={styles.patientName}>藥物名稱: {detail.medication.name || '無名稱'}</Text>
                        <Text style={styles.patientName}>描述: {detail.medication.description}</Text>
                        <Text style={styles.patientName}>副作用: {detail.medication.sideEffects || '無'}</Text>
                        <Text style={styles.patientName}>大小: {detail.medication.size}</Text>
                        <Text style={styles.patientName}>形狀: {detail.medication.shape}</Text>
                        <Text style={styles.patientName}>顏色: {detail.medication.color}</Text>
                        <Text style={styles.patientName}>劑量: {detail.medication.dosage}</Text>
                        <Text style={styles.patientName}>頻率: {detail.medication.frequency}</Text>
                        <Text style={styles.patientName}>使用條件: {detail.takeWhenNeeded || '無'}</Text>
                      </View>
                    ))}
                  </View>
                ))
              ) : (
                <Text style={styles.noDataText}>無藥單資料</Text>
              )}
            </ScrollView>
            <TouchableOpacity onPress={onClose} style={styles.leaveButton}>
              <Text style={styles.leaveButtonText}>離開</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </Modal>
    );
  };
  
  
  // 关于我们模态框组件
  const AboutusInfoModal = ({ visible, onClose }) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >

        <View style={styles.aboutusmodalContainer}>
          <View style={styles.aboutusmodalContent}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Image
                source={require('../assets/close.png')}
                style={{ width: 50, height: 50 }}
              />
              {/* <Text style={styles.closeButtonText}>關閉</Text> */}
            </TouchableOpacity>
            <Text style={styles.aboutusmodalTitle}>關於我們</Text>

            <Text style={styles.aboutusmodalSubtitle}>我們是一群熱衷於智慧醫療的學生，因為觀察家中長輩服藥情形，而有了發想組成「藥藥check it now!!」團隊。我們深知老年人或慢性病患者在用藥方面所面臨的挑戰，因此希望透過開發智慧藥盒，幫助他們更好地管理用藥，提升生活品質。

              我們的智慧藥盒具備藥物提醒、藥物辨識、遠端監控等功能，操作簡單，適合不同程度的使用者。未來，我們將持續優化智慧藥盒，使其成為更全面的健康管理工具。</Text>
            <View style={styles.line}></View>

            <Text style={styles.aboutusmodalSubtitle}>聯絡我們</Text>
            <Text style={styles.aboutusmodalText}>
              1013xxxx@me.mcu.edu.tw{'\n'}
              0912-345678
            </Text>
          </View>
        </View>
      </Modal>
    );
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear(); // 清除用戶的 AsyncStorage 資料
      navigation.navigate('Login'); // 導航至登入頁
    } catch (e) {
      console.error('Failed to clear AsyncStorage:');
    }
  };

  return (
    <View style={styles.profilecontainer}>
      <View style={styles.profileCard}>
        <Image source={require('../assets/user.png')} style={styles.userImage} />
        <Text style={styles.cardTitle}>個人資料</Text>
        <View style={styles.profileInfo}>
          <Text style={styles.profileLabel}>用戶名：</Text>
          {/* 使用讀取到的 username */}
          <Text style={styles.profileText}>{username || '未設定'}</Text>
        </View>
        {/* <View style={styles.profileInfo}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.profileLabel}>電子郵件:</Text>
            <Text style={styles.profileText}>{email || '未設定'}</Text>
          </View>
        </View> */}
        <View style={styles.profileInfo}>
          <Text style={styles.profileLabel}>角色：</Text>
          <Text style={styles.profileText}>{role || '病患'}</Text>
        </View>
      </View>
      <View style={styles.Sevencontainer}>
        <TouchableOpacity style={styles.changebutton} onPress={() => setEditProfileModalVisible(true)}>
          <Text style={styles.buttonText}>修改資料</Text>
        </TouchableOpacity>
        <EditProfileModal visible={editProfileModalVisible} onClose={() => setEditProfileModalVisible(false)} />

        {/* <TouchableOpacity style={styles.medlistbutton} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>我的藥單</Text>
        </TouchableOpacity> */}
        <MedicineInfoModal visible={modalVisible} onClose={() => setModalVisible(false)} />

        <TouchableOpacity style={styles.bindingbutton} onPress={() => setBindingModalVisible(true)}>
          <Text style={styles.buttonText}>綁定/解除</Text>
        </TouchableOpacity>
        <CaregiverBindingModal visible={bindingModalVisible} onClose={() => setBindingModalVisible(false)} />


        <TouchableOpacity style={styles.medlistbutton} onPress={() => setModalListVisible(true)}>
          <Text style={styles.buttonText}>我的藥物</Text>
        </TouchableOpacity>
        <MedicineListModal visible={modalListVisible} onClose={() => setModalListVisible(false)} />

        <TouchableOpacity style={styles.remindbutton} onPress={() => setAboutusModalVisible(true)}>
          <Text style={styles.buttonText}>關於我們</Text>
        </TouchableOpacity>
        <AboutusInfoModal visible={aboutusModalVisible} onClose={() => setAboutusModalVisible(false)} />

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>登出</Text>
        </TouchableOpacity>
        <Image source={require('../assets/sevenlogo.png')} style={{ width: 150, height: 150,  }} />
      </View>
    </View>
  );
}
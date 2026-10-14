import { API_BASE_URL } from '../apiConfig';
import React, {useRef,useState, useEffect, useLayoutEffect, useContext} from 'react';
import {View,ScrollView, Text, TextInput, TouchableOpacity, Alert, Switch, Image,KeyboardAvoidingView,Platform, ImageBackground, StyleSheet, ActivityIndicator} from 'react-native';
import styles from '../styles';
import RNPickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../axiosConfig';
import { LinearGradient } from 'expo-linear-gradient';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SvgCssUri } from 'react-native-svg/css';
import BACKSVG from '../assets/back.svg'
import ActionSheet from "react-native-actions-sheet";
import LoadingComponent from '../components/LoadingComponent';
import CookieManager from '@react-native-cookies/cookies';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
export const EmailAndPasswordScreen = ({navigation, route})=>{

  const {selectedIndex} = route.params;
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  // const emailRegex = /^[A-Z0-9._%+-]+@gmail\.com$/;
  const actionSheetRef = useRef(null);
  const [age, setAge] = useState(0);
  const [ageFocused, setAgeFocused] = useState(false);
  const [name, setName] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  
  const [genderFocused, setGenderFocused] = useState(false);
  const [gender, setGender] = useState(4);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberFocused, setPhoneNumberFocused] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({tabBarVisible: false});
  }, [navigation]);

  const [pageNum, setPageNum] = useState(1);

  const [tabIndex, setTabIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const Stack = createStackNavigator();
  const checkSession = async () => {
    const sessionId = await AsyncStorage.getItem('sessionId');
    if (sessionId) {
      axios.get(`${API_BASE_URL}/Account/Session`).then((response) => {
        console.log('Session is valid');
        navigation.navigate('首頁');
      }).catch(err=>{
        console.error('Request failed.');

      })
    }
  }
  useEffect(()=>{
    checkSession();
  },[])
  const handleLogin = async () => {
    setIsLoading(true);
    try {

      const response = await axios.post(
        `${API_BASE_URL}/Account/login/`,
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const cookies = await CookieManager.get(`${API_BASE_URL}/`);
      console.log('Logged in');
      // await AsyncStorage.setItem('sessionId', sessionId);

      const sessionId = cookies['.AspNetCore.Session'];
      if(sessionId){
        await AsyncStorage.setItem('sessionId', JSON.stringify(sessionId));
      }
      // Save user information to AsyncStorage
      // 註：iOS模擬器可能無法正確保存數據
      await AsyncStorage.setItem('userEmail', email);
      await AsyncStorage.setItem('userRole', selectedValue);

      Alert.alert('登入成功', '你現在已經登入成功！');

      // Navigate to HomeScreen after successful login
      navigation.navigate('首頁');
    } catch (error) {
      console.error('錯誤取得數據: ');
      console.error('Request failed.');
      Alert.alert('登入失敗', '請檢查您的帳號及密碼並再試一次。');
    } finally{
      setIsLoading(false);
    }
  };

  const handleRegister = () => {
    actionSheetRef.current.show();
    return
  };

  const selectedValue = tabIndex === 0 ? 'caregiver' : 'patient';

  const handleSubmit = () => {
    if (!emailRegex.test(email)) {
      Alert.alert('無效的電子郵件', '請輸入有效的電子郵件地址。');
      return;
    }
    if(isRegisterMode && password !== passwordConfirm){
      Alert.alert('密碼不一致', '請確保密碼和確認密碼相同。');
      return;
    }


    // 檢查電子郵件格式是否正確

  
    if (isRegisterMode) {
      handleRegister();
    } else {
      handleLogin();
    }
  };
  const handleActorChange = (role)=>{
    setSelectedIndex(role); 
  }
  const submitRegister = () =>{
    setIsLoading(true)
    if(name == ""){
      Alert.alert("姓名空白","請輸入姓名")
      return
    }
    if(age == 0){
      Alert.alert("年齡空白","請輸入年齡")
      return
    }
    if(age >123 || age < 0){
      Alert.alert("年齡格式錯誤","請輸入正確的年齡")
      return
    }
    if(phoneNumber.length != 10){
      Alert.alert("手機號碼格式錯誤","請輸入正確的手機號碼")
      return
    }
    let data = {
      name: name,
      age: age,
      phoneNumber,
      gender:gender,
      account:{
        email: email,
        password: password
      }
    }

    axios.post(`${API_BASE_URL}/account/`+selectedIndex, data).then(()=>{
      Alert.alert("註冊成功")
      setIsRegisterMode(false)
      actionSheetRef.current.hide()
    }).catch((err)=>{
      console.error('Registration failed.');
      Alert.alert("註冊成功")
    }).finally(()=>{
      setIsLoading(false)
    })
  }
  return (
    <View>
        <LinearGradient  colors={['#84CEFF',  '#FFF']} style={{height:90,borderTopLeftRadius:15,borderTopRightRadius:15,elevation:1}}>
  <TouchableOpacity style={{top:60, left:20, flexDirection:'row',alignItems:'center'}}
  onPress={()=>{
          //navigate to the Stack's first screen
          navigation.navigate('SelRoleScreen')
            
          }}>
      <BACKSVG fill="#007AFF"></BACKSVG>
       <Text style={{fontSize:20, color:"#007AFF"}}>選擇身份</Text>
        </TouchableOpacity>
    </LinearGradient>
    <ScrollView contentContainerStyle={styles.loginPageScrollViewContainer}
    keyboardShouldPersistTaps="handled"
>
<View style={styles.screenContainer}>
<View style={styles.headerTitleContainer}>
      <Text style={styles.headerTitle}>{ selectedIndex == "patient"?"用藥者登入":"照護者登入" }</Text>
    </View>
    <Image source={require('../assets/login1.png')} style={styles.topImage} />
      <View style={{width:"80%"}}>
        <Text style={{fontSize: 17}}>電子郵件</Text>
      </View>
    <TextInput
      placeholder="example@yoyocheckitnow.com"
      value={email}
      onChangeText={setEmail}
      onFocus={() => setEmailFocused(true)}
      onBlur={() => setEmailFocused(false)}
      style={[
        styles.emaillogininput,
        {backgroundColor: emailFocused ? '#e6f0ff' : 'white'},
      ]}
    />
      <View style={{width:"80%", top:15}}>
        <Text style={{fontSize: 17}}>密碼</Text>
      </View>
    <TextInput
      placeholder="應大於8位數"
      value={password}
      onChangeText={setPassword}
      onFocus={() => setPasswordFocused(true)}
      onBlur={() => setPasswordFocused(false)}
      secureTextEntry
      style={[
        styles.passwordlogininput,
        {backgroundColor: passwordFocused ? '#e6f0ff' : 'white'},
      ]}
    />
    {isRegisterMode &&
    <View style={{width:"100%", justifyContent:'center', alignItems:'center'}}>
    <View style={{width:"80%", top:30}}>
        <Text style={{fontSize: 17}}>確認密碼</Text>
      </View>
    <TextInput
      placeholder="應與密碼相同"
      value={passwordConfirm}
      onChangeText={setPasswordConfirm}
      onFocus={() => setPasswordFocused(true)}
      onBlur={() => setPasswordFocused(false)}
      secureTextEntry
      style={[
        styles.passwordlogininput1,
        {backgroundColor: passwordFocused ? '#e6f0ff' : 'white'},
      ]}

    />
    </View>}        
    <TouchableOpacity onPress={handleSubmit} style={emailRegex.test(email) && password.length >= 8 ? styles.loginbuttonActive: styles.loginbutton}
      >
      <Text style={styles.loginbuttonText}>
        {isRegisterMode ? '註冊' : '登入'}
      </Text>
    </TouchableOpacity>
    
    <View style={styles.switchContainer}>
      <Text>{isRegisterMode ? '已有帳戶?' : '沒有帳戶?'}</Text>
      <Switch
        value={isRegisterMode}
        onValueChange={() => setIsRegisterMode(!isRegisterMode)}
      />
    </View>
  </View>
</ScrollView>
<ActionSheet ref={actionSheetRef}>
      <ScrollView contentContainerStyle={styles.actionSheetScroll}>
      <View style={styles.actionSheetHeaderContainer}>
        <Text style={styles.actionSheetHeaderTitle}>註冊資料</Text>
        </View>

        <View style={styles.actionSheetBodyContainer}>
        <Text style={styles.actionSheetBodyTextInputText}>姓名</Text>
               <TextInput 
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
                style={[
                  styles.emaillogininput,
                  {backgroundColor: nameFocused ? '#e6f0ff' : 'white'},
                ]}
                value={name}
                maxLength={10}  //setting limit of input
                onChangeText={setName}
                />
            <Text style={styles.actionSheetBodyTextInputText}>年齡</Text>
               <TextInput 
                onFocus={() => setAgeFocused(true)}
                onBlur={() => setAgeFocused(false)}
                style={[
                  styles.emaillogininput,
                  {backgroundColor: ageFocused ? '#e6f0ff' : 'white'},
                ]}
                onChangeText={setAge}

                keyboardType='numeric'
                value={age}
                maxLength={3}  //setting limit of input
                />
               <Text style={styles.actionSheetBodyTextInputText}>性別</Text>
                <View style={styles.loginContainer}>
                  <RNPickerSelect style={{position:'absolute'}}
                    onValueChange={value => setGender(value)}
                    items={[
                      {label: '男性', value: 1},
                      {label: '女性', value: 2},
                      {label: '其他', value: 3},
                      {label: '不願透露', value: 4}
                    ]}
                  />
        </View>
        <Text style={styles.actionSheetBodyTextInputText}>手機號碼</Text>
               <TextInput 
                               onChangeText={setPhoneNumber}
                keyboardType='numeric'
                onFocus={() => setPhoneNumberFocused(true)}
                onBlur={() => setPhoneNumberFocused(false)}
                style={[
                  styles.emaillogininput,
                  {backgroundColor: phoneNumberFocused ? '#e6f0ff' : 'white'},
                ]}
                value={phoneNumber}
                />
        <TouchableOpacity onPress={submitRegister} style={styles.loginbuttonActive2}
          >
          <Text style={styles.loginbuttonText}>
            送出
          </Text>
        </TouchableOpacity>
          </View>
        </ScrollView>
    </ActionSheet>

</View>
  )}


export  const SelRoleScreen = ({navigation})=>{
  const [selectedIndex, setSelectedIndex] = useState("patient"); // Define the state for selectedIndex
  const handleNextStep = () =>{
    if(selectedIndex == ""){
      Alert.alert("身份空白","請先選擇您欲登入的身份")
    }else{
      navigation.navigate('EmailAndPasswordScreen',{selectedIndex})
    }
  }
  return(
    <View style={{height:'100%', width:'100%'}}>
  <LinearGradient  colors={['#84CEFF',  '#FFF']} style={{height:90,borderTopLeftRadius:15,borderTopRightRadius:15,width:'100%'}}>

    <View style={{top:40, left:20}}>
    <Text style={styles.headerTitle}>選擇您的身份</Text>
    </View>
  </LinearGradient>
  <View style={styles.screenContainer}>

  <View style={{width:"90%"}}>
    <TouchableOpacity onPress={()=>{setSelectedIndex("patient")}} style={styles.firstPageButton}>
      <Image source={require('../assets/pillIcon.png')} style={{height:50, width:50}} />
      <View style={{flexDirection:'column', justifyContent: 'center', marginLeft:10}}>
        <Text style={styles.fontBold}>用藥者</Text>
        <Text style={styles.fontSemiBold}>定時追蹤並服用藥物</Text>
      </View>
      <BouncyCheckbox
      useBuiltInState={false}
      disableText
      isChecked={selectedIndex == "patient"}
      style={styles.checkboxstyle}
      onPress={()=>{setSelectedIndex("patient")}}>
      </BouncyCheckbox>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{setSelectedIndex("caregiver")}} style={styles.firstPageButton}>
      <Image source={require('../assets/heartIcon.png')} style={{height:50, width:50}} />
      <View style={{flexDirection:'column', justifyContent: 'center', marginLeft:10}}>
        <Text style={styles.fontBold}>照護者</Text>
        <Text style={styles.fontSemiBold}>用藥通知及協助病患服用藥物</Text>
      </View>
      <BouncyCheckbox
      useBuiltInState={false}
      disableText
      isChecked={selectedIndex == "caregiver"}
      style={styles.checkboxstyle}
      onPress={()=>{setSelectedIndex("caregiver")}}>
      </BouncyCheckbox>
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={handleNextStep} style={styles.firstPageButtonNext}
    >
    <Text style={styles.loginbuttonText}>
    下一步
    </Text>
  </TouchableOpacity>
</View>
</View>
  )}
export default function LoginScreen({navigation}) {


















  return (
    <View
    style={{ flexGrow: 1 }}
    >
      { isLoading ? <ActivityIndicator size="large" color="#0000ff" style={styles.loadingFullScreen} /> : null
        
      }
  


    </View>
  );
}

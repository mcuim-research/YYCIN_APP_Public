import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff', // 設置 ScrollView 的背景色為白色
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'

  },
  firstContainer: {
    backgroundColor: "#ffffff",
    paddingVertical: 70,
    paddingHorizontal: 165,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    width: '100%', // 設置寬度為100%
  },
  secondContainer: {
    backgroundColor: "#ffffff",
    paddingVertical: 70,
    paddingHorizontal: 165,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    width: '100%', // 設置寬度為100%
  },
  thirdContainer: {
    backgroundColor: "#ffffff",
    paddingVertical: 70,
    paddingHorizontal: 165,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    width: '100%', // 設置寬度為100%
  },
  forthContainer: {
    paddingVertical: 70,
    paddingHorizontal: 165,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    width: '100%', // 設置寬度為100%
  },
  fifthContainer: {
    backgroundColor: "#ffffff",
    paddingVertical: 70,
    paddingHorizontal: 165,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    width: '100%', // 設置寬度為100%
  },
  sixthContainer: {
    paddingVertical: 70,
    paddingHorizontal: 165,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    width: '100%', // 設置寬度為100%
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loginPageScrollViewContainer: {
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstButtonContainer: {
    backgroundColor: "#97CBFF",
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20, // 添加 margin 來分隔元素
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7,
  },
  // secondButtonContainer: {
  //   backgroundColor: "#97CBFF",
  //   paddingVertical: 25,
  //   paddingHorizontal: 25,
  //   borderRadius: 10,
  //   marginBottom: 20, // 添加 margin 來分隔元素
  //   shadowColor: "#000",
  //   shadowOffset: { width: 3, height: 5 },
  //   shadowOpacity: 0.5,
  //   shadowRadius: 5,
  //   elevation: 7,
  // },
  secondButtonContainer2: {
    position: 'absolute',
    top: 10, // 調整這裡來設置垂直位置
    right: 10, // 調整這裡來設置水平位置
  },
  thirdButtonContainer: {
    backgroundColor: "#97CBFF",
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20, // 添加 margin 來分隔元素
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7,
  },
  forthButtonContainer: {
    backgroundColor: "#97CBFF",
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20, // 添加 margin 來分隔元素
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7,
  },
  fifthButtonContainer: {
    backgroundColor: "#97CBFF",
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20, // 添加 margin 來分隔元素
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7,
  },
  sixthButtonContainer: {
    backgroundColor: "#97CBFF",
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20, // 添加 margin 來分隔元素
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7,
  },
  medBoxButtonContainer: {
    backgroundColor: "#A6FFFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: 'absolute',
    borderRadius: 5,
    top: '20%', // 调整这个值来改变按钮的位置
  },
  ownmedBoxButtonContainer: {
    backgroundColor: "#A6FFFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: 'absolute',
    borderRadius: 5,
    top: '30%', // 调整这个值来改变按钮的位置
  },
  textContainer: {
    position: 'absolute',
    top: 80, // 调整这个值来改变文本容器的垂直位置
    right: 70, // 调整这个值来改变文本容器的水平位置
    flexDirection: 'column',
    alignItems: 'flex-end', // 使文本项在水平方向上对齐到右侧
  },
  textContainer2: {
    position: 'absolute',
    top: 20, // 调整这个值来改变文本容器的垂直位置
    left: 25, // 调整这个值来改变文本容器的水平位置
    flexDirection: 'column',
    alignItems: 'flex-end', // 使文本项在水平方向上对齐到右侧
    fontSize: 20,
  },
  textContainer3: {
    position: 'absolute',
    top: 70, // 调整这个值来改变文本容器的垂直位置
    right: 200, // 调整这个值来改变文本容器的水平位置
    flexDirection: 'column',
    alignItems: 'flex-end', // 使文本项在水平方向上对齐到右侧
  },
  textContainer4: {
    position: 'absolute',
    top: 90, // 调整这个值来改变文本容器的垂直位置
    right: 200, // 调整这个值来改变文本容器的水平位置
    flexDirection: 'column',
    alignItems: 'flex-end', // 使文本项在水平方向上对齐到右侧
  },
  medicationText: {
    position: 'absolute',
    marginVertical: 5,
    top: 100,
    right: 220,
    marginTop: 10, // 添加 marginTop 來確保文本之間有間距
    alignSelf: 'flex-start', // 確保文本在容器內部左對齊
    flexDirection: 'column',
  },
  medmaterialButtonContainer: {
    // backgroundColor: "#A6FFFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: 'absolute',
    borderRadius: 5,
    right: 120,
    bottom: 325, // 调整这个值来改变按钮的位置
  },
  savedDataContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: 'absolute',
    right: 100,
    bottom: 80, // 调整这个值来改变按钮的位置
  },
  textItem: {
    fontFamily: 'Matemasie-Regular.ttf',
    fontSize: 25,
    top: 50,
    right: 100,
  },
  savedItem: {
    fontSize: 20,
    bottom: 250,
    right: 10,
  },
  buttonText2: {
    color: '#000000',
    fontSize: 20,
  },
  saveButton: {
    position: 'absolute',
    backgroundColor: '#A6FFFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    bottom: 80,
    right: 250,
  },
  deleteButton: {
    position: 'absolute',
    backgroundColor: '#A6FFFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    bottom: 80,
    right: 100,
  },
  queryButton: {
    position: 'absolute',
    backgroundColor: '#A6FFFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    bottom: 400,
    right: 250,
  },
  datebutton: {
    position: 'absolute',
    // backgroundColor: '#A6FFFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    bottom: 325,
    right: 230,
  },
  timebutton: {
    position: 'absolute',
    backgroundColor: '#A6FFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    top: 200,
    right: 230,
  },
  timebutton2: {
    position: 'absolute',
    backgroundColor: '#A6FFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    top: 200,
    right: 70,
  },
  timebutton3: {
    position: 'absolute',
    backgroundColor: '#A6FFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    top: 260,
    right: 230,
  },
  timebutton4: {
    position: 'absolute',
    backgroundColor: '#A6FFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    top: 260,
    right: 55,
  },
  timeText: {
    fontSize: 18, // 设置字体大小
    color: "#000", // 可以调整字体颜色
  },
  pickerContainer: {
    position: 'absolute',
    top: 200, // 調整這裡來設置picker的位置
    right: 200, // 調整這裡來設置picker的位置
  },
  pickerContainer2: {
    position: 'absolute',
    top: 50, // 調整這裡來設置picker的位置
    right: 200, // 調整這裡來設置picker的位置
  },
  searchBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 20,
    width: '50%',
  },
  emaillogininput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    top: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: '80%',
  },
  passwordlogininput: {
    height: 40,
    top: 20,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: '80%',
  },
  passwordlogininput1: {
    height: 40,
    top: 35,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: '80%',
  },
  loginbutton: {
    backgroundColor: 'grey',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    width: '50%',
    top: 40,
    marginBottom: 20,
  },
  loginbuttonActive: {
    backgroundColor: '#1865c9',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    width: '50%',
    top: 40,
    marginBottom: 20,

  },
  loginbuttonActive2: {
    backgroundColor: '#1865c9',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    width: '50%',
    top: 10,
    marginBottom: 20,

  },
  loginbuttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: "bold"
  },
  logoutContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  logoutButton2: {
    backgroundColor: '#97CBFF',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 20,   // 增加水平內邊距，使按鈕與屏幕兩側有些距離
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  loginContainer: {
    top: 10, // 調整這裡來設置picker的位置
    right: 80, // 調整這裡來設置picker的位置
    fontSize: 4,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    color: 'black',
    paddingRight: 5,
    width: 150,
    backgroundColor: '#fff',
    flex: 1
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.1,
    marginVertical: 30
  },
  noteInput: {
    top: 150,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 15,
  },
  historyItem: {
    marginTop: 150,
    position: 'relative',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  recorddeleteButton: {
    color: 'red',
  },
  addButton: {
    top: 170,
    backgroundColor: '#97CBFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
  },
  menuButton: {
    position: 'relative',
    right: 185,
    padding: 10,
  },
  camerabutton: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 30,
    top: -25,
    elevation: 5,
  },
  searchuserbutton: {
    backgroundColor: '#97CBFF', // 背景颜色
    padding: 5, // 内边距
    borderRadius: 5, // 圆角
    alignItems: 'center', // 使文本居中
  },
  topImage: {
    alignItems: 'center',
    position: 'relative',
    top: 15,
    marginLeft: 10,
    marginRight: 10,
    flex: 0.1,
    resizeMode: 'cover'
  },
  itemContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#8E8E8E',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    borderWidth: 1,        // 設置邊框寬度
    borderColor: '#000',   // 設置邊框顏色為黑色
  },
  itemDescription: {
    fontSize: 30,
    color: '#666',
    marginTop: 5,
  },
  meddetailsContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  meditemDetails: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  medbackButton: {
    marginTop: 20,
    fontSize: 20,
    color: '#000000',
    borderRadius: 5,
    textAlign: 'center',
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 30,
    height: 30,
    right: 10, // 添加圖片與文字之間的間距
  },
  itemTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  icon: {
    marginLeft: 10, // 在名稱和圖標之間加入一些間距
  },
  infoBox: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  infoText: {
    fontSize: 14,
  },
  temperatureHumidityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  temperatureContainer: {
    flex: 0, // 設置為 0 以使用固定大小
    width: 180, // 設定固定寬度
    height: 150, // 設定固定高度
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10, // 分隔溫度與濕度
  },
  humidityContainer: {
    flex: 0, // 設置為 0 以使用固定大小
    width: 180, // 設定固定寬度
    height: 150, // 設定固定高度
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 10, // 分隔溫度與濕度
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchInput: {
    width: '90%',
    height: 40, // 調整高度
    borderColor: '#ccc', // 邊框顏色
    borderWidth: 1, // 邊框寬度
    borderRadius: 10, // 邊角圓度
    paddingLeft: 15, // 文字與邊框距離
    fontSize: 20, // 文字大小
    backgroundColor: '#f9f9f9', // 背景顏色
    margin: 10, // 外部邊距
    top: 40
  },
  formContainer: {
    bottom: 40,
    backgroundColor: '#f7f7f7', // 柔和背景色
    padding: 20,
    borderRadius: 10, // 圓角
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3, // 陰影效果
    marginBottom: 20,
  },
  dateText: {
    fontSize: 15,
    marginBottom: 10,
  },
  labelText: {
    fontSize: 12,
    marginBottom: 5,
    alignSelf: 'flex-start', // 將文字對齊到左側
  },
  userlabel: {
    fontSize: 24,
    marginBottom: 5,
  },
  userinput: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: '80%',
  },
  emaillabel: {
    fontSize: 24,
    marginBottom: 5,
  },
  emailinput: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: '80%',
  },
  savepersonalbutton: {
    marginTop: 15,
    padding: 5,
    backgroundColor: '#97CBFF',
    borderRadius: 5,
  },
  savepersonalbuttonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  savepersonalcloseButton: {
    marginTop: 15,
    padding: 5,
    backgroundColor: '#97CBFF',
    borderRadius: 5,
  },
  timeButton5: {
    borderRadius: 5,
    padding: 2,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    alignItems: 'center', // 按鈕裡面的文字置中
  },
  saveButton2: {
    top: 5,
    backgroundColor: '#f0f0f0',
    padding: 2,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center', // 按鈕文字置中
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  headerTitleContainer: {
    top: 0,
    position: 'absolute',
    justifyContent: 'left',
    width: '90%',
    elevation: 2
  },
  actionSheetHeaderContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  actionSheetHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  actionSheetScroll: {
    marginBottom: 0,
  },
  actionSheetBodyContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },
  actionSheetBodyTextInputText: {
    fontSize: 17,
    textAlign: "left"
    , width: '80%',
    marginTop: 20
  },
  calendarContainer: {
    position: 'absolute', // 使用绝对定位
    top: 50, // 根据需要调整位置
    width: '100%', // 设置宽度
    alignSelf: 'center', // 使日历居中
  },
  resultContainer: {
    // borderRadius: 10, // 圆角
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 8,
    // elevation: 3, // 阴影效果
    // marginBottom: 20,
    // width: '90%', // 设置宽度为屏幕的90%
    // alignSelf: 'center', // 使容器居中
    top: 180,
    // right: 100,
  },
  medtimeTitle: {
    fontSize: 30, // 调大标题字体
    fontWeight: 'bold',
    color: '#333',
    top: 300,
    // marginBottom: 15, // 增加与时间文字的间距
    textAlign: 'center', // 设置为左对齐
  },
  noDataText:{
    fontSize: 30, // 调大标题字体
    fontWeight: 'bold',
    color: '#333',
    // marginBottom: 15, // 增加与时间文字的间距
    textAlign: 'center', // 设置为左对齐
  },
  medtimeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // 控制元素在一行內的間距
    alignItems: 'center',             // 垂直居中
    marginVertical: 5,
  },
  medicationName: {
    fontSize: 28, // 调大用药时间字体
    color: '#000000',
    marginVertical: 6, // 增加每个时间段之间的间距
    textAlign: 'left', // 设置为左对齐
    fontWeight: 'bold',
  },
  dateTimeText: {
    fontSize: 20,  // 改變時間後的字大小
    color: '#000000',  // 可以改成你需要的顏色
  },
  actionText: {
    fontSize: 20,  // 改變動作後的字大小
    color: '#000000',
  },
  statusText: {
    fontSize: 20,  // 改變狀態後的字大小
    color: '#000000',
  },
  medtimeText: {
    fontSize: 28, // 调大用药时间字体
    color: '#000000',
    marginVertical: 6, // 增加每个时间段之间的间距
    textAlign: 'left', // 设置为左对齐
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#97CBFF', // 綠色按鈕背景
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, // 按鈕圓角
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // 按鈕陰影
    alignItems: 'center', // 按鈕文字居中
  },
  calendar: {
    height: 400,
    width: 400,
  },
  firstPageButton: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'left',
    alignItems: 'center',
    flexDirection: 'row',
    height: 190
  },
  fontBold: {
    fontWeight: 'bold',
    fontSize: 35,
    paddingBottom: 5,
  },
  checkboxstyle: {
    position: 'absolute',
    right: 20
  },
  fontSemiBold: {
    fontSize: 20,
  },
  loadingFullScreen: {
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    position: "fixed",
  },
  firstPageButtonNext: {
    backgroundColor: '#1865c9',
    borderRadius: 15,
    padding: 15,
    top: 5,
    alignItems: 'center',
    width: '50%',
    marginBottom: 20,

  },
  captureButton: {
    backgroundColor: '#97CBFF',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    width: '50%',
    top: 300,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  viewButton
  : {
    backgroundColor: '#97CBFF',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    width: '50%',
    top: 310,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  profilecontainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },

  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    width: '90%',
    flexDirection: 'column', // Maintain vertical arrangement
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    top: 80,
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left', // 確保文本靠左對齊
  },
  userImage: {
    width: 100,  // 根據需要調整大小
    height: 100,
    position: 'absolute',
    top: 30,  // 調整頂部位置以匹配紅色框的位置
    right: 40,  // 調整右側位置以匹配紅色框的位置
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align items to the left
    alignItems: 'center', // Vertical alignment
    marginBottom: 5,
  },

  profileLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left', // 確保文本靠左對齊
  },

  profileText: {
    fontSize: 20,
    color: '#333',
    textAlign: 'left', // 確保文本靠左對齊
  },
  Sevencontainer: {
    flex: 1,
    flexDirection: 'row',       // 設置主軸為橫向
    flexWrap: 'wrap',           // 允許換行
    justifyContent: 'space-around', // 水平居中並且分散按鈕
    alignItems: 'center',       // 垂直居中
    padding: 20,                // 內邊距
    top: 100,
  },

  changebutton: {
    width: 180,
    height: 135,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: '#97CBFF',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,           // 按鈕之間的間距
  },

  medlistbutton: {
    width: 180,
    height: 135,
    padding: 15,
    backgroundColor: '#97CBFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  scanCardTitle: {
    fontSize: 18, // 這裡設置字體大小，單位是 dp
    color: '#000', // 這裡是字體顏色
    marginBottom: 20,
  },
  medicineName: {
    fontSize: 20, // 設置藥物名稱的字體大小
    color: '#333',
    fontWeight: 'normal',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  bindingbutton: {
    width: 180,
    height: 135,
    padding: 15,
    backgroundColor: '#97CBFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  remindbutton: {
    width: 180,
    height: 135,
    padding: 15,
    backgroundColor: '#97CBFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  aboutusbutton: {
    width: 180,
    height: 135,
    padding: 15,
    backgroundColor: '#97CBFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  logoutButton: {
    width: 355,
    height: 50,
    padding: 5,
    backgroundColor: '#97CBFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明背景
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute', // 設定絕對定位
    bottom: 550, // 距離頂部 20
    right: 20, // 距離右邊 20
    padding: 5,
    // backgroundColor: '#97CBFF',
    borderRadius: 5,
  },
  aboutusmodalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // 半透明背景
  },
  aboutusmodalContent: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  aboutusmodalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    bottom: 60,
  },
  aboutusmodalSubtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#ccc',
    marginVertical: 5,
  },
  aboutusmodalText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  medmodalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 背景半透明
  },
  medmodalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  medmodalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  medmodalDescription: {
    fontSize: 20,
    marginBottom: 10,
  },
  medmodalSideEffect: {
    fontSize: 20,
    color: 'red',
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',

    /* align to the left*/
    textAlign: 'left',

  },
  homelabel: {
    fontSize: 25,
  },
  buttonTextForth: {
    color: '#000',
    fontSize: 22,
  },
  notificationArea: {
    backgroundColor: '#97CBFF',
    padding: 5,
    marginBottom: 10,
    borderRadius: 5,
    alignSelf: 'stretch',
    position: 'absolute',
    top: 125,
    left: 15,
    // right: 20,
  },
  notificationItem: {
    backgroundColor: '#FFD700',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  notificationTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  notificationDetails: {
    marginTop: 5,
  },
  notificationText: {
    fontSize: 20,
    color: '#000',
  },
  noNotificationText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 25,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  medicineInfoItem: {
    marginBottom: 15,
    alignItems: 'center',
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5, // 根據需求調整間距
  },
  checkboxesContainer: {
    flexDirection: 'column',
    marginVertical: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  checkboxChecked: {
    backgroundColor: '#97CBFF',
  },
  staticCheckboxLabel: {
    fontSize: 16,
    marginRight: 15,
    marginBottom: 5,
  },
  medlistcloseButton: {
    backgroundColor: '#97CBFF',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  checkmark: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  medicineItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  medicineText: {
    fontSize: 16,
  },
  medicineList: {
    maxHeight: 200,
  },
  medicineListModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  medicineListModalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  medicineListModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  leaveButton: {
    backgroundColor: '#97CBFF',
    padding: 5,
    borderRadius: 8,
    top: 10,
    alignItems: 'center',
  },
  leaveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listleaveButton: {
    backgroundColor: '#97CBFF',
    padding: 5,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  backButton: {
    // padding: 5,
    // borderRadius: 5,
    // bottom: 200,
    // right: 130,
    backgroundColor: '#97CBFF',
    padding: 5,
    borderRadius: 8,
    top: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  medicinelistName: {
    fontSize: 20, // 設置藥物名稱的字體大小
    color: '#333',
    fontWeight: 'normal',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  medicinelistDescription: {
    fontSize: 20, // 設置藥物名稱的字體大小
    color: '#333',
    fontWeight: 'normal',
    marginBottom: 15,
  },
  medicineCardTitle: {
    fontSize: 20, // 設置藥物名稱的字體大小
    color: '#333',
    fontWeight: 'normal',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  bindingInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  bindingInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    fontSize: 16,
  },
  bindingAddButton: {
    backgroundColor: '#97CBFF',
    padding: 10,
    borderRadius: 8,
  },
  unbindingButton: {
    backgroundColor: '#97CBFF',
    padding: 10,
    borderRadius: 8,
    left:10,
  },
  unbindingButtonText:{
    color: 'white',
    fontWeight:'bold',
    fontSize: 16,
  },
  bindingAddButtonText: {
    color: 'white',
    fontWeight:'bold',
    fontSize: 16,
  },
  caregiverText:{
    fontSize: 24,
    fontWeight:'bold',
  },
  heading:{
    fontSize: 24,
    fontWeight:'bold',
  },
  bindingList: {
    maxHeight: 200,
  },
  caregiverItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  caregiverInfo: {
    flex: 1,
  },
  caregiverId:{
    color: '#000',
    fontSize: 14,
  },
  caregiverName: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  caregiverRelationship: {
    fontSize: 14,
    color: 'black',
  },
  bindingToggleButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
  },
  boundButton: {
    backgroundColor: '#ff4444',
  },
  unboundButton: {
    backgroundColor: '#4CAF50',
  },
  bindingToggleButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  fifscrollViewContainer: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row', // 設置為水平排列
  },
  medicineBox: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginRight: 10, // 加入右邊的邊距以分隔每個藥物框
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: 250, // 設定固定寬度，便於水平滾動顯示
  },
  medicineInfoLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  medicineInfoLabel2: {
    fontSize: 20,
    marginBottom: 5,
  },
  medicineInfoValue: {
    fontSize: 20,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkboxLabel: {
    fontSize: 18,
    marginLeft: 8,
  },
  returnButton: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#97CBFF',
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center', // 居中對齊按鈕
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  clearButton: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#97CBFF',
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center', // 居中對齊按鈕
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  returnButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    padding: 10,
    top: 180,
    right: 100,
    backgroundColor: '#fff', // 替換成需要的背景色
    borderRadius: 10,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 5,
    marginBottom: 5,
  },
  logText:{
    fontSize:24,
    fontWeight:'bold',
  },
  medicationName:{
    fontSize:20,
  },
  patientName:{
    fontSize:18,
    fontWeight:'bold',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%', // 框框寬度，可根據需求調整
    maxHeight: '100%', // 框框高度
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  forthscrollViewContainer:{
    top:100
  },
});
export default styles;
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Image, Modal } from 'react-native';
import styles from '../styles';

export default function SixScreen() {

  const imageMap = {
    '1': '1.jpg',
    '2': '2-1.jpg',

  };
  const [medicines, setMedicines] = useState([
    { id: '1', name: '驅異樂膜衣錠', description: '治療成人及六歲以上孩童因過敏性鼻炎、慢性蕁麻疹等所引起的各種過敏徵狀。', sideeffect: '便秘、腹瀉、口乾、嗜睡、疲倦。' },
    { id: '2', name: '糖漸平膜衣錠5毫克', description: '治療第二型糖尿病。', sideeffect: '鼻咽炎、腹瀉、咳嗽、低血糖(極度飢餓感、心悸、發抖、冒冷汗 不尋常的虛弱及疲倦)、關節痛、胰臟炎等。' },
    { id: '3', name: '心寧美', description: '治療帕金森氏症及其徵候群，尤其是肌肉僵直及運動遲緩。', sideeffect: '消化不良、口乾、味覺苦、流涎、吞嚥困難、磨牙、打嗝、腹部疼痛及鬱積、便秘、脹氣、舌頭有灼熱感。' },
    { id: '4', name: '利福全錠', description: '癲癇。', sideeffect: '憂鬱、噁心、胃口改變、頭痛、睡眠障礙、精神激動、眼功能障礙、困倦、眩暈、虛弱及情緒不穩。' },
    { id: '5', name: '吐福錠', description: '胃腸脹氣、噁心、嘔吐。', sideeffect: '有口乾、口渴、暫時性皮疹或搔癢、頭痛、腸胃不適、腹瀉、嗜睡等。' },
    { id: '6', name: '維帕特膜衣錠', description: '癲癇。', sideeffect: '頭暈、頭痛、噁心、複視。' },
    { id: '7', name: '克瀉寧錠', description: '腸炎、腹瀉、潰瘍性結腸炎。', sideeffect: '便秘。' },
    { id: '8', name: '合必爽錠', description: '主要用於治療高血壓，可增加到心臟的血液及氧氣供應、控制或緩解胸痛（心絞痛）。', sideeffect: '頭痛、眩暈、疲倦、反胃、胃口不好、頭痛、潮紅的情形。' },
    { id: '9', name: '肚比康糖衣錠', description: '解除胃腸道平滑肌痙攣。', sideeffect: '噁心、暈眩、頭痛。' },
    { id: '10', name: '得安穩膜衣錠', description: '高血壓、心衰竭。', sideeffect: '頭痛、暈眩、病毒感染、上呼吸道感染、咳嗽、腹瀉、疲勞、鼻炎、竇炎、背痛、腹痛、噁心、咽炎、關節痛。' },
    { id: '11', name: '可嗽平', description: '鎮咳、祛痰。', sideeffect: '嗜眠、暈眩、腸胃不適、腹瀉、便秘、噁心、嘔吐。 ' },
    { id: '12', name: '康肯膜衣錠', description: '狹心症、高血壓、穩定型慢性中度至重度心衰竭。', sideeffect: '頭痛、疲倦、心跳不規則、偶見血壓及脈博速率之顯著降低或房室傳導之障礙。' },
    { id: '13', name: '暢痰錠', description: '袪痰。', sideeffect: '輕微升糖作用、過敏反應。' },
    { id: '14', name: '愛舒疼錠	', description: '止痛、退燒。', sideeffect: '紅疹、噁心、嘔吐、食慾不振、耳鳴等。' },
    { id: '15', name: '亞涕', description: '緩解過敏性鼻炎、枯草熱。', sideeffect: '心悸、胸痛、喘鳴、呼吸急促、痙攣、不安、幻覺等。' },
    { id: '16', name: '銀之杏膜衣錠', description: '改善末梢血管血循作用。', sideeffect: '噁心、嘔吐、腹瀉、頭痛、暈眩。' },
    { id: '17', name: '雅努麻錠', description: '成人類風濕性關節炎。', sideeffect: '高血壓，胃腸不適，皮膚疹，掉髮或肝功能指數上升等。' },
    { id: '18', name: '得百利寧錠', description: '退燒,止痛。', sideeffect: '思睡、頭昏眼花、抑鬱、噁心、眩暈、嘔吐、口乾等。' },
    { id: '19', name: '諾快寧膜衣錠', description: '葡萄球菌、鏈球菌、肺炎雙球菌、腦膜炎球菌及其他具有感受性細菌引起之感染症。', sideeffect: '腹瀉、噁心、嘔吐。' },
    { id: '20', name: '安莫西林', description: '葡萄球菌、鏈球菌、肺炎雙球菌、腦膜炎球菌及其他具有受性細菌引起之感染症。', sideeffect: '噁心、嘔吐、腹瀉、紅斑、蕁麻疹。' },
    { id: '21', name: '博疏痛膜衣錠', description: '退燒、消炎止痛。', sideeffect: '胃痛、噁心、嘔吐。' },
    { id: '22', name: '滅咳康錠', description: '鎮咳。', sideeffect: '輕度嗜睡、頭暈、疲倦。' },
    { id: '23', name: '斯邁爾錠', description: '治療消化性潰瘍。', sideeffect: '嗜睡、疲倦。' },
    { id: '24', name: '約克佳胃康錠', description: '緩解胃部不適或灼熱感。', sideeffect: '便秘、腹瀉、口渴、腹脹、頭痛、嗜睡等。' },
    { id: '25', name: '安伏咳錠', description: '冒、咽頭炎、喉頭炎、氣管炎、支氣管炎、支氣管擴張等。', sideeffect: '	噁心、嘔吐。' },
    { id: '26', name: '冠脂妥膜衣錠', description: '高膽固醇血症，高三酸甘油酯血症。', sideeffect: '頭痛、頭暈、便秘、噁心、腹痛、肌痛、罕見肌病及橫紋肌溶解、衰弱無力。' },
    { id: '27', name: '合利他命F50糖衣錠', description: '神經炎、維生素B1缺乏諸症。', sideeffect: '無明顯副作用。' },
    { id: '28', name: '壓平利淨錠', description: '高血壓。', sideeffect: '腹瀉、頭痛、嘔吐、便秘、直立性低血壓、面色潮紅、鼻塞。' },
    { id: '29', name: '千憂解', description: '重鬱症、廣泛性焦慮症、糖尿病周邊神經痛、纖維肌痛。', sideeffect: '頭痛、噁心、口乾、嗜睡、便秘、多汗、食慾降低、姿勢性低血壓。' },
    { id: '30', name: '必瑞錠', description: '利尿、改善水腫、降血壓。', sideeffect: '血容積減少、低血鉀、低血鎂。' },
    { id: '31', name: '來喜妥', description: '利尿、高血壓。', sideeffect: '口乾、口渴加重、噁心、嘔吐、異常疲累等。' },
    { id: '32', name: '抗泌腫錠', description: '甲狀腺機能亢進症。', sideeffect: '噁心、頭痛、發燒等。' },
    { id: '33', name: '依索蜜糖衣錠', description: '狹心症。', sideeffect: '噁心、便秘、頭痛、暈眩、水腫。' },
    { id: '34', name: '安立壓', description: '高血壓。', sideeffect: '食慾不振、噁心、潮紅、眩暈、頭痛、疲倦無力等。' },
    { id: '35', name: '律血錠', description: '高血壓、心肌梗塞後的心衰竭。', sideeffect: '暈眩、虛弱、噁心。' },
    { id: '36', name: '易得平錠', description: '治療高血壓。', sideeffect: '暈眩、腹瀉、周邊水腫等。' },
    { id: '37', name: '健安心', description: '治療慢性心臟衰竭。', sideeffect: '低血壓、高血鉀、頭暈、腎衰竭、血管性水腫等。' },
    { id: '38', name: '艾胃逆服咀嚼錠', description: '治療胃食道逆流、胃灼熱、胃及十二指腸潰瘍、胃酸過多。', sideeffect: '腹瀉、便祕、噁心、嘔吐、打嗝等。' },
    { id: '39', name: '絡鼻寧錠', description: '緩解過敏性鼻炎、枯草熱。', sideeffect: '倦怠感、口乾。' },
    { id: '40', name: '次碳酸鉍錠', description: '腹瀉、腸炎、痢疾、潰瘍性結腸炎。', sideeffect: '便秘、腹瀉、噁心、大便、舌頭顏色異常、食慾不振、不安、無力感等。' },
    { id: '41', name: '可樂必妥膜衣錠', description: '治療急性鼻竇炎、慢性支氣管炎的急性惡化。', sideeffect: '關節或肌肉疼痛。' },
    { id: '42', name: '秋水仙鹼片', description: '痛風。', sideeffect: '胃腸不適、過敏反應。' },
    { id: '43', name: '吉他韋膜衣錠', description: '感染第一型人類免疫缺乏病毒(HIV-1)之治療。', sideeffect: '腹瀉、噁心、頭痛、疲倦、暈眩、嘔吐、胃腸脹氣、消化不良、腹痛、皮疹、憂鬱、乳酸中毒、肝腫大、脂肪肝等。' },
    { id: '44', name: '心康樂錠', description: '狹心症、心律不整、高血壓、偏頭痛。', sideeffect: '心跳徐緩、低血壓、四肢冰冷、噁心、失眠、倦怠、食慾不振等。' },
    { id: '45', name: '康纖芙持續性釋放錠', description: '體重控制。', sideeffect: '噁心、頭痛、嘔吐等。' },
    { id: '46', name: '樂力靜錠', description: '焦慮狀態。', sideeffect: '思睡、眩暈、虛弱及情緒不穩。' },
    { id: '47', name: '冠欣持續性藥效膜衣錠', description: '預防狹心症發作。', sideeffect: '心跳徐緩、低血壓、噁心、食慾不振等。' },
    { id: '48', name: '喜華膜衣錠', description: '治療對CEFUROXIME敏感的細菌所引起的感染。', sideeffect: '噁心、嘔吐、腹瀉、胃腸不適、皮疹、頭痛。' },
    { id: '49', name: '維諾心膜衣錠', description: '慢性狹心症之治療。', sideeffect: '	血管擴張，抑制血小板凝集。' },
    { id: '50', name: '毅力黴素膠囊', description: '抗細菌感染。', sideeffect: '噁心、嘔吐、腹瀉、胃腸不適、皮疹、頭痛。' },
    { id: '51', name: '賜福力欣膠囊', description: '葡萄球菌、鏈球菌、肺炎雙球菌、腦膜炎球菌及其他具有感受性細菌引起之感染症', sideeffect: '嘔吐、胃部不適、腹瀉、中度皮膚發疹等。' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // 控制模態框的顯示狀態


  // 根據搜尋框內容過濾藥物清單
  const filteredMedicines = medicines.filter(med =>
    med.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => {
      setSelectedMedicine(item);
      setModalVisible(true); // 點擊後顯示模態框
    }}>
      <View style={styles.itemHeader}>
        <Image
          source={require('../assets/pills.png')}
          style={styles.itemImage}
        />
        <Text style={styles.itemTitle}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 只有當沒有選擇藥物時才顯示搜尋框 */}
      <TextInput
        style={styles.searchInput}
        placeholder="搜尋藥物..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <View style={{ height: 50 }} />  
      <FlatList
        data={filteredMedicines} // 使用過濾後的藥物清單
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      {/* 模態框 */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true} // 背景透明
        onRequestClose={() => {
          setModalVisible(false);
          setSelectedMedicine(null);
        }}
      >
        <View style={styles.medmodalContainer}>
          <View style={styles.medmodalContent}>
            {selectedMedicine && (
              <>
                <Text style={styles.medmodalTitle}>{selectedMedicine.name}</Text>
                <Text style={styles.medmodalDescription}>{selectedMedicine.description}</Text>
                <Text style={styles.medmodalSideEffect}>副作用：{selectedMedicine.sideeffect}</Text>
              </>
            )}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.medbackButton}>關閉</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

import * as React from 'react';
import { Text, View, TouchableOpacity,Image} from 'react-native';
import styles from '../styles';
import { BarChart } from 'react-native-chart-kit';

export default function ThirdScreen({ navigation }) {
    return (
      <View style={styles.screenContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('設定所有藥盒')}
          style={styles.medBoxButtonContainer}
        >
          <Text style={styles.buttonText2}>設定所有藥盒</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('設定個別藥盒')}
          style={styles.ownmedBoxButtonContainer}
        >
          <Text style={styles.buttonText2}>設定個別藥盒</Text>
        </TouchableOpacity>
      </View>
    );
  }
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import notifee, { TriggerType } from '@notifee/react-native';

function ScheduledNotificationScreen() {
  const [nextMedicationTime, setNextMedicationTime] = useState(null);
  const [nextIdentificationTime, setNextIdentificationTime] = useState(null);

  useEffect(() => {
    const setupNotifications = async () => {
      // 請求通知權限
      const settings = await notifee.requestPermission();

      if (settings.granted) {
        // 建立通知頻道 (Android)
        await notifee.createChannel({
          id: 'medication-reminder',
          name: '藥物提醒',
          importance: notifee.AndroidImportance.HIGH,
        });

        // 設置每天 18:00 的服藥通知
        await scheduleMedicationNotification();

        // 設置每天 18:05 的藥物辨識結果查詢通知
        await scheduleIdentificationNotification();
      }
    };

    setupNotifications();
  }, []);

  const scheduleMedicationNotification = async () => {
    // 取消所有現有的服藥通知
    await notifee.cancelNotifications(['medication-reminder']);

    // 計算下一個 18:00 的時間，要拍影片的時候在這裡修改時間

    const now = new Date();
    const nextNotification = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      20, 53, 0
    );

    // 如果現在時間已經過了今天的 18:00，就設定為明天的 18:00
    if (now > nextNotification) {
      nextNotification.setDate(nextNotification.getDate() + 1);
    }

    // 設置觸發器
    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: nextNotification.getTime(),
      repeatFrequency: notifee.RepeatFrequency.DAILY,
    };

    // 創建服藥通知
    await notifee.createTriggerNotification(
      {
        id: 'medication-reminder',
        title: '服藥提醒',
        body: '現在是 18:00，請記得服用您的藥物。',
        android: {
          channelId: 'medication-reminder',
        },
      },
      trigger
    );

    setNextMedicationTime(nextNotification);
  };

  const scheduleIdentificationNotification = async () => {
    // 取消所有現有的藥物辨識通知
    await notifee.cancelNotifications(['identification-reminder']);

    // 計算下一個 18:05 的時間
    const now = new Date();
    const nextNotification = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      20, 5, 10
    );

    // 如果現在時間已經過了今天的 18:05，就設定為明天的 18:05
    if (now > nextNotification) {
      nextNotification.setDate(nextNotification.getDate() + 1);
    }

    // 設置觸發器
    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: nextNotification.getTime(),
      repeatFrequency: notifee.RepeatFrequency.DAILY,
    };

    // 創建藥物辨識結果查詢通知
    await notifee.createTriggerNotification(
      {
        id: 'identification-reminder',
        title: '藥物辨識結果',
        body: '請打開app檢視您的藥物辨識結果。',
        android: {
          channelId: 'medication-reminder',
        },
      },
      trigger
    );

    setNextIdentificationTime(nextNotification);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>定時通知已設置</Text>
      {nextMedicationTime && (
        <Text>
          下一次服藥提醒時間：
          {nextMedicationTime.toLocaleString('zh-TW', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })}
        </Text>
      )}
      {/* {nextIdentificationTime && (
        <Text>
          下一次藥物辨識查詢提醒時間：
          {nextIdentificationTime.toLocaleString('zh-TW', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })}
        </Text>
      )} */}
    </View>
  );
}

export default ScheduledNotificationScreen;
import * as React from 'react';
import 'react-native-reanimated';
import { StyleSheet, View, StatusBar, Text, Image, TouchableOpacity, Switch, Linking } from 'react-native';
import { router } from 'expo-router';

export default function SettingsScreen() {
  const [settings, setSettings] = React.useState({
    examExitConfirmation: true,
    testExitConfirmation: false,
    appExitConfirmation: false,
  });

  return (
    <View>
      <StatusBar hidden backgroundColor="#e8e8e8" />
      <TouchableOpacity style={styles.navbar} onPress={() => router.navigate('/')}>
        <Image style={styles.navbarIcon} source={require('../../assets/images/back.png')} />
        <Text style={styles.navbarTitle}>Настройки</Text>
      </TouchableOpacity>

      <View style={styles.settingsBlock}>
        <Text style={styles.settingBlockTitle}>Экзамен</Text>

        <View style={styles.settingItem}>
          <TouchableOpacity
            onPress={() => setSettings({ ...settings, examExitConfirmation: !settings.examExitConfirmation })}
          >
            <Text>Запрашивать подтверждение при выходе из экзамена</Text>
          </TouchableOpacity>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={settings.examExitConfirmation ? '#579DD0' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setSettings({ ...settings, examExitConfirmation: !settings.examExitConfirmation })}
            value={settings.examExitConfirmation}
          />
        </View>
      </View>

      <View style={styles.settingsBlock}>
        <Text style={styles.settingBlockTitle}>Тесты</Text>

        <View style={styles.settingItem}>
          <TouchableOpacity
            onPress={() => setSettings({ ...settings, testExitConfirmation: !settings.testExitConfirmation })}
          >
            <Text>Запрашивать подтверждение при выходе из экзамена</Text>
          </TouchableOpacity>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={settings.testExitConfirmation ? '#579DD0' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setSettings({ ...settings, testExitConfirmation: !settings.testExitConfirmation })}
            value={settings.testExitConfirmation}
          />
        </View>
      </View>

      <View style={styles.settingsBlock}>
        <Text style={styles.settingBlockTitle}>Прочее</Text>

        <View style={styles.settingItem}>
          <TouchableOpacity
            onPress={() => setSettings({ ...settings, appExitConfirmation: !settings.appExitConfirmation })}
          >
            <Text>Запрашивать подтверждение при выходе из экзамена</Text>
          </TouchableOpacity>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={settings.appExitConfirmation ? '#579DD0' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setSettings({ ...settings, appExitConfirmation: !settings.appExitConfirmation })}
            value={settings.appExitConfirmation}
          />
        </View>

        <View style={styles.settingItem}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.rdm.tracktortest')}
          >
            <Text style={styles.settingLabel}>Оставить отзыв</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.settingItem}>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:rodewitsch@inbox.ru')}>
            <Text style={styles.settingLabel}>Обратная связь</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    height: 60,
    fontSize: 24,
    alignItems: 'center',
    paddingLeft: 20,
    backgroundColor: '#e8e8e8',
  },
  navbarIcon: {
    height: 24,
    width: 24,
    marginRight: 20,
  },
  navbarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  settingsBlock: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    marginTop: 20,
  },
  settingBlockTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#BD0008',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  settingLabel: {},
});

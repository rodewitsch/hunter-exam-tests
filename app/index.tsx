import * as React from 'react';
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function App() {
  return (
    <View>
      <StatusBar hidden backgroundColor="#e8e8e8" />
      <View style={styles.header}>
        <Image style={styles.headerLogo} source={require('../assets/images/react-logo.png')} />
        <Text style={styles.headerTitle}>Тесты охотничьего экзамена</Text>
      </View>

      <ScrollView style={styles.navigation}>
        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/exam')}>
          <Image style={styles.navigationItemIcon} source={require('../assets/images/exam.png')} />
          <Text style={styles.navigationItemTitle}>Экзамен</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/training/topics')}>
          <Image style={styles.navigationItemIcon} source={require('../assets/images/test.png')} />
          <Text style={styles.navigationItemTitle}>Тренировка</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/settings')}>
          <Image style={styles.navigationItemIcon} source={require('../assets/images/settings.png')} />
          <Text style={styles.navigationItemTitle}>Настройки</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 40,
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerLogo: {
    width: 100,
    height: 100,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
  },
  navigation: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  navigationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  navigationItemIcon: {
    height: 53,
    width: 41,
  },
  navigationItemTitle: {
    marginLeft: 20,
    fontSize: 20,
  },
});

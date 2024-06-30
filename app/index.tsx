import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.headerLogo} source={require('../assets/images/react-logo.png')} />
        <Text style={styles.headerTitle}>Тесты охотничьего экзамена</Text>
      </View>
      <Link href="/settings">View details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: '100%',
    backgroundColor: '#e8e8e8',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerLogo: {
    marginTop: 16,
    width: 100,
    height: 100,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 16,
  },
});

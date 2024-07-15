import 'react-native-reanimated';
import { StyleSheet, View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function DocumentsScreen() {
  return (
    <View>
      {/* <StatusBar hidden backgroundColor="#e8e8e8" /> */}
      <TouchableOpacity style={styles.navbar} onPress={() => router.navigate('/')}>
        <Image style={styles.navbarIcon} source={require('../../assets/images/back.png')} />
        <Text style={styles.navbarTitle}>Документы</Text>
      </TouchableOpacity>

      <ScrollView style={styles.navigation}>
        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/documents/open?doc=1')}>
          <Text style={styles.navigationItemTitle}>ПРАВИЛА ВЕДЕНИЯ ОХОТНИЧЬЕГО ХОЗЯЙСТВА И ОХОТЫ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/documents/open?doc=2')}>
          <Text style={styles.navigationItemTitle}>КРАСНАЯ КНИГА РЕСПУБЛИКИ БЕЛАРУСЬ. Понятия и выдержки</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/documents/open?doc=3')}>
          <Text style={styles.navigationItemTitle}>Закон Республики Беларусь «Об охране окружающей среды»</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/documents/open?doc=4')}>
          <Text style={styles.navigationItemTitle}>Закон Республики Беларусь «Об особо охраняемые территориях»</Text>
        </TouchableOpacity>
      </ScrollView>
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
  navigation: {
    paddingTop: 10,
    height: '90%',
    paddingHorizontal: 16,
  },
  navigationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  navigationItemIcon: {
    height: 53,
    width: 41,
  },
  navigationItemTitle: {
    marginHorizontal: 10,
    fontSize: 15,
  },
  topicTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#BD0008',
    marginBottom: 10,
  },
});

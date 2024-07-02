import 'react-native-reanimated';
import { StyleSheet, View, StatusBar, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function SettingsScreen() {
  const onPressLearnMore = () => {
    console.log('Button pressed');
  };

  return (
    <View>
      <StatusBar hidden backgroundColor="#e8e8e8" />
      <TouchableOpacity style={styles.navbar} onPress={() => router.navigate('/')}>
        <Image style={styles.navbarIcon} source={require('../../assets/images/back.png')} />
        <Text style={styles.navbarTitle}>Тренировка</Text>
      </TouchableOpacity>

      <ScrollView style={styles.navigation}>
        <Text style={styles.topicTitle}>Дикие животные и их охрана</Text>

        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/exam')}>
          <Text style={styles.navigationItemTitle}>
            Основы классификации животного мира. Классификация дичи. Охраняемые дикие животные
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/test')}>
          <Text style={styles.navigationItemTitle}>Основы биологии охотничьих животных</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/settings')}>
          <Text style={styles.navigationItemTitle}>
            Отличительные признаки охотничьих и охраняемых видов диких животных
          </Text>
        </TouchableOpacity>

        <Text style={styles.topicTitle}>
          Правила ведения охотничьего хозяйства и охоты с основами природоохранного законодательства
        </Text>

        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/settings')}>
          <Text style={styles.navigationItemTitle}>
            Природоохранное законодательство Республики Беларусь. Основные положения Правил ведения охотничьего
            хозяйства и охоты. Порядок выдачи охотничьих путевок и разрешений на добычу охотничьих животных.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/settings')}>
          <Text style={styles.navigationItemTitle}>
            Охота. Право на охоту и его реализация. Права и обязанности охотника. Порядок проведения охоты. Продукция
            охоты.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/settings')}>
          <Text style={styles.navigationItemTitle}>Сроки и способы охоты</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/settings')}>
          <Text style={styles.navigationItemTitle}>
            Правила безопасности охоты. Ориентирование на местности и иные вопросы безопасного и комфортного пребывания
            в угодьях
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/settings')}>
          <Text style={styles.navigationItemTitle}>
            Ответственность за нарушения Правил ведения охотничьего хозяйства и охоты, иного законодательства об охоте.
            Охотничий контроль
          </Text>
        </TouchableOpacity>

        <Text style={styles.topicTitle}>Орудия охоты</Text>

        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/settings')}>
          <Text style={styles.navigationItemTitle}>Орудия охоты. Охотничьи собаки</Text>
        </TouchableOpacity>

        <Text style={styles.topicTitle}>Прочие знания, необходимые охотнику</Text>

        <TouchableOpacity style={styles.navigationItem} onPress={() => router.navigate('/settings')}>
          <Text style={styles.navigationItemTitle}>
            Санитарная и радиационная безопасность при охоте. Доврачебная медицинская помощь на охоте
          </Text>
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
    height: '90%',
    marginHorizontal: 16,
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

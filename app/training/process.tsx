import 'react-native-reanimated';
import { StyleSheet, View, StatusBar, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import topics from '../../assets/questions/topics.js';
import { useState } from 'react';

export default function TrainingScreen() {
  const { topic } = useLocalSearchParams<{ topic: string }>();
  const topicData = topics[topic - 1];

  const initialTestState = {
    examStatus: 'inProgress',
    questionNumber: 0,
  };

  const [testState, setExamState] = useState(initialTestState);

  function setQuestion(number: number) {
    if (number > 44 || number < 0) return;
    setExamState({ ...testState, questionNumber: number });
  }

  return (
    <View>
      <StatusBar hidden backgroundColor="#e8e8e8" />
      <TouchableOpacity style={styles.navbar} onPress={() => router.navigate('/training/topics')}>
        <Image style={styles.navbarIcon} source={require('../../assets/images/back.png')} />
        <Text style={styles.navbarTitle}>Тренировка</Text>
      </TouchableOpacity>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.questionsNavigation}>
        {new Array(45).fill(0).map((_, index) => (
          <TouchableOpacity
            key={index + 1}
            style={{
              ...styles.questionsNavigationItem,
              marginLeft: !index ? 10 : 0,
              backgroundColor: index === testState.questionNumber ? 'red' : 'green',
            }}
            onPress={() => setQuestion(index)}
          >
            <Text style={styles.questionsNavigationItemTitle}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
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
  questionsNavigation: {
    paddingTop: 10,
  },
  questionsNavigationItem: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  questionsNavigationItemTitle: {},
});

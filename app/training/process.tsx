import 'react-native-reanimated';
import { StyleSheet, View, Modal, TouchableOpacity, Image, Text, ScrollView, Pressable } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import topics from '../../assets/questions/topics.js';
import React, { useState } from 'react';

interface TestState {
  examStatus: string;
  questionNumber: number;
  progress: { status: number; answers: number[] }[];
}

export default function TrainingScreen() {
  const { topic } = useLocalSearchParams<{ topic: string }>();
  const topicQuestions = topics[topic - 1];

  /**
   * Represents the initial state of the test.
   */
  const initialTestState: TestState = {
    examStatus: 'inProgress',
    questionNumber: topicQuestions.length - 1,
    progress: new Array(topicQuestions.length).fill(0).map((_, index) => ({ status: 0, answers: [] })),
  };

  const [testState, setExamState] = useState(initialTestState);
  const [imageModalVisible, setImageModalVisible] = useState(null);
  const [explanationModalVisible, setExplanationModalVisible] = useState(false);

  function setQuestion(number: number) {
    if (number > topicQuestions.length - 1 || number < 0) return;
    setExamState({ ...testState, questionNumber: number });
  }

  function setAnswer(question: number, answer: number) {
    const newProgress = testState.progress.map((item, index) => {
      if (index === question) {
        if (item.answers.includes(answer)) {
          return { ...item, status: 0, answers: item.answers.filter((a) => a !== answer) };
        } else {
          return { ...item, status: 0, answers: [...item.answers, answer] };
        }
      }
      return item;
    });
    setExamState({ ...testState, progress: newProgress });
  }

  return (
    <View>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginRight: '45%' }}
          onPress={() => router.navigate('/training/topics')}
        >
          <Image style={styles.navbarIcon} source={require('../../assets/images/back.png')} />
          <Text style={styles.navbarTitle}>Тренировка</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setExplanationModalVisible(true)}>
          {topicQuestions[testState.questionNumber].explanation ? (
            <Text style={styles.answerExplanationButton}>?</Text>
          ) : null}
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.questionsNavigation}>
        {new Array(topicQuestions.length).fill(0).map((_, index) => (
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

      <View style={styles.questionArea}>
        <View style={styles.questionTextArea}>
          <Text style={styles.questionText}>{topicQuestions[testState.questionNumber].questionText}</Text>
        </View>

        <Modal
          transparent={true}
          animationType="fade"
          visible={explanationModalVisible}
          onRequestClose={() => setExplanationModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(232, 232, 232, 0.96)',
              height: 40,
            }}
          >
            <ScrollView>
              <Text style={{ padding: 20, fontSize: 16, textAlign: 'justify' }}>{topicQuestions[testState.questionNumber].explanation}</Text>
            </ScrollView>
            <Pressable style={styles.explanationModalCloseButton} onPress={() => setExplanationModalVisible(false)}>
              <Text style={styles.explanationModalCloseButtonText}>X</Text>
            </Pressable>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="fade"
          visible={imageModalVisible !== null}
          onRequestClose={() => setImageModalVisible(null)}
        >
          <Pressable
            onPress={() => setImageModalVisible(null)}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(232, 232, 232, 0.8)',
            }}
          >
            <Image
              resizeMode="contain"
              style={{ width: '100%', height: '100%' }}
              source={{ uri: topicQuestions[testState.questionNumber].questionImages[imageModalVisible] }}
            />
          </Pressable>
        </Modal>

        <View style={styles.questionImagesArea}>
          {topicQuestions[testState.questionNumber].questionImages.map((image, index) => (
            <Pressable onPress={() => setImageModalVisible(index)}>
              <Image resizeMode="contain" style={styles.questionImage} key={index} source={{ uri: image }} />
            </Pressable>
          ))}
        </View>

        <ScrollView style={styles.questionAnswers}>
          {topicQuestions[testState.questionNumber].answers.map((answer, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setAnswer(testState.questionNumber, index)}
              style={{
                ...styles.questionAnswer,
                backgroundColor: testState.progress[testState.questionNumber].answers.includes(index)
                  ? 'red'
                  : '#f8f8f8',
              }}
            >
              <Text style={styles.questionAnswerText}>{answer}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
  answerExplanationButton: {
    fontSize: 20,
    width: 30,
    height: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 20,
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
  explanationModalCloseButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 20,
  },
  explanationModalCloseButtonText: {
    fontSize: 25,
  },
  questionsNavigationItemTitle: {},
  questionArea: {
    marginTop: 10,
    height: '85%'
  },
  questionTextArea: {
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  questionText: {
    fontSize: 18,
    textAlign: 'justify',
  },
  questionImagesArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questionImage: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
  },
  questionAnswers: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  questionAnswer: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 10,
  },
  questionAnswerText: {
    fontSize: 16,
  },
});

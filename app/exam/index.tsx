import 'react-native-reanimated';
import { StyleSheet, Button, View, StatusBar } from 'react-native';

export default function SettingsScreen() {
  const onPressLearnMore = () => {
    console.log('Button pressed');
  };

  return (
    <View>
      <StatusBar hidden backgroundColor="#e8e8e8" />
      <View style={styles.header}></View>

      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
  },
});

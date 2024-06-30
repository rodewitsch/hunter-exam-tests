import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import { Button, View } from 'react-native';

export default function SettingsScreen() {
  const onPressLearnMore = () => {
    console.log('Button pressed');
  };

  return (
    <View>
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

const styles = {
  header: {
    fontFamily: 'SpaceMono',
    fontSize: 24,
  },
};

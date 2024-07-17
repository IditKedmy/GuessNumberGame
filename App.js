import {ImageBackground, StyleSheet} from 'react-native';
import {StatusBar} from "expo-status-bar/build/StatusBar";
import StartScreen from "./screens/StartScreen";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen} colors={['#4e0329', '#ddb52f']}>
      <StatusBar style="light"/>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartScreen/>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});

import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import {StatusBar} from "expo-status-bar/build/StatusBar";
import StartScreen from "./screens/StartScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function startGameHandler(selectedNumber) {
    setUserNumber(selectedNumber);
  }

  let screen = <StartScreen onStartGame={startGameHandler}/>;
  if (userNumber) {
    screen = <GameScreen userChoice={userNumber}/>;
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={['#4e0329', '#ddb52f']}>
      <StatusBar style="light"/>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
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

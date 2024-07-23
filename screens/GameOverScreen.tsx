import {View, StyleSheet, Image, Text, useWindowDimensions, ScrollView} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import {Colors} from "../constants/colors";

type Props = {
  roundsNumber: number,
  userNumber: number,
  onRestart: () => void,
}

export default function GameOverScreen({roundsNumber, userNumber, onRestart}: Props) {
  const {width, height} = useWindowDimensions();
  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}/>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed
        <Text style={styles.highlight}> {roundsNumber} </Text>
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>
        .
      </Text>
      <PrimaryButton onPress={onRestart}>Restart Game</PrimaryButton>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    marginVertical: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary500,
    fontFamily: 'open-sans-bold',
  }
});

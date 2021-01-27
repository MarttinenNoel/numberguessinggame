import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {

  const [answer, setAnswer] = React.useState(Math.floor(Math.random() * 100) + 1)
  const [text,setText] = React.useState('Guess a number between 1-100 \n')
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState(1);


  const makeGuess = () => {
    setGuesses(guesses + 1);
    if (Number(guess) == Number(answer)) {
      Alert.alert("You guessed the number in " + guesses + " guesses");
      setAnswer(Math.floor(Math.random() * 100) + 1);
      setGuesses(1);
    }
    else if (Number(guess) < Number(answer)) {
      setText("Your guess " + guess + " is too low\n");
    }
    else if (Number(guess) > Number(answer)) {
      setText("Your guess " + guess + " is too high\n");
    }
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput
        style={{width: 50, borderColor: 'gray', borderWidth: 1}}
        keyboardType='numeric'
        onChangeText={guess => setGuess(guess)}
        value={guess}
      />
      <Button onPress={makeGuess} title="MAKE GUESS"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

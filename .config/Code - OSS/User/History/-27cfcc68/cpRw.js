import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';

const CalculatorApp = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const add = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum.toString());
  };

  const subtract = () => {
    const diff = parseFloat(num1) - parseFloat(num2);
    setResult(diff.toString());
  };

  const multiply = () => {
    const product = parseFloat(num1) * parseFloat(num2);
    setResult(product.toString());
  };

  const divide = () => {
    const quotient = parseFloat(num1) / parseFloat(num2);
    setResult(quotient.toString());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setNum1}
        value={num1}
        placeholder="Enter first number"
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setNum2}
        value={num2}
        placeholder="Enter second number"
      />
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={add} />
        <Button title="Subtract" onPress={subtract} />
        <Button title="Multiply" onPress={multiply} />
        <Button title="Divide" onPress={divide} />
      </View>
      {result ? (
        <Text style={styles.result}>Result: {result}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'red',
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
  Button: {
    color: 'red',
  },
  
  buttonContainer: {
    flexDirection: 'column',
    marginVertical: 20,
    
  },
  result: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default CalculatorApp;
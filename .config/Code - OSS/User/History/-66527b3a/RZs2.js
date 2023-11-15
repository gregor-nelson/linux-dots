import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

const App = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Type something:</Text>
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
        onChangeText={handleInputChange}
        value={inputText}
      />
      <Text style={{ fontSize: 20, marginTop: 10 }}>You typed: {inputText}</Text>
    </View>
  );
};

export default App;
import React from 'react';
import { View, Text, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default SignUpScreen;

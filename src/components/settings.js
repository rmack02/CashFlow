import React from 'react';
import { View, Text, Button } from 'react-native';

const Settings = () => {
  return (
    <View>
      <Text>Settings</Text>
      <Button title="Edit Profile" onPress={() => {/* Edit profile logic */}} />
    </View>
  );
};

export default Settings;

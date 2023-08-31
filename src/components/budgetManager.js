import React from 'react';
import { View, Text, Button } from 'react-native';

const BudgetManager = () => {
  return (
    <View>
      <Text>Budget Manager</Text>
      <Button title="Set Budget" onPress={() => {/* Set budget logic */}} />
    </View>
  );
};

export default BudgetManager;

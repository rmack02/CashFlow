import React from 'react';
import { View, Text, Button } from 'react-native';

const ExpenseTracker = () => {
  return (
    <View>
      <Text>Expense Tracker</Text>
      <Button title="Add Expense" onPress={() => {/* Add expense logic */}} />
    </View>
  );
};

export default ExpenseTracker;

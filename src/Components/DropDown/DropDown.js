import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const DropDown = () => {
  const gender = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'},
    {id: 3, name: 'Others'},
  ];
  return (
    <View>
      <TouchableOpacity></TouchableOpacity>
      {gender.map((val, i) => {
        return <Text></Text>;
      })}
    </View>
  );
};

export {DropDown};

const styles = StyleSheet.create({});

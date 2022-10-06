import {View, Text} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';
// import { StatusBar } from "expo-status-bar";
const StatusBarCom = ({...props}) => {
  const isfocussed = useIsFocused();
  console.log('----isCocussed----', isfocussed);
  return <StatusBar style="auto" />;
};

export default StatusBarCom;

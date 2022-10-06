import {StyleSheet, ActivityIndicator, Modal, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from './../constants/theme';

const Loader = () => {
  return (
    <Modal
      animationType="fade"
      statusBarTranslucent={true}
      transparent={true}
      visible={true}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 0,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.gray,
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            opacity: 0.7,
          }}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({});

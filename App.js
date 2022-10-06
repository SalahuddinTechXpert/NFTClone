/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {COLORS} from './src/constants/theme';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
} from 'react-native';
import base64 from 'react-native-base64';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
const App = () => {
  const [user, setuser] = useState({});
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState([]);

  useEffect(() => {
    getUsers();
    /// for real time Update
    const subscribe = firestore()
      .collection('messages')
      .onSnapshot(querySnapshot => {
        querySnapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            let data: any = change.doc.data();
            data.createdAt = data.createdAt.toDate();
            setMessage(prevMessage => GiftedChat.append(prevMessage, data));
          }
        });
      });
    return () => subscribe();
  }, []);

  const getUsers = async () => {
    let userLocal = await AsyncStorage.getItem('user');
    if (userLocal) setuser(JSON.parse(userLocal));
  };
  const handlePress = async () => {
    let _id = base64.encode(Email);
    let userLocal = {id: _id, email: Email};
    await AsyncStorage.setItem('user', JSON.stringify(userLocal));
    setuser(userLocal);
  };
  const onSend = (messages: IMessage[]) => {
    firestore()
      .collection('messages')
      .doc(Date.now().toString())
      .set(messages[0]);
  };
  if (Object.keys(user).length === 0) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          placeholder="Your username"
          value={Email}
          onChangeText={setEmail}
        />
        <Button title="SignIn" onPress={handlePress} />
      </View>
    );
  } else
    return (
      <View style={{flex: 1, backgroundColor: COLORS.primary}}>
        <GiftedChat
          messages={Message}
          onSend={Message => onSend(Message)}
          user={{_id: user.id}}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  keyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import firebase from 'firebase/compat/app';
import styles from './styles';
import InputText from './components/InputText';
import {messages} from './constants/dummy';
import ChatIcon from './Assets/Images/IconChat.png';

import {COLORS, SIZES, FONTS, SHADOWS} from './constants/theme';
import {db, auth} from '../firebase';
import {GiftedChat} from 'react-native-gifted-chat';
const Chat = () => {
  // const [messages, setMessages] = useState([]);
  // const [TypedText, setTypedText] = useState('');
  const message = [
    {
      id: 'message1',
      type: 'text',
      text: 'Messages from this server',
    },
  ];
  const [msg, setMsg] = useState('');

  async function sendMessage(e) {
    const {uid} = auth.currentUser;

    await db.collection('messages').add({
      text: msg,

      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg('');
    scroll.current.scrollIntoView({behavior: 'smooth'});
  }

  //sign in

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  // const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection('messages')
      .orderBy('createdAt')
      .limit(50)
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()));
      });
  }, []);

  // const user = () => {
  //   return {
  //     _id: Firebase.uid,
  //     name: 'Kashif',
  //   };
  // };

  // useEffect(() => {
  //   Firebase.get(message =>
  //     setMessages(previous => ({
  //       messages: GiftedChat.append(previous.message, message),
  //     })),
  //   );
  // }, []);
  // const Chat = (
  //   <GiftedChat
  //     messages={messages}
  //     onSend={Firebase.sendMessage}
  //     user={user()}
  //   />
  // );

  return (
    // <keyboardAvoidingView
    //   style={{flex: 1}}
    //   behavior="padding"
    //   keyboardVerticalOffset={30}
    //   enabled>
    //   {Chat}
    // </keyboardAvoidingView>
    <View style={styles.chatbox}>
      <View style={styles.IconImage}>
        <Image
          style={{width: '40%', height: '50%', resizeMode: 'contain'}}
          source={ChatIcon}
        />
        <Text style={styles.textOver}>start chat with the customer</Text>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,

            width: '30%',
            height: 50,
            borderWidth: 1,
            backgroundColor: COLORS.primary,
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
          }}
          onPress={() => {
            signInWithGoogle();
          }}>
          {/* <Icon name="send" size={20} color={COLORS.primary} /> */}
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              color: COLORS.defaultBlack,
              fontSize: SIZES.medium,
            }}>
            Send
          </Text>
        </TouchableOpacity>

        {messages.map((id, text) => {
          return <Text key={id}>{text}</Text>;
        })}
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chatboxTextes}>
        {/* {messages.map((data, id) => {
          return (
            <View
              style={{
                alignItems: 'center',
                padding: 5,
                paddingHorizontal: 10,
                marginHorizontal: 5,
                borderRadius: 20,
                backgroundColor: COLORS.gray2,
                borderWidth: 1,
                borderColor: COLORS.gray,
                zIndex: 100,

                ...SHADOWS.light,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setMsg(data.message);
                }}>
                <Text
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: COLORS.defaultBlack,
                    fontSize: SIZES.medium,
                  }}>
                  {data.message}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })} */}
      </ScrollView>

      <View style={styles.textInputContainer}>
        <TextInput
          style={{
            width: '95%',
            paddingHorizontal: 15,
            marginLeft: '2%',
            color: COLORS.defaultBlack,
          }}
          value={msg}
          onChangeText={text => setMsg(text)}
          placeholder={'Type a message'}
          placeholderTextColor={COLORS.defaultBlack}
          multiline={true}
        />
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,

            width: '20%',
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
          }}
          onPress={() => {
            sendMessage();
          }}>
          {/* <Icon name="send" size={20} color={COLORS.primary} /> */}
          <Text
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              color: COLORS.white,
              fontSize: SIZES.medium,
            }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;

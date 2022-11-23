import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { buyCrypto } from '../redux/actions/getCryptoDataAction';

const BuyModal = (props) => {
  const [inputText, setInputText] = useState('0');
  const dispatch = useDispatch();

  const handlePress = () => {
    props.setModalVisiblity(false)
    dispatch(buyCrypto(props.modalData, inputText));
  }

  return (
    <View style={styles.modalContainer}>
        <Text style={styles.inputHeader} >ENTER AMOUNT</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setInputText(text)}
        placeholder='0'
        placeholderTextColor={'rgb(124,142,161)'}
        maxLength={7}
        keyboardType='decimal-pad'
      />
      <TouchableOpacity style={styles.buyNowBtn} onPress={handlePress} >
        <Text style={styles.buyNowBtnTxt} >BUY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: 662,
    width: '100%',
    backgroundColor: 'rgb(38,52,69)',
    position: 'absolute',
    top: 104,
    alignItems:'center',
    justifyContent:'center'
  },
  textInput: {
    height: 60,
    // width:80,
    // backgroundColor:'red',
    fontSize:40,
    fontWeight:'600',
    color:'rgb(124,142,161)',
    borderBottomWidth:1,
    borderBottomColor: 'rgb(124,142,161)',
    marginVertical:10
  },
  inputHeader:{
    color: 'rgb(124,142,161)',
  },
  buyNowBtn:{
    backgroundColor:'rgb(82,175,92)',
    height:40,
    width:120,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5
  },
  buyNowBtnTxt:{
    color:'white'
  }
});

export default BuyModal;

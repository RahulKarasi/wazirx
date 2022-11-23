import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderBar from '../components/HeaderBar';
import {useSelector, useDispatch} from 'react-redux';
import BuyModal from '../components/BuyModal';
import { getCryptoData } from '../redux/actions/getCryptoDataAction';

const QuickBuyScreen = () => {
  const [modaVisiblity, setModalVisiblity] = useState(false);
  const [modalData, setModalData] = useState({});
  const stateData = useSelector(state => state.getCryptoDataReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCryptoData())
},[])

  const handleBuyBtn = item => {
    setModalVisiblity(true);
    setModalData(item);
  };

  const renderItem = ({item, index}) => {
    return (
      <View
        style={
          index % 2 == 0 ? styles.itemContainer : styles.evenItemContainer
        }>
        <View style={styles.coinDataSection}>
          <View>
            <Image style={styles.coinLogo} source={{uri: item.logo}} />
          </View>
          <View style={styles.coinData}>
            <View style={styles.nameSymbol}>
              <Text style={styles.CoinName}>{item.name}</Text>
              <Text style={styles.CoinSymbol}>{item.symbol}</Text>
            </View>
            <View style={styles.priceSection}>
              <Text
                style={styles.currPrice}>{`₹${item.current_price}  |`}</Text>
              <Text
                style={
                  item.current_price > item.previous_week
                    ? styles.profitPercent
                    : styles.lossPercent
                }>
                {`${parseFloat(
                  ((item.current_price - item.previous_week) /
                    item.previous_week) *
                    100,
                ).toFixed(2)} %`}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buyBtn}
          onPress={() => handleBuyBtn(item)}>
          <Text style={styles.buyBtnTxt}>BUY</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderBar />
      <Image
        style={styles.bannerImg}
        source={require('../utils/images/bannerImg.jpeg')}
        resizeMode="stretch"
      />
      <View style={styles.listHeader}>
        <Text style={styles.popularTxt}>POPULAR COINS</Text>
        <TouchableOpacity style={styles.mostTradedBtn}>
          <Image
            style={styles.threeLines}
            source={require('../utils/icons/three-lines.png')}
          />
          <Text style={styles.mostTradedTxt}>Most Traded</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={stateData.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Modal animationType={'fade'} transparent={true} visible={modaVisiblity}>
        <BuyModal setModalVisiblity={setModalVisiblity} modalData={modalData} />
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgb(23,34,44)',
    flex: 1,
  },
  bannerImg: {
    height: 220,
    width: '100%',
  },
  listHeader: {
    backgroundColor: 'rgb(38,52,69)',
    height: 53,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  popularTxt: {
    color: 'rgb(124,142,161)',
    fontWeight: '700',
  },
  mostTradedTxt: {
    color: 'rgb(124,142,161)',
    fontSize: 13,
    fontWeight: '600',
  },
  mostTradedBtn: {
    backgroundColor: 'rgb(26,35,45)',
    height: 30,
    width: 125,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  threeLines: {
    height: 19,
    width: 19,
  },
  itemContainer: {
    height: 70,
    backgroundColor: 'rgb(35,48,63)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    borderTopWidth: 0.2,
  },
  evenItemContainer: {
    height: 70,
    backgroundColor: 'rgb(38,52,69)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    borderTopWidth: 0.2,
  },
  buyBtn: {
    backgroundColor: 'rgb(42,61,68)',
    height: 34,
    width: 77,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buyBtnTxt: {
    color: 'rgb(113,186,116)',
    fontWeight: '800',
  },
  coinDataSection: {
    flexDirection: 'row',
  },
  coinData: {
    marginLeft: 14,
  },
  coinLogo: {
    height: 24,
    width: 24,
  },
  nameSymbol: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CoinName: {
    color: 'white',
    fontWeight: '800',
  },
  CoinSymbol: {
    color: 'rgb(124,142,161)',
    fontWeight: '600',
    marginLeft: 7,
    fontSize: 12,
  },
  priceSection: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
  },
  currPrice: {
    color: 'rgb(124,142,161)',
    fontSize: 11,
    fontWeight: '500',
  },
  profitPercent: {
    marginLeft: 5,
    fontSize: 11,
    color: '#00ff00',
    // fontWeight:'800'
  },
  lossPercent: {
    marginLeft: 5,
    fontSize: 11,
    color: 'red',
    fontWeight: '600',
  },
  modalContainer: {
    height: 662,
    width: '100%',
    backgroundColor: 'rgb(38,52,69)',
    position: 'absolute',
    top: 104,
  },
  textInput: {
    height: 40,
    // backgroundColor: 'green',
  },
});

export default QuickBuyScreen;

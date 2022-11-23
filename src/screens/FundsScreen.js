import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import HeaderBar from '../components/HeaderBar';
import {useSelector} from 'react-redux';

const FundsScreen = () => {
  const stateData = useSelector(state => state.getCryptoDataReducer);

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
              <Text style={styles.CoinSymbol}>{item.symbol}</Text>
              <Text style={styles.CoinQuantity}>{item.quantity}</Text>
            </View>
            
              <Text style={styles.CoinName}>{item.name}</Text>
            
          </View>
        </View>
        <Text style={styles.priceTxt} >{`₹  ${parseFloat(item.current_price * item.quantity).toFixed(2)}`}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderBar />
      <View style={styles.listHeader}>
        <Text style={styles.popularTxt}>FUNDS</Text>
        
      </View>
      <FlatList
        data={stateData.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'rgb(23,34,44)',
    flex: 1,
  },
  itemContainer: {
    height: 85,
    backgroundColor: 'rgb(35,48,63)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    borderTopWidth: 0.2,
  },
  evenItemContainer: {
    height: 85,
    backgroundColor: 'rgb(38,52,69)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    borderTopWidth: 0.2,
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
  CoinSymbol: {
    color: 'white',
    fontWeight: '800',
  },
  CoinName: {
    color: 'rgb(124,142,161)',
    fontWeight: '600',
    fontSize: 12,
    marginTop:8
  },
  priceTxt:{
    color:'white'
  },
  CoinQuantity:{
    color: 'rgb(124,142,161)',
    fontWeight: '600',
    fontSize: 13,
    marginLeft: 9
  },
  listHeader: {
    backgroundColor: 'rgb(38,52,69)',
    height: 60,
    alignItems: 'center',
    justifyContent:'center',
    borderTopWidth:0.2,
    borderBottomWidth:0.2,
  },
  popularTxt: {
    color: 'rgb(124,142,161)',
    fontWeight: '700',
  },

});

export default FundsScreen;

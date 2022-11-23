import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getCryptoData } from '../redux/actions/getCryptoDataAction';
import TextV from '../components/TextV';
import HeaderBar from '../components/HeaderBar';

const HomeScreen = () => {
    const stateData = useSelector(state => state.getCryptoDataReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCryptoData())
    },[])

  return (
    <SafeAreaView style= {styles.mainContainer} >
        <StatusBar  barStyle="light-content" />
        <HeaderBar />
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'rgb(25,34,43)',
        flex:1
    }
})

export default HomeScreen
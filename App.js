import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <BottomTabNavigator />
    </Provider>
  );
};

export default App;

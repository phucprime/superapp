/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from './home';
import {theme} from './theme';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const FoodScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <SafeAreaView
          style={{flex: 1, backgroundColor: theme.bg}}
          edges={['top', 'right', 'left']}>
          <StatusBar barStyle="dark-content" />
          {isLoading && (
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size={'small'} color="#000" />
            </View>
          )}
          {!isLoading && <Home />}
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default FoodScreen;

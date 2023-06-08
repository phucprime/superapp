/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';

import Spacer from './Spacer';
import TopTabs from './TopTabs';

import PostListWrapper from './PostListWrapper';
import Header from './Header';
import Stories from './Stories';

const Screen = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <View style={{flexGrow: 1}}>
      <View
        style={{
          flex: 1,
        }}>
        <Header />
        <Spacer size={10} />
        <Stories />
        <Spacer size={5} />
        <TopTabs
          selectedTabIndex={selectedTabIndex}
          setSelectedTabIndex={setSelectedTabIndex}
        />
      </View>

      <View
        style={{
          flex: 1.5,
        }}>
        <PostListWrapper selectedTabIndex={selectedTabIndex} />
      </View>
    </View>
  );
};

export default Screen;

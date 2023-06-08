/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import Text from '../shared/Text';
import {BORDER_WIDTH} from '../utils';

const SectionHeader = ({title, withViewButton = false}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderWidth: BORDER_WIDTH,
    }}>
    <Text style={{}}>{title}</Text>
    {withViewButton && <Text style={{}}>View all</Text>}
  </View>
);

export default SectionHeader;

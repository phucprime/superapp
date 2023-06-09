import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';

const Text = React.memo(({children, style, ...rest}) => {
  return (
    <RNText {...rest} style={[styles.default, style]}>
      {children}
    </RNText>
  );
});

export default Text;

const styles = StyleSheet.create({
  default: {},
});

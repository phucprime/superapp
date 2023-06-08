import React from 'react';
import {View} from 'react-native';

const Overlay = React.memo(({params}) => {
  // const opacity = useSharedValue(1);

  // const bottomOverlayStyle = useAnimatedStyle(() => ({
  //     opacity: opacity.value,
  // }));

  const bottomOverlayDefaultStyle = {
    // ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    height: 200,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'red',

    // height: ;
    // zIndex: -10
  };

  return (
    <View style={[bottomOverlayDefaultStyle]}>
      {/* <View style={{
                height: 200,
            }} /> */}

      {/* <LinearGradient
                colors={gradientColors}
                style={{
                    height: '100%',
                    justifyContent: 'flex-end',
                }}
            >
                <View>

                    <View>

                    </View>

                    <View>

                    </View>

                </View>
            </LinearGradient> */}
    </View>
  );
});

export default Overlay;

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useEffect, useMemo} from 'react';
import {ScrollView} from 'react-native';
import {categories} from '../data';
import PostList from './PostList';
import {SCR_WIDTH} from '../utils';

const PostListWrapper = React.memo(({selectedTabIndex}) => {
  const scrollViewRef = useRef();

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: selectedTabIndex * SCR_WIDTH,
        y: 0,
        animated: true,
      });
    }
  }, [selectedTabIndex]);

  const postLists = useMemo(() => {
    return categories.map(cat => {
      return <PostList key={cat.name} />;
    });
  }, [categories]);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      style={{
        flex: 1,
      }}>
      {postLists}
    </ScrollView>
  );
});

export default PostListWrapper;

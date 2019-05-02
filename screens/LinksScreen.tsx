import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ShuffleLinksView } from '../components/ShuffleLinksView';

export interface Props {
  name: string
}

interface State {
}
export default class LinksScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        {/* <ExpoLinksView /> */}
        <ShuffleLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

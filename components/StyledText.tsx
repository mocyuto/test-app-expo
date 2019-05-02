import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

export interface Props {
  style?: TextStyle
}

export class MonoText extends React.Component<Props> {
  render() {
    return <Text {...this.props} style={this.getStyle()} />;
  }

  getStyle = (): StyleProp<TextStyle> => {
    return [this.props.style, { fontFamily: 'space-mono' }];
  }
}

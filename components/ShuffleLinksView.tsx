import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { WebBrowser } from 'expo';
import Touchable from 'react-native-platform-touchable';

export interface Props {
}

export class ShuffleLinksView extends React.Component<Props> {
  render() {
    return (
      <View>
        <Text style={styles.optionsTitleText}>
          Resources
        </Text>

        <Touchable
          background={Touchable.Ripple('#ccc', false)}
          style={styles.option}
          onPress={this._handlePressGoogle}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Jump To Google
              </Text>
            </View>
          </View>
        </Touchable>
        <Touchable
          background={Touchable.Ripple('#ccc', false)}
          style={styles.option}
          onPress={this._handlePressGoogle}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>
                Click to Get Test DB
              </Text>
            </View>
          </View>
        </Touchable>
      </View>
    );
  }

  _handlePressGoogle = () => {
    WebBrowser.openBrowserAsync('https://www.google.com');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
  optionTextContainer: {

  },
});

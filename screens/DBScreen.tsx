import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import Env from '../firebase';

export interface Props {
  name: string
}

interface State {
  name: string
  age: number
}

export default class DBScreen extends React.Component<Props, State> {
  static navigationOptions = {
    title: 'DB',
  };
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
    }
  }

  render() {
    const state = this.state;
    return (
      <View>
        <Button
          onPress={this._handlePress}
          title="Click to Load"
          color="#841584"
        />
        <View>
          <Text>name: {this.state.name}</Text>
          <Text>age: {state.age}</Text>
        </View>
      </View>    
    )
  }

  _handlePress = () => { 
    const db = Env.instance.firestore;
    const docRef = db.collection('test').doc('123');
    docRef.get().then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        this.setState(doc.data());
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
  };
}

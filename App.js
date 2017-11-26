import React from 'react';
import { Button,StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'One page'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (<Button
          onPress={() => navigate('SecondPage')}
          title="Go to Second page"
        />

      )
  }
}
class SecondPage extends React.Component {
  static navigationOptions = {
    title: 'Second page',
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>A second page</Text>
        <Button
          onPress={() => navigate('ThirdPage')}
          title="Go to third Page"
        />
      </View>
    );
  }
}
class ThirdPage extends React.Component {
  static navigationOptions = {
    title: 'Third Screen',
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>You dont't get any deeper</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  SecondPage: { screen: SecondPage },
  ThirdPage: { screen: ThirdPage }
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} = React;

var Login = require('./app/Login');

var GithubBrowser = React.createClass ({
  render: function() {
    if(this.state.isLoggedIn) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>You have been logged in.</Text>
        </View>
      );
    } else {
      return (
        <Login onLogin={this.onLogin}></Login>
      )
    }
  },
  onLogin: function() {
    this.setState({isLoggedIn: true});
  },
  getInitialState: function() {
    return {
      isLoggedIn: false
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//Icon credit: To Uyen

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);

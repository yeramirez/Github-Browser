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
  render() {
    return (
      <Login onLogin={this.onLogin} />
    );
  },
  onLogin: function() {
    console.log('can login, successfully showing different view.')
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

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);

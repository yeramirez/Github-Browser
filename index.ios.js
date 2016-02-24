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
  View,
  ActivityIndicatorIOS,
  Navigator,
} = React;

var Login = require('./app/Login');
var AuthService = require('./app/AuthService');
var Dashboard = require('./app/Dashboard');

class geminiApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{
          id: 'home'
        }}
        renderScene={this.navigatorRenderScene}
      />
    );
  }

  navigatorRenderScene(route, navigator) {
    navigator = navigator;

    switch (route.id) {
      case 'home':
        return (
          <Login navigator={navigator} title='Home' passProps={route.passProps}></Login>
        );
      case 'dashboard':
        return (
          <Dashboard navigator={navigator} title='Dashboard' passProps={route.passProps}></Dashboard>
        );
    }
  }
}

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
  loader: {
    marginTop: 300
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//Icon credit: To Uyen

AppRegistry.registerComponent('geminiApp', () => geminiApp);

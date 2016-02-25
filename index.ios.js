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
var Pending = require('./app/pendingOrders');
var Completed = require('./app/completedOrders');
var All = require('./app/allOrders');

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
      case 'pending':
        return (
          <Pending navigator={navigator} title='Pending' passProps={route.passProps}></Pending>
        );
      case 'completed':
        return (
          <Completed navigator={navigator} title='Completed' passProps={route.passProps}></Completed>
        );
      case 'allOrders':
        return (
          <All navigator={navigator} title='allOrders' passProps={route.passProps}></All>
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

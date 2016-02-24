'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS,
  ListView
} = React;

var Login = require('./app/Login');
var AuthService = require('./app/AuthService');

var geminiApp = React.createClass ({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['Row One', 'Row Two', 'Row Three', 'Row Four', 'Fow Five', 'Row Six'])
    };
  },

  _renderRow: function(rowData) {
    return <View style={styles.container}><Text style={styles.row}>{rowData}</Text></View>;
  },

  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        />
    )
  }
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    justifyContent: 'center',
  }
});

//Icon credit: To Uyen

//AppRegistry.registerComponent('geminiApp', () => geminiApp);

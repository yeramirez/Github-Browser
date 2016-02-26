'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component,
  Firebase,
  ListView
} = React;

var units = [
  {
    id: 100,
    status: 'pending'
  },
];

class pendingOrder extends Component {

  render() {
    var unit = units[0];
    return (
      <View style={styles.container}>
        <Text>{unit.id}</Text>
        <Text>{unit.status}</Text>

      </View>
    );
  }

  backButton () {
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create ({
	container: {
		backgroundColor: "#f9f9f9",
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    padding: 10
	},
  backButton: {
  	height: 40,
    alignSelf: 'flex-start',
  	justifyContent: 'center',
  	backgroundColor: '#40B0FF'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    padding: 10
  },
  title: {
    fontSize: 18,
    color: '#4cc091'
  }
});

module.exports = pendingOrder;

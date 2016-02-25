'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component
} = React;

class allOrders extends Component {
  render () {
		return (
			<View style={styles.container}>
				<Text>All Orders</Text>
        <TouchableHighlight onPress={()=> this.backButton()} style={styles.backButton}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableHighlight>
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
  }
});

module.exports = allOrders;

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component
} = React;

var myFirebaseRef = new Firebase("https://geminiapp.firebaseio.com/");

myFirebaseRef.child("unit1/id").on("value", function(snapshot) {
 console.log(snapshot.val());  // Alerts our message of "Hello"
});

class orderView extends Component {
  render () {
		return (
			<View style={styles.container}>
				<Text>Pending</Text>
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

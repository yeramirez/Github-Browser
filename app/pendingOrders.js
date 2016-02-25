'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component
} = React;

class pendingOrder extends Component {
  render () {
		return (
			<View style={styles.container}>
				<Text>Pending Orders</Text>
        <TouchableHighlight onPress={()=> this.backButton()} style={styles.backButton}>
          <Text>Go Back</Text>
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
  	flex: 1,
  	height: 40,
  	justifyContent: 'center',
  	backgroundColor: '#CCC9CA'

  },

});

module.exports = pendingOrder;

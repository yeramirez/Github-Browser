'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  Component,
  ActivityIndicatorIOS
} = React;

class Dashboard extends Component {

	render () {

		return (
			<View style={styles.container}>
				<Text>Welcome, Employee</Text>

        <Image style={styles.userPic}
        source={require('./images/user-01.png')} />

        <TouchableHighlight style={styles.dashboardButton}>
        	<Text>Pending Orders</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.dashboardButton}>
        	<Text>Completed Orders</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.dashboardButton}>
        	<Text>All Orders</Text>
        </TouchableHighlight>
			</View>
		);
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

	userPic: {
    marginTop: 30,
    paddingBottom: 15,
    height: 130,
    width: 150
  },

  dashboardButton: {
  	flex: 1,
  	height: 100,
  	justifyContent: 'center',
  	backgroundColor: '#CCC9CA'

  },

});

module.exports = Dashboard;

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

        <TouchableHighlight onPress={()=> this.pendingOrders()} style={styles.dashboardButton}>
        	<Text>Pending Orders</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={()=> this.completedOrders()} style={styles.dashboardButton}>
        	<Text>Completed Orders</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={()=> this.allOrders()} style={styles.dashboardButton}>
        	<Text>All Orders</Text>
        </TouchableHighlight>
			</View>
		);
	}

  pendingOrders () {
    this.props.navigator.push({
      id: 'pending'
    });
  }

  completedOrders () {
    this.props.navigator.push({
      id: 'completed'
    });
  }

  allOrders () {
    this.props.navigator.push({
      id: 'allOrders'
    });
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
    height: 50,
    backgroundColor: '#8bc73f',
    width: 120,
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'flex-end'
  }

});

module.exports = Dashboard;

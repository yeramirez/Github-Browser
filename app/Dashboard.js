'use strict';

var React = require('react-native');
var myFirebaseRef = new Firebase("https://geminiapp.firebaseio.com/");

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
        	<Text style={styles.buttonText}>Pending Orders</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={()=> this.completedOrders()} style={styles.dashboardButton}>
        	<Text style={styles.buttonText}>Completed Orders</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={()=> this.allOrders()} style={styles.dashboardButton}>
        	<Text style={styles.buttonText}>All Orders</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={()=> this.logoutButton()} style={styles.dashboardButton}>
        	<Text style={styles.buttonText}>Logout</Text>
        </TouchableHighlight>
			</View>
		);
	}

  pendingOrders () {
    this.props.navigator.push({
      id: 'pending'
    });

    myFirebaseRef.child("unit1/id").on("value", function(snapshot) {
     console.log(snapshot.val());  // Alerts our message of "Hello"
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

  logoutButton () {
    this.props.navigator.push({id: 'home'})
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
    flexDirection: 'row',
    width: 300
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold'
  }
});

module.exports = Dashboard;

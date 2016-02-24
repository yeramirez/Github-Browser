'use strict';

var React = require('react-native');
var buffer = require('buffer');
var Firebase = require('firebase');


var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  Component,
  Navigator,
  ActivityIndicatorIOS
} = React;

var myFirebaseRef = new Firebase("https://geminiapp.firebaseio.com/");

// myFirebaseRef.child("users/message").on("value", function(snapshot) {
//   alert(snapshot.val());  // Alerts our message of "Hello"
// });


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showProgress: false
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image style={styles.logo}
        source={require('./images/GeminiLogo.png')} />
        <Image style={styles.userPic}
        source={require('./images/user-01.png')} />
        <TextInput
          onChangeText={(text) => this.setState({username: text})}
          style={styles.input}
          placeholder="Employee ID" />
        <TextInput
          onChangeText={(text) => this.setState({password: text})}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true} />
        <TouchableHighlight
          onPress={()=> this.onLoginPressed()}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>

        <ActivityIndicatorIOS
          animating={this.state.showProgress}
          size="large"
          style={styles.loader}/>
      </View>
    );
  }


  onLoginPressed () {
    console.log("HELLO YANELY");
  }
}

var styles = StyleSheet.create ({
  container: {
    backgroundColor: "#f9f9f9",
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    padding: 10
  },
  header: {
    height: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: "#8C62FF",
    width: 500
  },
  userPic: {
    marginTop: 30,
    paddingBottom: 15,
    height: 130,
    width: 150
  },
  logo: {
    width: 275,
    height: 75
  },
  heading: {
    fontSize: 30,
    marginTop: 10,
    fontFamily: 'Helvetica'
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#c3c3c3',
    backgroundColor: '#CCC9CA'
  },
  button: {
    height: 50,
    backgroundColor: '#8bc73f',
    width: 120,
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold'
  },
  loader: {
    marginTop: 20
  },
  error: {
    backgroundColor: 'red',
    color: '#f9f9f9',
    padding: 10,
    marginTop: 5,
    alignSelf: 'stretch'
  }
})

module.exports = Login;

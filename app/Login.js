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
  ActivityIndicatorIOS
} = React;

var myFirebaseRef = new Firebase("https://geminiapp.firebaseio.com/");

myFirebaseRef.child("users/message").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts our message of "Hello"
});


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showProgress: false
    }
  }

  render () {

    var errorCtrl = <View />;

    if(!this.state.success && this.state.badCredentials) {
      errorCtrl = <Text style={styles.error}>
      The username and/or password did not match.
      </Text>;
    }

    if(!this.state.success && this.state.unknownError) {
      errorCtrl = <Text style={styles.error}>
      The username and/or password did not match.
      </Text>;
    }

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
          placeholder="User ID" />
        <TextInput
          onChangeText={(text) => this.setState({password: text})}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true} />
        <TouchableHighlight
          onPress= {this.onLoginPressed.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>
        {errorCtrl}
        <ActivityIndicatorIOS
          animating={this.state.showProgress}
          size="large"
          style={styles.loader}/>
      </View>
    );
  }


  onLoginPressed () {
    console.log('Attempting to login using username: ' + this.state.username);
    this.setState({showProgress: true});

    var authService = require('./AuthService');
    authService.login({
      username: this.state.username,
      password: this.state.password
    }, (results)=> {
      this.setState(Object.assign({
        showProgress: false
      }, results));

      if(results.success && this.props.onLogin) {
        this.props.onLogin();
      }
    });
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
    backgroundColor: "purple",
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
    borderColor: '#c3c3c3'
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

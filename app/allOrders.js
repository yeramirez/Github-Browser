'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component
} = React;

var myFirebaseRef = new Firebase("https://geminiapp.firebaseio.com/units");



var allOrders = React.createClass( {
  
  getInitialState() {

      return{
      units: [],
      unitData: null,
    };
  },

  backButton () {
    this.props.navigator.pop();
  },

  handleResponse(response){
    this.setState({unitData: response});

    console.log(this.state.unitData.sku);

  },

  dataView(){
    if(this.state.unitData){
    return(
      <View>
        <Text style={styles.unitText}>
        Completed:{this.state.unitData.completed.sku}
        </Text>

        <Text  style={styles.unitText}>
        Pending: {this.state.unitData.pending.sku}
        </Text>
      </View>
      )
    }else{
      alert('Your Data is coming');
    }
  },

  render () {

      var url = "https://geminiapp.firebaseio.com/units.json";
      fetch(url)
        .then((response) => response.json())
        .then((response) => this.handleResponse(response))
        .catch(error =>
          this.setState({
            isloading: false,
            message: 'error on request' + error
        }));
    //console.log(myFirebaseRef + " Firebase connected");
 
  

		return (
			<View style={styles.container}>
				<Text>All Orders</Text>
        {this.dataView()}
        <TouchableHighlight onPress={()=> this.backButton()} style={styles.backButton}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableHighlight>
      </View>
		);
	}

  
});

const styles = StyleSheet.create ({
	container: {
		backgroundColor: "#f9f9f9",
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    padding: 10

	},
  unitText:{
    fontSize: 22,
    fontWeight: '400',
    marginTop:10,
  },
  backButton: {
  	height: 40,
    alignSelf: 'center',
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

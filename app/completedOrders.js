'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component
} = React;

var completedOrders = React.createClass ( {
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
        <Text  style={styles.unitText}>
        Pending: {this.state.unitData.completed.sku}
        </Text>
      </View>
      )
    }else{
      console.log('Your Data is coming');
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

		return (
			<View style={styles.container}>
				<Text>Completed Orders</Text>
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

module.exports = completedOrders;

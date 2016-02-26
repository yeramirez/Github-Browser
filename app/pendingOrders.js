'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Component,
  Firebase,
  ListView
} = React;

class pendingOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: null,
    };
  }

  componentDidMount() {
    this.fetchUnits();
  }

  fetchUnits() {
    var reqURL = 'https://raw.githubusercontent.com/yeramirez/mdd-react-native/master/data.json';

    fetch (reqURL)

      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          units: responseData.units,
        });
      })
      .done();

      console.log("This consoles it!!! " + this.state.units);
  }

  render () {
    if (!this.state.units) {
      return this.renderUnit();
    }

    var unit = this.state.units[0];
    return this.renderUnit();
	}

  renderUnit(unit) {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>{unit}</Text>
      </View>
    );
  }

  backButton () {
    this.props.navigator.pop();
  }
}

// var units = [];
//
// var displayArray = function () {
//   myFirebaseRef.child("units/id").on("value", function(snapshot) {
//     units.push(snapshot.val());  // Alerts our message of "Hello"
//   });
// }


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
  },
  title: {
    fontSize: 18,
    color: '#4cc091'
  }
});

module.exports = pendingOrder;

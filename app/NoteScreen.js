'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View
} = React;

class NoteScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Create Note Screen!</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports = NoteScreen;

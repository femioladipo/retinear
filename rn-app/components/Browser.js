import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { FloatingAction } from "react-native-floating-action";
import * as Speech from 'expo-speech';

class Browser extends React.Component {
  state = {
    url: ""
  };

  onNavChange = async ({ url }) => {
    if (url !== this.state.url) {
      this.setState({ url })
      // response = await call api
      // Speech.speak(response);
      Speech.speak('React Native Speech, testing 123.');
    }
  }

  onBack() {
    this.refs[WEBVIEW_REF].goBack();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WebView
          source={{ uri: 'https://google.com' }}
          onNavigationStateChange={this.onNavChange}
        />
        <FloatingAction
          onPressMain={() => console.log('pressed')}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: "#1D3B57",
  }
});

export default Browser
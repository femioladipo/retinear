import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { FloatingAction } from "react-native-floating-action";
import * as Speech from 'expo-speech';
import axios from 'axios';

class Browser extends React.Component {
  state = {
    url: "",
    canGoBack: false
  };

  onNavChange = async ({ url }) => {
    if (url !== this.state.url) {
      this.setState({ url });
      console.log(url)
      const res = await fetch('https://us-central1-retinear-3f1c7.cloudfunctions.net/api', {
        method: 'POST',
        body: JSON.stringify({ url }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.text());
      Speech.speak(res);
    }
  }

  onBack() {
    this.refs[WEBVIEW_REF].goBack();
    this.setState({ canGoBack: false })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WebView
          source={{ uri: 'https://google.com' }}
          onNavigationStateChange={this.onNavChange}
        />
        {this.state.canGoBack &&
          <FloatingAction
            onPressMain={() => console.log('pressed')}
          />
        }
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

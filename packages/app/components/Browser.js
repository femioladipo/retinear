import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { FloatingAction } from "react-native-floating-action";
import * as Speech from 'expo-speech';
import parseDomain from 'parse-domain'

class Browser extends React.Component {
  state = {
    url: "",
    canGoBack: false
  };

  WEBVIEW_REF = React.createRef();

  onNavChange = async ({ url }) => {
    console.log(parseDomain(url), url)
    if (parseDomain(url).domain !== 'google' && url !== this.state.url) {
      this.setState({ url, canGoBack: true });
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

  onBack = () => {
    this.WEBVIEW_REF.goBack();
    this.setState({ canGoBack: false })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WebView
          ref={ref => {
            this.WEBVIEW_REF = ref
          }}
          source={{ uri: 'https://google.com' }}
          onNavigationStateChange={this.onNavChange}
        />
        <FloatingAction
          onPressMain={this.onBack}
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

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { FloatingAction } from "react-native-floating-action";
import { Ionicons } from '@expo/vector-icons';
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
    this.setState({ url, canGoBack: true });
    if (parseDomain(url).domain !== 'google' && url !== this.state.url) {
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
    Speech.stop()
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WebView
          ref={ref => {
            this.WEBVIEW_REF = ref
          }}
          source={{ uri: 'https://www.google.com' }}
          onNavigationStateChange={this.onNavChange}
        />
        {this.state.canGoBack &&
          <FloatingAction
            floatingIcon={() => <Ionicons name="arrow-bold-left" />}
            onPressMain={this.onBack}
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

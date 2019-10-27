import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
// import { FloatingAction } from "react-native-floating-action";

class Browser extends React.Component {
  constructor() {
    super();
    this.state = {
      url: ""
    };

    /*Speech.speak({
        text: 'React Native Speech, testing 123.',
        voice: 'en-US'
    });*/
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WebView
          source={{ uri: 'https://google.com' }}
          onNavigationStateChange={this.onNavChange.bind(this)}
        />
        {/* <FloatingAction
          actions={actions}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
        /> */}
      </SafeAreaView>
    );
  }

  onNavChange(webViewState) {

    if (webViewState.url !== this.state.url) {
      alert(webViewState.url);
    }

    this.setState({ url: webViewState.url })
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
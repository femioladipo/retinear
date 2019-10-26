import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { createAppContainer } from 'react-navigation';

interface IProps {

}

interface IState {

}

class Browser extends React.Component<IProps, IState> {

  render() {
      return (
          <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />
      );
  }

  onNavChange(webViewState) {
      console.log(webViewState.url);
  }
}

class Settings extends React.Component {

    render() {
        return (
            <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />
        );
    }

    onNavChange(webViewState) {
        console.log(webViewState.url);
    }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

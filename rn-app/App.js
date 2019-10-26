import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {StatusBar} from 'react-native';

interface IProps {

}

interface IState {

}

class Browser extends React.Component<IProps, IState> {

  render() {
      return (
          <View style={styles.container}>
              <View style={styles.statusBar} />
              <WebView
              source={{ uri: 'https://google.com' }}
              onNavigationStateChange={this.onNavChange.bind(this)}
          />
          </View>
      );
  }

  onNavChange(webViewState) {
      alert(webViewState.url);
  }
}

class Settings extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBar} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
    Settings,
    Browser,
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        backgroundColor: "#1D3B57",
        height: StatusBar.currentHeight,
    }
});

export default createAppContainer(TabNavigator);


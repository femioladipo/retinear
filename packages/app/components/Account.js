import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

class Account extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>


        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{width:500, height:350}}
          source = {require("../assets/teamLogo.png")}
          />

          <Text>We are the Retinear Team {"\n"}  {"\n"}
          Our aim is to provide individuals with disabilities a better experience of Google Search {"\n"}  {"\n"}
          We provide users with an additional perception - where the app helps them understand the websites better for a smoother browsing experience</Text>

        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Account

import React, { Component } from "react";
import { View } from "react-native";
import { Header } from "./components/common";
import MapView from "./components/MapView";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="우리동네 착한밥집" />
        <MapView />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};

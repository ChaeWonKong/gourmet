import React, { Component } from "react";
import { WebView, View } from "react-native";
import MapList from "./MapList";

class MapView extends Component {
  render() {
    const { container, webViewContainer } = styles;
    return (
      <View style={container}>
        <WebView
          source={{
            uri: "http://localhost:3000"
          }}
          style={webViewContainer}
          onLoadProgress={e => console.log(e.nativeEvent.progress)}
        />
        <MapList />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  webViewContainer: {
    flex: 1,
    marginTop: 10
  }
};

export default MapView;

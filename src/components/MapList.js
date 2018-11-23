import React, { Component } from "react";
import { View, Text } from "react-native";
import { CardSection } from "./common";

class MapList extends Component {
  render() {
    const { mapListContainer, textStyle } = styles;
    return (
      <View style={mapListContainer}>
        <CardSection>
          <Text style={textStyle}>가츠3.3</Text>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  mapListContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flex: 1
  },
  textStyle: {
    fontSize: 18
  }
};

export default MapList;

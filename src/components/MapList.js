import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card, CardSection, Button } from "./common";
import ListItem from "./ListItem";

class MapList extends Component {
  render() {
    const { mapListContainer, textStyle } = styles;
    return (
      <View style={mapListContainer}>
        <Card>
          <CardSection>
            <Text style={textStyle}>가츠3.3</Text>
          </CardSection>

          <CardSection>
            <ListItem />
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  mapListContainer: {
    marginTop: 10,
    flex: 1
  },
  textStyle: {
    fontSize: 18
  }
};

export default MapList;

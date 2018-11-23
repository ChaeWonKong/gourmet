import React, { Component } from "react";
import { View, Text } from "react-native";

class ListItem extends Component {
  state = {
    menu: [
      { id: 0, title: "카츠", price: "3,900원" },
      { id: 1, title: "더블카츠", price: "6,300원" },
      { id: 2, title: "매운더블카츠", price: "7,300원" },
      { id: 3, title: "치즈카츠", price: "7,300원" },
      { id: 4, title: "로제카츠", price: "6,800원" },
      { id: 5, title: "차슈덮밥", price: "6,300원" }
    ]
  };

  renderMenu() {
    return this.state.menu.map(item => (
      <View style={styles.menuItem} key={item.id}>
        <Text style={styles.textStyle}>{item.title}</Text>
        <Text style={styles.textStyle}>{item.price}</Text>
      </View>
    ));
  }
  render() {
    const { container } = styles;
    return <View style={container}>{this.renderMenu()}</View>;
  }
}

const styles = {
  container: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textStyle: {
    fontSize: 16
  }
};

export default ListItem;

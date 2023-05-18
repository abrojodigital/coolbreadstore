import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { CartItem } from "../../components";
import { CART } from "../../constants";

const Cart = () => {
  console.warn("CART", CART);
  const TOTAL = 2000;
  const onRemove = (id) => {
    console.warn(id);
  };
  const renderItem = ({ item }) => <CartItem item={item} onRemove={onRemove} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList
        data={CART}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
      />
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={() => null}>
          <Text style={styles.buttonConfirmText}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>USD {TOTAL}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

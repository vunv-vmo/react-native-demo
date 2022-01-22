import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { PRODUCTS } from "../../constants/mock.data";
import { useAppNavigation } from "../../hooks/routes.hook";

function ListItem() {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => <Item data={item} />}
      />
    </View>
  );
}

function Item({ data }: { data: any }) {
  const navigation = useAppNavigation();
  function redirectToDetail(productId: number) {
    navigation.navigate("Detail", {
      productId,
    });
  }
  return (
    <TouchableHighlight
      onPress={() => redirectToDetail(data.id)}
      underlayColor="#fff"
    >
      <View style={styles.listView}>
        <Image
          source={{
            uri: data.imgUrl,
          }}
          style={styles.img}
        />
        <View style={styles.desBox}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.des}>{data.shortDescription}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  listView: {
    borderRadius: 4,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  desBox: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  des: {
    fontSize: 16,
    fontWeight: "300",
    flex: 1,
    flexWrap: "wrap",
    width: "100%",
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default ListItem;

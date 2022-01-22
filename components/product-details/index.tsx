import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from "react-native";
import { PRODUCTS } from "../../constants/mock.data";
import { useAppRoute } from "../../hooks/routes.hook";

function index() {
  const route = useAppRoute<"Detail">();
  const {
    imgUrl,
    title,
    shortDescription,
    description,
    price,
    features,
    details,
  } = PRODUCTS.find((p) => p.id === route.params.productId)!;

  return (
    <ScrollView
      contentContainerStyle={{ padding: 10, backgroundColor: "#fff" }}
    >
      <View>
        <Image
          source={{
            uri: imgUrl,
          }}
          style={styles.thumbnail}
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{`$${price.toFixed(2)} USD`}</Text>

        <Text style={styles.shortDescription}>{shortDescription}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.featuresBox}>
          <Text style={styles.featuresTitle}>FEATURES</Text>
          <View>
            {features.map((it) => (
              <View style={styles.featuresItem}>
                {it.map((el) => (
                  <Text style={styles.featuresDetail}>{el}</Text>
                ))}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.productDetailBox}>
          <Text style={styles.productDetailTitle}>PRODUCT DETAILS</Text>
          <View style={{ marginTop: 20 }}>
            {Object.keys(details).map((key) => (
              <Text style={{ fontSize: 20, marginBottom: 10 }}>
                <Text style={{ fontWeight: "700" }}>{key}: </Text>{" "}
                {/*@ts-ignore */}
                <Text>{details[key]}</Text>
              </Text>
            ))}
          </View>

          <View style={styles.actionBox}>
            <TouchableHighlight
              onPress={() => {
                Alert.alert("Add to card successfully!");
              }}
              underlayColor="#fff"
              style={{ width: "100%" }}
            >
              <View style={styles.addBtn}>
                <Text
                  style={{ fontSize: 20, color: "#fff", fontWeight: "600" }}
                >
                  ADD TO CARD
                </Text>
              </View>
            </TouchableHighlight>

            <Text style={{ fontSize: 18, marginTop: 20 }}>
              2-3 business days delivery
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    width: "100%",
    height: 235,
    borderRadius: 5,
    resizeMode: "contain",
    backgroundColor: "#F2F2F2",
  },
  title: { fontSize: 20, fontWeight: "700", marginTop: 30 },
  price: { fontSize: 22, fontWeight: "400" },
  shortDescription: {
    fontSize: 22,
    color: "#77859A",
    marginTop: 20,
    marginBottom: 10,
  },
  description: { fontSize: 20, marginBottom: 20 },
  featuresBox: {
    borderTopWidth: 1,
    borderColor: "#E2E8F0",
    borderBottomWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
  },
  featuresTitle: {
    fontSize: 22,
    fontWeight: "500",
    color: "#D7A135",
  },
  featuresItem: {
    marginTop: 10,
    marginBottom: 10,
  },
  featuresDetail: { fontSize: 20, color: "#767A81" },
  productDetailBox: { paddingTop: 15, paddingBottom: 100 },
  productDetailTitle: {
    fontSize: 22,
    fontWeight: "500",
    color: "#D7A135",
  },
  actionBox: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtn: {
    height: 55,
    width: "100%",
    backgroundColor: "#171923",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default index;

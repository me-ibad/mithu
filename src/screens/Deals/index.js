import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
//component
import Foodmenu from "../../components/Foodmenu/Foodmenu";

const data = [
  {
    id: 1,
    img: require("../../assets/img/rectang.png"),
    deal: "Deal 1",
    name: "Passion Fruit ",
    des1: "9 pieces chicken fries combo fries and soft",
    des2: "drink passion fruit serbit diary",
    price: "Rs 500 to Rs 600",
  },
  {
    id: 1,
    img: require("../../assets/img/rectangle2.png"),
    deal: "Deal 2",
    name: "Passion Fruit",
    des1: "9 pieces chicken fries combo fries and soft",
    des2: "drink passion fruit serbit diary",
    price: "Rs 500 to Rs 600",
  },
  {
    id: 1,
    img: require("../../assets/img/rectangle3.png"),
    deal: "Deal 3",
    name: "Passion Fruit",
    des1: "9 pieces chicken fries combo fries and soft",
    des2: "drink passion fruit serbit diary",
    price: "Rs 500 to Rs 600",
  },
  {
    id: 1,
    img: require("../../assets/img/rectangle4.png"),
    deal: "Deal 4",
    name: "Passion Fruit",
    des1: "9 pieces chicken fries combo fries and soft",
    des2: "drink passion fruit serbit diary",
    price: "Rs 500 to Rs 600",
  },
];
export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView>
        <View style={styles.topbox}>
          <View style={styles.leftbox}>
            <Ionicons name="arrow-back-outline" size={32} color="green" />
          </View>
          <View style={styles.middlebox}>
            <Text>American Jr</Text>
          </View>
          <View style={styles.rightbox}></View>
        </View>

        <View style={styles.textbox}>
          <Text style={styles.text1}>Exclusive Deals</Text>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <Foodmenu
                dh={() => {
                  navigation.navigate("screenname", { data: item });
                }}
                data={item}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbox: {
    width: wp("100%"),
    height: hp("6%"),
    // backgroundColor: "red",
    flexDirection: "row",
  },
  leftbox: {
    width: "15%",
    height: "100%",
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  middlebox: {
    width: "70%",
    height: "100%",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  rightbox: {
    width: "15%",
    height: "100%",
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  textbox: {
    width: wp("100%"),
    height: hp("6%"),
    //backgroundColor: "red",
    marginTop: hp("1%"),
  },
  text1: {
    marginLeft: hp("0.3%"),
    fontWeight: "bold",
    fontSize: 20,
  },
});

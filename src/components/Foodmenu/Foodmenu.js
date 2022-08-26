import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function Foodmenu(props) {
  return (
    <TouchableOpacity onPress={props.dh} style={styles.container}>
      <View style={styles.leftbox}>
        <Text style={styles.text1}>{props.data.deal}</Text>
        <Text style={styles.text1}>{props.data.name}</Text>
        <Text style={styles.text2}>{props.data.des1}</Text>
        <Text style={styles.text2}>{props.data.des2}</Text>
        <Text style={styles.text2}>{props.data.price}</Text>
      </View>

      <View style={styles.rightbox}>
        <View style={styles.innerrightbox1}>
          <Image style={styles.img} source={props.data.img} />
        </View>
        <View style={styles.innerrightbox2}></View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("25%"),
    // backgroundColor: "green",
    flexDirection: "row",
  },
  leftbox: {
    width: "65%",
    height: "100%",
    // backgroundColor: "blue",
  },
  rightbox: {
    width: "35%",
    height: "100%",
    //backgroundColor: "yellow",
  },
  leftinnerbox: {
    width: "100%",
    height: "25%",
    // backgroundColor: "pink",
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  text2: {
    fontSize: 15,
    //fontWeight: "bold",
    marginLeft: 10,
  },
  innerrightbox1: {
    width: "90%",
    height: "60%",
    // backgroundColor: "blue",
  },
  innerrightbox2: {
    width: "100%",
    height: "40%",
    // backgroundColor: "pink",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

import React, { createRef } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  Image,
  StatusBar,
  Button,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors } from "../../common/colors";
import { fonts } from "../../common/fonts";
const { width, height } = Dimensions.get("window");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FlatGrid, SectionGrid } from "react-native-super-grid";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import BottomContent from "../../components/BottomContent";
import Searchbar from "@components/Searchbar";

const renderHeader = () => (
  <View style={styles.header}>
    <View style={styles.panelHeader}>
      <View style={styles.panelHandle} />
    </View>
  </View>
);

export default function Home({ navigation }) {
  const sheetRef = React.useRef(null);

  const [items, setItems] = React.useState([
    { name: "Autoparts", img: "https://i.ibb.co/XzGSNnY/Auto-Parts.png" },
    { name: "Books", img: "https://i.ibb.co/WprBfnW/Books.png" },
    { name: "Bus", img: "https://i.ibb.co/2k3GMs0/Bus.png" },
    { name: "Cars", img: "https://i.ibb.co/rtFcVqm/Cars.png" },
    { name: "Delivery", img: "https://i.ibb.co/M9fYBnQ/Delivery.png" },
    {
      name: "Entertainment",
      img: "https://i.ibb.co/Wpq8Bz1/Entertainment.png",
    },
    { name: "Food", img: "https://i.ibb.co/xXwjM7b/Food.png" },
    { name: "Grocery", img: "https://i.ibb.co/jD7KX1w/Grocery.png" },
    { name: "Haircutting", img: "https://i.ibb.co/n1CfVM2/Haircutting.png" },
    { name: "Real Estate", img: "https://i.ibb.co/F0dnkYV/Real-Estate.png" },
    { name: "Travel Tour", img: "https://i.ibb.co/JqvKCgH/Travel-Tour.png" },
    { name: "View More", img: "https://i.ibb.co/FKwDH63/View-More.png" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <View style={styles.viewBody}>
        <Image
          style={styles.imgLogo}
          source={require("../../assets/img/Mithu.png")}
        />

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.viewSearch}
            onPress={() => navigation.navigate("Search")}
          >
            <Searchbar placeholder="What do you want" />
          </TouchableOpacity>

          <View style={styles.viewbellicon}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              color={colors.light}
            />
          </View>

          <View style={{ width: "10%", marginVertical: 15 }}>
            <Image
              style={styles.imgAvt}
              source={{
                uri: "https://ui-avatars.com/api/?name=Ibad+Rehman",
              }}
            />
          </View>
        </View>

        <View style={styles.viewBackImage}>
          <ImageBackground
            source={require("../../assets/img/banner.png")}
            resizeMode="contain"
            style={styles.bannerimage}
            imageStyle={{ borderRadius: 5 }}
          >
            <View style={styles.viewBanner}>
              <Text style={styles.bannerHeadertext}>App Banner</Text>
              <Text style={styles.bannersubHeadertext}>
                Lorem pesum color de nueut of vongl delot ne apmet nue arent
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.viewFlatgrid}>
          <FlatGrid
            itemDimension={width / 5}
            data={items}
            style={styles.gridView}
            // staticDimension={300}
            fixed={true}
            enabledHeaderGestureInteraction={true}
            spacing={4}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Listings")}
                style={{ marginBottom: 10 }}
              >
                <Image style={styles.imgCategory} source={{ uri: item.img }} />
                <Text style={styles.textCategory}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[500, 200, 0]}
        style={{ height: height }}
        renderContent={BottomContent}
        enabledBottomClamp={true}
        renderHeader={renderHeader}
        initialSnap={1}
        enabledGestureInteraction={true}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    height: height,
    width: width,
  },
  viewBody: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  viewInput: {
    borderWidth: 1,
    borderColor: colors.primary,
    height: 40,
    flexDirection: "row",
    marginVertical: 10,
    width: "80%",
    padding: 5,
    borderRadius: 10,
  },
  inputSearch: {
    width: "100%",
    marginLeft: 5,
  },
  viewbellicon: {
    marginVertical: 15,
    // marginHorizontal: 5,
    marginLeft: 5,
    width: "10%",
  },
  bannerimage: {
    width: "100%",
    height: 80,
    // flexWrap: 'wrap',
    // justifyContent: 'flex-end',
    // paddingHorizontal: 10,
    // paddingVertical: 15,
  },
  imgAvt: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
  viewBackImage: {
    marginVertical: 10,
  },
  bannerHeadertext: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: fonts.medium,
  },
  bannersubHeadertext: {
    color: colors.white,
    width: "65%",
    fontSize: 13,
    fontFamily: fonts.medium,
  },
  viewBanner: {
    marginHorizontal: "5%",
    marginVertical: 10,
  },

  imgCategory: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  viewFlatgrid: {
    marginLeft: 10,
  },
  gridView: {
    marginTop: 10,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    flex: 1,
  },
  textCategory: {
    marginTop: 5,
    fontSize: 10,
    fontFamily: fonts.medium,
    textAlign: "center",
  },
  imgLogo: {
    // width: 10,
    marginVertical: 10,
  },

  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,

    // elevation: 2,
    paddingTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // borderTopWidth: 2,
    // borderLeftWidth: 2,
    // borderRightWidth: 2,
    // borderRightColor: 'grey',
    // borderLeftColor: 'grey',
    // borderTopColor: 'grey',
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 6,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  viewSearch: {
    // marginHorizontal: 10,
    width: "80%",
  },
});

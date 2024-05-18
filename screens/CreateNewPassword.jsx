import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.cat_fingers} source={require("../cat.png")} />
        <Text style={styles.craete_new_txt}>Create New Password</Text>
        <Text style={styles.enter_new_password}>Enter email address</Text>
        <View style={styles.emailPhone_inp}>
          <TextInput placeholder="Enter New password" />
        </View>
        <View style={styles.emailPhone_inp}>
          <TextInput placeholder="Confirm password" />
        </View>
        <View style={styles.send_link}>
          <Text style={styles.send_link_txt}>Submit</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor: "white",
    padding: 40,
  },
  content: {
    alignItems: "center",
    marginTop: 60,
  },
  cat_fingers: {
    height: 50,
    width: 50,
    marginBottom: 25,
  },
  craete_new_txt: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    alignSelf: "flex-start",
  },
  enter_new_password: {
    marginTop: 10,
    fontSize: 20,
    alignSelf: "flex-start",
  },
  emailPhone_inp: {
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    width: width - 60,
    borderRadius: 10,
  },
  send_link: {
    marginTop: 20,
    backgroundColor: "#460463",
    width: width - 60,
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 9,
  },
  send_link_txt: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 23,
  },
});

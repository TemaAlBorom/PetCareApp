import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import React, { useState } from "react";
import { sendPasswordResetEmail } from "@firebase/auth";
import { getAuth } from "firebase/auth";

const { height, width } = Dimensions.get("window");

export default function Forget_password({ navigation }) {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    const auth = getAuth();
    if (!email) {
      Alert.alert("Error", "Please enter your email address");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert("Success", "Password reset email has been sent");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.cat_fingers} source={require("../cat.png")} />
        <Text style={styles.forgot_password}>Forgot your password?</Text>
        <Text style={styles.enter_email}>Enter email address</Text>
        <View style={styles.emailPhone_inp}>
          <TextInput
            placeholder="Enter your email address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.send_link}
          onPress={handleResetPassword}
        >
          <Text style={styles.send_link_txt}>Send Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
  },
  cat_fingers: {
    height: 50,
    width: 50,
    marginBottom: 25,
  },
  forgot_password: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
  },
  enter_email: {
    marginTop: 20,
    fontSize: 20,
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
    alignItems: "center",
  },
  send_link_txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
  },
});

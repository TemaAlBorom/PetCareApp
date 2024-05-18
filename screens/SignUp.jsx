import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { updateProfile } from "@firebase/auth";

const { height, width } = Dimensions.get("window");

export default function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      // setPasswordError("Passwords do not match");
      return;
    }

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log("User signed up:", user);

        // Update user profile with name
        updateProfile(user, { displayName: name })
          .then(() => {
            console.log("User profile updated with name:", name);
            // Navigate to the home screen or any other screen upon successful sign-up
            navigation.navigate("Login");
          })
          .catch((error) => {
            console.error("Error updating user profile:", error);
          });
      })
      .catch((error) => {
        // Handle sign-up errors
        console.error("Sign-up error:", error);
        // You can display an error message to the user here if needed
      });
  };

  return (
    <ImageBackground source={require("../bg1.jpg")}>
      <View style={styles.container}>
        <View style={styles.cat_container}>
          <Image style={styles.cat_top} source={require("../cat.png")} />
          <Image
            style={styles.big_cat}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/c30c/e538/219f24d478fbec24c03259d4bd5ae829?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQJRmm5UOG2sk7kxj56Ly6LhSBn0APT-VWHujtXrUwdVsKkokrXWtfqUPeYhWqZ5sz7k-R8k8RsqT7VblL-jVmVHr06h9L5ACzJ25XjqWhA5pigSRsOIDgdp0o4kuCIOb~wf-qoauzIGAZYr563SYkMJFY2deDD33MdJW9jKIAJvpuQLHWGUP4MGAXyDmkvzQPxSMCaQWQ8IyjhO~L4r6p3OFy7wCpQusNBs3rZCIl8mfQniedAiESotg7xi5lyRDm0QGj8jAudEI9B0xgP7xgXY7gCdbayKe-Vgli7o7dUlBR6wrtyjA6b8tSIIrTpWgyP3tKMAMnwShOZ7NlfmPg__",
            }}
          />
        </View>
        <View style={styles.login_card}>
          <Text style={styles.login_head_txt}>Register</Text>
          <Text style={styles.create_account}>Create your new account</Text>
          <View style={styles.emailPhone_inp}>
            <TextInput
              onChangeText={(txt) => setName(txt)}
              placeholder="Name"
            />
          </View>
          <View style={styles.emailPhone_inp}>
            <TextInput
              onChangeText={(txt) => setEmail(txt)}
              placeholder="E-mail"
            />
          </View>
          <View style={styles.emailPhone_inp}>
            <TextInput
              onChangeText={(txt) => setPassword(txt)}
              placeholder="Password"
            />
          </View>
          <View style={styles.emailPhone_inp}>
            <TextInput
              onChangeText={(txt) => setConfirmPassowrd(txt)}
              placeholder="Confirm Password"
            />
          </View>
          <View style={[styles.login_btn]}>
            <Text onPress={handleSignUp} style={styles.sign_up_txt}>
              Sign Up
            </Text>
          </View>
          <Text style={styles.or}>OR</Text>
          <View style={[styles.login_btn, styles.with_google]}>
            <Image
              height={20}
              width={20}
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/8e42/4139/9baefbe8f8feffab0fe67682e140e1b1?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ESW8UbJ1KsMxJ~QthmR5v-uM4iM4fA9Z-Hy2rIgp6m6-c~EIv8P7tiQ~h66OiXaFYZJS3lVWx4SmNNA6B38N6h9yrykBQSJPj~vbNJgB5mwvscd8T1df3XGAub8S-aM-yyZs4ti4AqGbijxD-np42EcRCMCNaWoTZzwxyniDv42z0eNsY4QKdVZEJQSbkFSx3d40CmmZ36XxWaJULAHUg5oGk10jbsA5k1CaV3CFFp5auY1YLlubpV3H0o05g-VoEuouxcYZTy0NzGm-eXO6H2It281ukto0QP1mD4FdoLLrfvY~WUvxHVTtXXognIS79y8UBuPsNOhyrpYXOT36mg__",
              }}
            />
            <Text style={styles.with_google_txt}>Continue with Google</Text>
          </View>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.dontHave_account}
          >
            Already have an account? <Text style={styles.signUp}>Login</Text>{" "}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
  },
  cat_top: {
    height: 50,
    width: 50,
  },
  big_cat: {
    height: 200,
    top: -30,
    left: 20,
  },
  cat_container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  login_card: {
    height,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -120,
    padding: 20,
  },
  login_head_txt: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 40,
    letterSpacing: 2,
  },
  emailPhone_inp: {
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  password_inp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forgot_password: {
    textAlign: "right",
    marginTop: 20,
    fontSize: 12,
    color: "gray",
  },
  login_btn: {
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#460463",
    paddingVertical: 14,
    borderRadius: 100,
  },
  login_txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
  },
  or: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 15,
  },
  with_google: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    gap: 9,
    marginTop: 10,
  },
  with_google_txt: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  dontHave_account: {
    textAlign: "center",
    marginTop: 40,
  },
  signUp: {
    color: "#460463",
    fontWeight: "bold",
  },
  create_account: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
  },
  sign_up_txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
  },
});

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
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { initializeApp } from "firebase/app";
import "expo-dev-client";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const { height, width } = Dimensions.get("window");

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  GoogleSignin.configure({
    webClientId:
      "258186085281-0hrtmkb4nvp39lck2ni7ruhpkg5sh34r.apps.googleusercontent.com",
  });

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  async function onGoogleLinkButtonPress() {
    // Ensure the device supports Google Play services
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Obtain the user's ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Link the user's account with the Google credential
    const firebaseUserCredential = await auth().currentUser.linkWithCredential(
      googleCredential
    );
    //  Handle the linked account as needed in your app
    // return console.log(first);
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in
      .then((user) => {
        console.log(user);
      })
      .catch((err) => console.log(err));
  }

  ///Sign In function

  const handleSignIn = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);
        navigation.navigate("Home", { user: user });
      })
      .catch((error) => {
        console.error("Sign-in error:", error);
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
              uri: "https://s3-alpha-sig.figma.com/img/c30c/e538/219f24d478fbec24c03259d4bd5ae829?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b3JKPjQtYKWsYv7MV1IaH3ILlpuNL92xv2UafOslmFC7NyGl9waWLzKMJyWAGkFfSrKv~DRAs-YXb0Z358v4yidgytddu4HPq34deTdDdHNagXfwChd2WrWdZtmYvlyJwnocgA7bfQ7okHysBYpo78n3Zay15Zri3W46YZNswyYrGOREQDK4oXrih1IqlfRqVjU71UcCez2GQq5l3QgQbd8zJvJoB3rgKKmShKwsq~xb6aJv-5NVM03f2EI~4oAPsTYLJUsu2921vwxrXNNAZCkn-zxBhrgQuwyNHq7ft0uuacWYnx6e1Aauo1-dZR6YmHARxQ8NLvxsaAw20AMvhA__",
            }}
          />
        </View>
        <View style={styles.login_card}>

          <View style={styles.emailPhone_inp}>
            <TextInput
              onChangeText={(txt) => setEmail(txt)}
              placeholder="Enter email or phone"
            />
          </View>
          <View style={[styles.emailPhone_inp, styles.password_inp]}>
            <TextInput
              onChangeText={(txt) => setPassword(txt)}
              secureTextEntry
              placeholder="Password"
            />
            <Text>
              <Feather name="eye-off" size={24} color="black" />
            </Text>
          </View>
          <Text
            onPress={() => navigation.navigate("ForgotPassword")}
            style={styles.forgot_password}
          >
            Forgot Password ?
          </Text>
          <View style={styles.login_btn}>
            <TouchableOpacity onPress={handleSignIn}>
              <Text style={styles.login_txt}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.or}>OR</Text>
          <View style={[styles.login_btn, styles.with_google]}>
            <Image
              height={20}
              width={20}
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/8e42/4139/9baefbe8f8feffab0fe67682e140e1b1?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NsqUHi6z3tnF~DHPoFJG22IFSjHoTKoPzyXqlc4bzTXnZH7Y~oWMroN9dTfZumX3iGEB0prKau3QpoTO8Dlo9LR3akNKvp6hnmajPWqWUV9QPBTu~sc~-cwZLAcb0jthcKVYh0QpBnU9CrQczvBKdSO0zOrzaWXW1zsCiqVHavNJ0pifIzKI7jSnTCLHPXWH4DPCUenxPpmy77he5pFFp4Kw0QzGJQvVCkZkoZXEvmzB1iJL9rv8vEgNxh5QaTDRI5fvyrPOZtzEbY6t61SVrMRIao3YRFjQm7~-RO8nLS83i4VHsJlcSscRhM-Fo0e-MqiqAhRt5xBejOLV3LnKNQ__",
              }}
            />
            <Text
              onPress={onGoogleLinkButtonPress}
              style={styles.with_google_txt}
            >
              Continue with Google
            </Text>
          </View>
          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={styles.dontHave_account}
          >
            Don’t have an account? <Text style={styles.signUp}>Sign Up</Text>{" "}
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
    marginTop: -70,
    padding: 40,
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
    marginTop: 30,
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
    marginTop: 40,
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
});

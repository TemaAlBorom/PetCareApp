import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const { height, width } = Dimensions.get("window");
export default function Sign_in({ navigation }) {
  return (
    <ImageBackground
      height={height}
      width={width}
      source={require("../bg1.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.catImage}>
          <Image style={styles.image} source={require("../cat.png")} />
        </View>
        <View style={styles.catBig}>
          <Image
            height={300}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/9ed3/4d05/457221b962a29c8c46343cb73073f452?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iHCngpbH9Bs3l6Y9nIeyXD5hTof1rWfK6eMx0CpqcenXh6wzIKmiyk2nzD9lFjHfLfTgra71U0Yxp5DTT-ghFs17hYYddLxWse~qUqWegY~oIUyallJ9sgzidtVErrNql6JJteGT0WLyyYyqz8UjCe8bMNJy2gbx4a0aBQFylRkwvPTYe2gRhTnQhBZ6BSJM8vyQTX8syZJxPLTy6qTES5zr2s7sd94rE9jI5rpq3PczJGXBdRzZVCYv4UQRasAmxMQZJ1ZUk2LA4XwMALV3rGLtgLOIc9RhAL~z8qyF3Dn-1qqfoCHvyYWHxwEoOTXlksEmFjKci88Uu13C5JEImQ__",
            }}
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.pet_txt}>
            Pet C{""}
            <Image
              style={{ height: 17, width: 17 }} // Adjust height and width as needed
              source={require("../cat.png")}
            />
            {""}
            re Scheduler
          </Text>
          <Text style={styles.desc}>
            Your friendly companion for organizing your pet's life. From feeding
            to vet visits, manage it all with ease in one convenient app.
          </Text>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.getStarted}>Get Started{">"}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.already_haveAccount}>
            Already have an account?{" "}
            <Text
              onPress={() => navigation.navigate("Login")}
              style={styles.login}
            >
              Login
            </Text>
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
  catImage: {
    height: 100,
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    height: 90,
    width: 90,
  },
  catBig: {
    marginTop: 200,
    marginBottom: -90,
  },
  card: {
    height,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -10,
    padding: 50,
  },
  pet_txt: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 3,
  },
  desc: {
    marginTop: 20,
    textAlign: "center",
    marginBottom: 40,
  },
  button_container: {
    alignItems: "center",
    backgroundColor: "#471863",
    height: 50,
    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center",
  },
  getStarted: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  already_haveAccount: {
    textAlign: "center",
    marginTop: 20,
  },
  login: {
    color: "#471863",
    fontWeight: "bold",
  },
});

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { getAuth } from "firebase/auth";

const { height, width } = Dimensions.get("window");

const DATA = [
  {
    id: "1",
    name: "Mishmish",
    uri: "https://s3-alpha-sig.figma.com/img/d9c5/69cb/75625053170581cad7e84909828d2a1f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CHiraIMVemErf77Nt~ZrwRXY-sF5V3osGgElmWVA8vNvSZ~SFjTVMoqMNZDLrfpt1uJ-HkadbS87khQSnn1PxaH3MQQI5dj8W4gTCBUX~XHX6FFLjvh4FhRznBxgpE8cz~2fgIQuO8XAd3mUCdx9VBpFlzGphCC6Gn1CwBUlmL2cfmPAeciDsmcYPZalzHc3k4DzsnQOiASE1UKAONKk2Y9UM~j5ltt98amKDNEVejF6W26IYyaCTBWeF9lwR95j0iENjYPk9LBFYP4jxLVLDGvY62XCO4LhCRSELVFVYfCCwXuiqrgMCHP86xbPNW6oVAT7igowT85YMAGcRGr-yw__",
  },
  {
    id: "2",
    name: "Pamuk",
    uri: "https://s3-alpha-sig.figma.com/img/1c66/2434/ff2981084e245b0be763f5c359f4ccc1?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SdTuEBa3bxaDhmLn32-PtoIjAByhFkbii2XKilWcKe7EY1DQtkArkmH-weNqG486dhDFS8Y0xzyJnhdbOb7rcVV4f9WM1sZUklILmmmiyiV--Lj7nIMttYUO1S4d0tPizeV0KgVjZ5Nv389osHYD2h4lRuh1NzBBvvtjcTgDKRrxuNYgfLfyy-59pB9PKSrAShPY11jAaqN-UcqiWcYgSPzxFng0ocLHGRz~b0ZC-bIy3Duy4RG~hYQs40MO6q-d4V5mjdpdzH8ZTZnS8OKDaF5mI1Rxmj-Id-MPhdXvAR4b~5sP1hF3gLpRcCQVx2MudAOiAXaOGlkZzMXDHoMlVA__",
  },
  {
    id: "3",
    name: "Simba",
    uri: "https://s3-alpha-sig.figma.com/img/8df8/b416/5f97ad00c8a0295927c3ffbff890cf1c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QURX4PDgDRHIpdbONLoJR5wi5YMpJRPhRKYXmCbb6yng~47Sn8PBC6ciFO9JvVuMJAKoENICWh0Xw~YtJLReNIrTTMCzaDgYtswIElBIJ5MF0WiViK~ix0XnYemc8C1Xq8vYlK4QMNxXt1ww4OODXrIf8P88RGKZrhzx6Om13iu1MqXylv4tbwk8bHQgPpFwubK3oqRxQCJwbd6zOm-hjE6y1kRzmWFgrjV6Jcmo~cEBZFv9xTseGfSnnkgta9aEZ8aQeD4bclpwVORRjryWBLfgN5C20Z8cNMduS89r1-wjTbA206aGESumiZvMA8Yme0vmoYVVMYvzAtvx9cOJlw__",
  },
  {
    id: "4",
    name: "Loz",
    uri: "https://s3-alpha-sig.figma.com/img/12fb/e251/0cfa2d37130e9f3494cfff181231e18b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WcDoQIcHasggNZ3~hyFTj826rs5wzp8F~zMcA3pG5ZauR~bNbc5NV1hSwOImBAWrB8TtjbNmcNlI7emlPlBFzBIF4g81wsqrr~F~QuOvJg5uv2O5fbbccKfkr5mL6565m4AyKoCzCbN66TsvPTvz7Yr6~afxD18VMmsgKzdv7P-Awb7xfaWbnrqeXb6UNu596pQempuJQGltOQE~~qkAqboF6ZssF0L6xzHMahh70WqN1pR63Uk82-oED0JUBpgFXWTV9RKkkBcAtZVi2K3W7ICalzoekhnCgu~DLWF~zvXlt39fuU6sxVSaJ8sH9RFn9uZLllfInPnSEH4tnE5suw__",
  },
];

export default function Home({ navigation, route }) {
  const [user, setUser] = useState();
  useEffect(() => {
    console.log(setUser(route?.params.user));
  }, []);
  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await auth.signOut(); // Sign out the user using Firebase auth
      navigation.navigate("Login"); // Redirect the user to the login page
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <ImageBackground source={require("../bg2.jpg")}>
      <View style={styles.container}>
        <View style={styles.head}>
          <Image
            style={styles.avatar}
            height={60}
            width={60}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/ef1b/3176/99d40a622d8d618719233874a36db82f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1V-BzpCSms4NWznjNiec7E-6-EhyDlZZ99FKetyDewzS5vLOzwKq6-hjBy4AUyGIJ6AgWe74dFvYVRiYbkEVkPsz-DK3eUSzNMgDT3GGsGDk6ytq4ILIbNbjj5JfSn2QAS4F4AV6lK0ijXM8wVAaOZ05vqtNNSMtt0mQbDog74hiIsqnvPZlZtlvpvXYB2Anz2z6byBHKtEagVx~evjS-1QY0Svv9S9AmhfhoI9ukp1jFi9IFNDdjocTgAoJx0GVoLNnOdhG6ke4C4Rs-SerYasAg2vcwrkXemZwMeov9YYG5LV7A~ewQ24-N~H8D8U6jrtt4kYR48UU4CJZSMrFg__",
            }}
          />
          <Feather name="bell" size={24} color="white" />
        </View>
        <View style={styles.hello_texts}>
          <Text style={styles.txt1}>Good afternoon, {user?.displayName}!</Text>
          <Text style={styles.txt2}>Ready to check on Loz?</Text>
          <Text style={styles.txt3}>{new Date().toDateString()}</Text>
        </View>
        <View style={styles.input}>
          <Feather name="search" size={28} color="black" />
          <TextInput style={styles.input_inside} />
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.FlatList}
            horizontal={true}
            data={DATA}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Profile", { id: item.id })
                  }
                >
                  <View style={styles.cat_container}>
                    <Image
                      style={styles.cat_img}
                      height={70}
                      width={70}
                      source={{ uri: item.uri }}
                    />
                    <Text>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
          />
          <View style={styles.card}>
            <View>
              <Image
                height={65}
                width={65}
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/3575/432d/5d02fce937cf24fda2cba1e535a0cb5d?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RgGpO5S86hx-1T1XFxF8JP95Nj6ZMdi-zOIxEqalJ~TCnOMAii3kJO-NV87jIZZI13L~gqukQXn~hRacXNWyXz2GIDDomwABKpnc3dKVc09nVoAqJVyhSyxWnk7wnF3fVneBl5ON10jsUpQ015oZxjpkozHDKjndZCESLFHvzYJyPtS4Z0kPxMaG~KGYZGPkWBsonJ13shcwyqHNORFg~rvuwZ6khNfNWXPp1YU4uTw78~J4mDmxaRRhBsIjju-lOYfr3S0gMnglqRsBXdeZAjDF6GkGYbO2oXchaNloTQY3ZF6zNBwtkBDPAbZ~MVhwlSni8kWy70kOvjmSyZhLaQ__",
                }}
              />
            </View>
            <View>
              <Text style={styles.txt1_card}>Feeding Time </Text>
              <Text style={[styles.txt1_card, styles.txt2_card]}>
                Next Feeding: Mishmish at 8:00 AM,
              </Text>
              <Text style={[styles.txt1_card, styles.txt2_card]}>
                Pamuk at 8:30 AM.
              </Text>
            </View>
          </View>
          <View style={styles.card}>
            <View>
              <Image
                height={65}
                width={65}
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/ea9b/7e96/ddbd4442d3ccd64618b07f0ab11eb7ce?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VhZetoGHxHWVkHfNC~EwwHxDmhYCqPxEvW-ziot4jumWjEOaAg6p~FgUQLpBlM7heDY-9QT5eHgAh-ABuO0-YXm8qGxC~a7vvL8WP5iM1pewZuMEggkEz-X1j6-58t0S-6u-u~yPunsn0-wVWhULQ8yP~OYBkXP-qsqDdJmSjFY7HhqPpvfneRgXD393loFhqEF7pwe1CIuwnvybhzKgkHbAxKbpo-C-m37ZB9eBHWmBp0VtivtD5gIlVLHr6agMwp-kCg0xmzJv93pYUZUia-rNt-BMokyXMQSH0rOH9DBpKdvlehhGI34pzw6W2wvwOSqSksl7UuY8tuAgDbV9DA__",
                }}
              />
            </View>
            <View>
              <Text style={styles.txt1_card}>Feeding Time </Text>
              <Text style={[styles.txt1_card, styles.txt2_card]}>
                Next Feeding: Mishmish at 8:00 AM,
              </Text>
              <Text style={[styles.txt1_card, styles.txt2_card]}>
                Pamuk at 8:30 AM.
              </Text>
            </View>
            <View></View>
          </View>
          <View style={styles.card}>
            <View>
              <Image
                height={65}
                width={65}
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/498e/b7fa/b4cacacf8e4d7cf9123595fde832f778?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B~6XAiOu583c8xi1ILgQPhwAltDx9zKB1r3p8sRp6s1E~SnWPqSFpZSqP6kKBfpvnAXGcpez6lDveIdfdpBTII6UEb87dQzAs141elOU977kIZQZO8R6EV5o0XK-tItM3bwUBNGLOChAH63WqhQbG1owLhPkJr~I5Z6NgR89L9dnRa7hWrE92k6Oa4LqzY~w5Kw3kVYIty-Axb1iuki9o1CJLO08VJjZeSlPLvSmC~JRQR8QFcYSW~-wjeyRa4lU-0Hs55kyLwGXk9uNlkaCdOQhzpiCzrwt7Kay3-kiXXrTHhWhg~7LweHifmRPm-TrKu5hnLpoPIsXQ2NPi~L2Yg__",
                }}
              />
            </View>
            <View>
              <Text style={styles.txt1_card}>Feeding Time </Text>
              <Text style={[styles.txt1_card, styles.txt2_card]}>
                Next Feeding: Mishmish at 8:00 AM,
              </Text>
              <Text style={[styles.txt1_card, styles.txt2_card]}>
                Pamuk at 8:30 AM.
              </Text>
            </View>
          </View>
          <View style={styles.add_cat}>
            <Image
              style={styles.cat_fingers}
              source={require("../cat_white.png")}
            />
            <Text
              onPress={() => navigation.navigate("AddCat")}
              style={styles.add_new_cat_txt}
            >
              Adding a new cat{" "}
            </Text>
          </View>
          <Text style={styles.My_account}>My account</Text>
          <View style={styles.bottom_cards}>
            <Text>
              <Ionicons name="settings" size={24} color="black" />
            </Text>
            <Text>Setting</Text>
          </View>
          <View style={styles.bottom_cards}>
            <Text>
              <Entypo name="lock" size={24} color="black" />
            </Text>
            <Text>Privacy</Text>
          </View>
          <View style={styles.bottom_cards}>
            <Text>
              <MaterialIcons name="password" size={24} color="black" />
            </Text>
            <Text>Change of password</Text>
          </View>
          <View style={styles.log_out}>
            <Text onPress={handleSignOut} style={styles.log_out_txt}>
              Log out
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    padding: 15,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    borderRadius: 1000,
  },
  hello_texts: {
    marginTop: 5,
    flexDirection: "column",
    gap: 5,
  },
  txt1: {
    fontWeight: "bold",
    color: "#806691",
    fontSize: 16,
  },
  txt2: {
    fontWeight: "bold",
    color: "white",
    fontSize: 14,
  },
  txt3: {
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 14,
  },
  input: {
    borderColor: "white",
    borderWidth: 1,
    flexDirection: "row",
    backgroundColor: "white",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  input_inside: {
    width,
    paddingLeft: 4,
  },
  item: {
    height: 90,
    width: 90,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "white",
  },
  title: {
    fontSize: 32,
  },
  cat_container: {
    borderRadius: 100,
    marginRight: 30,
    marginVertical: 20,
    alignItems: "center",
    height: 70,
    width: 70,
  },
  cat_img: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white",
  },
  FlatList: {
    height: 106,
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#F2E5F1",
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 4,
  },
  txt1_card: {
    marginLeft: 10,
    fontWeight: "bold",
    marginTop: 3,
  },
  txt2_card: {
    marginLeft: 10,
    color: "#8B8B8B",
    fontWeight: "bold",
  },
  add_cat: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#471863",
    paddingVertical: 5,
    width: width - 130,
    borderRadius: 100,
    alignSelf: "center",
  },
  cat_fingers: {
    height: 25,
    width: 25,
  },
  add_new_cat_txt: {
    fontSize: 16,
    color: "white",
    marginLeft: 4,
  },
  My_account: {
    marginTop: 10,
    fontWeight: "500",
    fontSize: 22,
    letterSpacing: 2,
  },
  bottom_cards: {
    flexDirection: "row",
    gap: 20,
    marginTop: 10,
    paddingBottom: 3,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  log_out: {
    backgroundColor: "#471863",
    width: width - 100,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 100,
  },
  log_out_txt: {
    color: "white",
    textAlign: "center",
    fontWeight: "400",
    fontSize: 20,
    paddingVertical: 6,
  },
});

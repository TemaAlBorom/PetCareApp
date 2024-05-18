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
    uri: "https://s3-alpha-sig.figma.com/img/d9c5/69cb/75625053170581cad7e84909828d2a1f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kq~orwTvlGt40U4XgeigVG~huSN~DLWCwzOyJ9cYy~MPal0mZHSwyCRokfwbV5fpXy-ISwBiisp3lzxs58piDRJi2TLub29VUGPgHnxMXuDOmIXIkJxcqZUiz0ntGehuWX3akiEoVlqG~iYKUFO7mdbTEDPI-0GKSuplBHD7saUud~3TPHsHBr68PWPNRp08ACUF0kBAhBwISY4L0n8cw96LWYOfVciX5X~CaKtyea8rKxQRg6kFVtXKD1RyRsyZOnGSQb2ZVZ6IgKeS3NuGRrym0b4TyxWd8e8NWNNIAyMW4zRND5ZLIf4ultROlAiVWfsIhlDUbRG0NRjkt12Syg__",
  },
  {
    id: "2",
    name: "Pamuk",
    uri: "https://s3-alpha-sig.figma.com/img/1c66/2434/ff2981084e245b0be763f5c359f4ccc1?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B58kNzZ8sQFzaMrIC~Zo7~7-YUkcL7-~WE6A1ZyBDHsV5mrAqIbix~r1qfKQa6A1Rl2sb~AomHVvwNVOnWJvT8-8iva19-TdDpWFz4juoUC3QHAmQLv6teMZMm6Mdq9TadnjydJHNuU7Y~Ombnv-TMuBB12iLTGKYFNqSCi4BzqOPRuWUBfGdQ8hUj31IwHXrJth73--eYsAzu8gVSNuRixlyeKMuhXHeb0MP3X~1fQ3-l54bdN9eVvF8i4qUr6nHJETN6AM-iudWb1CQJAEyFoHnwxE64hbS2GKrZwBvJeiCYsK5Xmff8pbUEeA970mvzvQb1-ltWp6XaBSFOUlJQ__",
  },
  {
    id: "3",
    name: "Simba",
    uri: "https://s3-alpha-sig.figma.com/img/8df8/b416/5f97ad00c8a0295927c3ffbff890cf1c?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ED6mPYFZwsQ7SBvV~viZk~h~QEcGuZLAwCjSz75kSpH6oiz031N9yT2oFyKeMxbdgfL3W5Gv1ENmXPldy1qugrr2~aI5WrcbRf7gg8R-m7r3Sar2PSOoC-lZyG-4xOlIlXCefnGnazOw9eE5PRUiHXUpR2WghhsZhfmNpBPPm4nMNzRZZJfpXnYITXuFSyU7M4SgUU~b077LtKEZpcBmi5KTjE2RTTRSKI51bfpAnzWurq7cT0L6pMsDnlwXluZFsEf-0LM-3n5Hll6ckS3Uq3BxVCH7jgXdWSn8oLseqGsl0nuxUzMNo2ROWe16VvGQ0P4Pk1lhpgLLhCnumdSmEQ__",
  },
  {
    id: "4",
    name: "Loz",
    uri: "https://s3-alpha-sig.figma.com/img/12fb/e251/0cfa2d37130e9f3494cfff181231e18b?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b4LVePx3hDKv3wEYyVpyOhdK4o~MKVXxC-ght7rKM7fspZA2MFW2rUANhDfQPkRUfbN7SCYspE7-szZwysTQFqmkXXvOAB8WXXB6z9w6xednG7nuWvV6p3zmg3y~gGu3TJKnRus4aCLQ-8P3l2EvcJbT2ZybF5uQBUXNdWoFs~aet9k1u~Wg4qPpnySfBT6mRB3k3nSTt1PYWAyqYMPw7OgPcB02LqxR0Zhx2hUiXoAYqyl9Cw3pb43aZY8A8L5OBVx7WlDykLPNdVv5UCNMtXK~K9Dj3ysSk2tpYjts~s97Im2FvUL2FpuSfqVvVupx4zSrPTvh5A9836xoLXL-zA__",
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
              uri: "https://s3-alpha-sig.figma.com/img/ef1b/3176/99d40a622d8d618719233874a36db82f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AnYe0EWAci0kgN~mbd85fNmMWwHkFlOW9XB24Oh2o26LX95v16CoAzxzlF~I5H30S0NXHx4QC4fNHihSGCye0Bgl7jT6l3HizLjm27PoyBsUSBOBLKhl11Mrw8LSDsPiW9JJY10nFOX~12uJTsyD8ogBvD1wp9tfwVG~miLQELxQPvvDa35XkdBLMss6EUbnmqdtxwAl5fyZWdxtAyajWNw~q72EBuJ8Px2qrVyjmWAFMGiTdJzFPbyIVVp9UeHpDn8qpWaMKtgKEO2ElecSL8WSB8gOUZJ7Ky~YpqA0a8-Rph7H1HT16Zw3kpz~yTPqD12nnGsRajfo6IwL6lIV6Q__",
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
                  uri: "https://s3-alpha-sig.figma.com/img/3575/432d/5d02fce937cf24fda2cba1e535a0cb5d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=evQcqPH~~LvUMHPIjBS0ytpiBPjQh3pa502BXWfJhr3nfZzwMAKgNxPmpq59gHPj0cG4~lvs8Vm4QHBMf3~HDPjbKRJ~PaawgFJnDsujqTlLkRJHB17jznfLNwPoyQhNlsGMBj5~OM-NdNpHIVOHyvFcLAeYXY17ocsYxUlLSAb9YYNO6~Z-AQdity4VpJn3NTaZ6tUjCGLuX5CWYs2PwVGPNwvUrX9JYTMAfWUR8Vv7asYIbwz-1UNdvYzMqxvp1Qovcc9AbMFf7zVVyKvtebp8nP-4agtTzo86nOlOqMJi4teAzmzEwvZYEDZjRoW2nwhFy3a-sq0DelALuQ9ImQ__",
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
                  uri: "https://s3-alpha-sig.figma.com/img/ea9b/7e96/ddbd4442d3ccd64618b07f0ab11eb7ce?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pMMCHs~VMqVOoKdcGoM3L2XA1Qg1GoxAQbNQO4mBtUjry06qNy3IpTSrYzL5N3mmyXwoSu~GLVZ5rRx1LQag0HN87aQWF9s8bBQQSSzLL2SAgiEAaJs63cwHDOewmN8RIT0fLUUhw34sOPC9Xcl545PzAaRAzH0JoxElOKhvpQJ0kBa1ycmPdo0f~Weijm1cZ3aAyuD10pyhUx3GB3LLNa5pJlLVArECZgqXFM3BmOv1eJRJXHY5hlp6YzlufuizQq4yBo-dyUKITeaX2tMuCc-4hITXERvryPmrD4Hm0j2Do5OiN6D7tNgD~2QjvJDt1-TWmQGtMEDtFNrMkO-txg__",
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
                  uri: "https://s3-alpha-sig.figma.com/img/498e/b7fa/b4cacacf8e4d7cf9123595fde832f778?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MURH-jaqdJ6RnWkL26URZy3cbLAoTtqIMzY0~jmTiyctoXP1ex7p7XH7a-e4yoFV7ntayodPg34ik5WAv5PKJMrnhFqi0dmQS5tAxLCphlQK2rP~Xcd~k-zJXRQvaaGAdRHc2TjjGkAbknT89ZkZnTDQcpfvLPSFjV-SasrRpDhw4w7rhOohJjIRVAwr7VV59TiH7EFgnmmx7O4bdMsGu-QOiwGxwFd2gpq3LnYlmskOwrCOF5~dM9Xay~hMObGGfPEUk9lxHeh0PZRTVvFc47PS5RaFn6Qt15uz9MANGC4mS3RcJi24c0UhS~U2wlCueR5RMDzJGJL~BUWauelTZQ__",
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

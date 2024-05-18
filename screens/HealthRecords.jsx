import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");

export default function HealthRecords({ navigation }) {
  return (
    <ScrollView>
      <ImageBackground source={require("../bg2.jpg")}>
        <View style={styles.container}>
          <Text style={styles.back}>
            <AntDesign
              onPress={() => navigation.goBack()}
              name="arrowleft"
              size={28}
              color="white"
            />
          </Text>
          <View style={styles.head_txt}>
            <Image
              style={styles.avatar}
              height={160}
              width={160}
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/d9c5/69cb/75625053170581cad7e84909828d2a1f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kq~orwTvlGt40U4XgeigVG~huSN~DLWCwzOyJ9cYy~MPal0mZHSwyCRokfwbV5fpXy-ISwBiisp3lzxs58piDRJi2TLub29VUGPgHnxMXuDOmIXIkJxcqZUiz0ntGehuWX3akiEoVlqG~iYKUFO7mdbTEDPI-0GKSuplBHD7saUud~3TPHsHBr68PWPNRp08ACUF0kBAhBwISY4L0n8cw96LWYOfVciX5X~CaKtyea8rKxQRg6kFVtXKD1RyRsyZOnGSQb2ZVZ6IgKeS3NuGRrym0b4TyxWd8e8NWNNIAyMW4zRND5ZLIf4ultROlAiVWfsIhlDUbRG0NRjkt12Syg__",
              }}
            />
            <View style={styles.txt_container}>
              <Text style={styles.txt}>Name: Mishmish</Text>
              <Text style={styles.txt}>Sex: Male</Text>
              <Text style={styles.txt}>Date of Birth: 10.May.2020</Text>
              <View style={styles.top_button}>
                <Text style={styles.txt_inside}>Health Records :</Text>
              </View>
            </View>
          </View>
          <View style={styles.bg_color}>
            <View style={styles.card_bottom}>
              <View>
                <View style={styles.head_card_container}>
                  <Text style={styles.txt_title}>Primary Vaccinations</Text>
                </View>
                <Image
                  resizeMode="contain"
                  style={styles.img}
                  width={width - 40}
                  height={200}
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/a8fb/27ac/69491fb6bef4f8bee2ebd824a2704c7a?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YPCpYJkZDMHGRW7sTgm3ziaQ1v0fsjaRxRbvghOAKzi9lEgQ3fls52Hv6lD0gXi8YCo8eCwoKPpfqJS3nLOwsJKwR90VClVHcahrvQjMBfzhVE9HXyqfuk-i8-4I9UEMyf-e6VtLrAIYL8oJyYzoTKx4gS2X-Ejhcot~nfnxDafFk1~8P5T8YPhxdmbMQLT9yNMasVnBl36F3LoteFc0as1k49NPEG6GCwpB39dOEWr87lHiySgCtS2QJZfULWOwM0S9sonv5hti3KsMDtETJXmkatHw1wxCuNNWPfy9xUVGIk0Hi8e1ex~PxJv6dsntmAdL4vSLqckdj~m~vMvVwA__",
                  }}
                />
              </View>
            </View>
            <View style={styles.card_bottom}>
              <View>
                <View style={styles.head_card_container}>
                  <Text style={styles.txt_title}>Operation/Disease</Text>
                </View>
                <Image
                  style={styles.img}
                  resizeMode="contain"
                  width={width - 40}
                  height={200}
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/4b51/b42d/70a8a4466894e47c0e7785f0188ec0f5?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lt4PnTt1cnpmy~p-F5~j~WJBK~CpNVW~mwvB8GlAxN0LvsSXffAmyVuGjCEOg9g5WhUwI5FbnVuwxkzRC6DDSja5gCkSQgjSAPoyYDa0ZwmbepiCBoIFSHOzLP66fGo6v5HYojUyBfd-eIMsk6pWj4a6Fl1pyzwwT8afURuK6V5Sf5XZUt2c3n-DPZ1UjMJB2OCWjXB1pc6orj5wn7Hp5RaTeSKB6kwjGBx2ZOe7umD~dE0xpVVeWXP9rUH9LnhBGr7Kf~1qWjfkO1ewd6b9czFkZ7fSqJwSoZYcwyrPgD3ueXGRr15jeHpZqXCkzAAG8GqbImMtFxuYx5Xc8UKIqg__",
                  }}
                />
              </View>
            </View>
            <View style={styles.card_bottom}>
              <View>
                <View style={styles.head_card_container}>
                  <Text style={styles.txt_title}>Primary Vaccinations</Text>
                </View>
                <Image
                  style={styles.img}
                  resizeMode="contain"
                  width={width - 40}
                  height={200}
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/5796/238e/ea8d18396f4836b206679c60d1114da4?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O~q7Kvfs4A4wAcPYWnItIWFCZ5IxK5Daz91pcxr1rgS6QdwgkgKOqcOaIlghOeSWuFFZBKsJ6aAG04YCYjp-h73wJfBgOcfhThgj-R1eahVNb6G4fO5NU1Z0K8lYw5XhaR2XFr5Eod6iMv9f3XltwuzwPdxOk9l6i4CCPlV-MaAAV-Udi24D3OgO7~GTBxb5y2IwGcGax8lEA-4soZovPKU7p5dd0QNrUb3qO2BpzFEocP6AfbcVQCy-AJZmb9t0QNqdKYbV~NS7M7we~hEZtvqRABeYpx2W2pf9JLHvYHOiObUaEdp9X8zfuOIeYMIKKlAqSqjlr7MSToWFC3mf2Q__",
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  back: {
    top: 10,
    left: 10,
  },
  avatar: {
    borderRadius: 100,
    top: 14,
    left: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  head_txt: {
    flexDirection: "row",
    gap: 40,
    alignItems: "center",
  },
  txt_container: {
    gap: 10,
    top: 14,
  },
  txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  top_button: {
    backgroundColor: "#471863",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 100,
    width: width - 230,
  },
  txt_inside: {
    color: "white",
    fontWeight: "bold",
    left: 10,
  },
  card_bottom: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  head_card_container: {
    borderWidth: 2,
    borderColor: "#471863",
    padding: 5,
    borderRadius: 100,
    marginBottom: 3,
  },
  img: {
    borderRadius: 20,
    marginTop: 4,
    backgroundColor: "#DEDEDE77",
    shadowColor: "black",
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  bg_color: {
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    marginTop: 20,
    overflow: "hidden",
  },
  txt_title: {
    left: 20,
    color: "#471863",
    fontWeight: "bold",
  },
});

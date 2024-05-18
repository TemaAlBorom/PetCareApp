import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
export default function PetProfile({ navigation, route }) {
  const { id } = route.params;

  const petProfiles = [
    {
      id: "1",
      name: "Mishmish",
      sex: "Male",
      dateOfBirth: "10 May 2020",
      breed: "British Shorthair",
      age: "4 years",
      weight: "15 lbs",
      hasRecord: true,
      healthRecords: {
        vaccinations: "Updated annually, last done May 2023",
        allergies: "None",
        chronicConditions: "Mild arthritis",
        dietaryDetails:
          "High-protein dry cat food. Feeding schedule: Twice a day at 8 AM and 6 PM.",
        recentActivity:
          "Regular play sessions with laser pointer, enjoys climbing structures.",
      },
      gallery: ["image1.jpg", "image2.jpg", "image3.jpg"],
    },
    {
      id: "2",
      name: "Pamuk",
      sex: "Female",
      hasRecord: false,
      dateOfBirth: "8 Jan 2022",
      breed: "Persian",
      age: "2.5 years",
      weight: "12 lbs",
      healthRecords: {
        vaccinations: "Fully vaccinated",
        allergies: "Has a mild reaction to some commercial flea treatments",
        chronicConditions: "None",
        dietaryDetails:
          "Mixed wet and dry food. Feeding schedule: Three small meals per day.",
        recentActivity: "Loves chasing feathers and soft toys, regular walker.",
      },
      gallery: ["image4.jpg", "image5.jpg", "image6.jpg"],
    },
    {
      id: "3",
      name: "Simba",
      sex: "Male",
      dateOfBirth: "30 April 2023",
      hasRecord: false,
      breed: "Norwegian Forest",
      age: "1 year",
      weight: "20 lbs",
      healthRecords: {
        vaccinations: "Up-to-date",
        allergies: "No known allergies",
        chronicConditions: "None",
        dietaryDetails:
          "High-quality kitten food, appropriate for growth. Feeding schedule: Small portions fed 3 to 4 times a day.",
        recentActivity:
          "Enjoys playful activities, exploring new environments. Often found playing with toys or engaging in light chasing games.",
      },
      gallery: ["image7.jpg", "image8.jpg", "image9.jpg"],
    },
    {
      id: "4",
      name: "Loz",
      sex: "Male",
      dateOfBirth: "6 October 2023",
      hasRecord: false,
      breed: "Scottish Fold",
      age: "7 months",
      weight: "8 lbs",
      healthRecords: {
        vaccinations:
          "Current, including initial rounds of kitten vaccinations. Rabies shot given as per early vaccination schedule.",
        allergies: "None",
        chronicConditions: "None",
        dietaryDetails:
          "High-quality kitten formula, appropriate for growth. Feeding schedule: Free feeding with controlled portions.",
        recentActivity:
          "Playful and curious, enjoys exploring new environments and playing with interactive toys.",
      },
      gallery: ["image10.jpg", "image11.jpg", "image12.jpg"],
    },
  ];

  const [item, setItem] = useState();

  useEffect(() => {
    const filteredItem = petProfiles.find((ele) => ele.id === id);
    setItem(filteredItem);
    console.log(filteredItem);
  }, [id]);

  return (
    <>
      <ImageBackground source={require("../bg2.jpg")}>
        <ScrollView>
          <View style={styles.container}>
            <AntDesign
              onPress={() => navigation.goBack()}
              style={styles.back_button}
              name="arrowleft"
              size={27}
              color="white"
            />
            <View style={styles.head_container}>
              <Image
                style={styles.avatar_img}
                borderRadius={100}
                height={100}
                width={100}
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/d9c5/69cb/75625053170581cad7e84909828d2a1f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CHiraIMVemErf77Nt~ZrwRXY-sF5V3osGgElmWVA8vNvSZ~SFjTVMoqMNZDLrfpt1uJ-HkadbS87khQSnn1PxaH3MQQI5dj8W4gTCBUX~XHX6FFLjvh4FhRznBxgpE8cz~2fgIQuO8XAd3mUCdx9VBpFlzGphCC6Gn1CwBUlmL2cfmPAeciDsmcYPZalzHc3k4DzsnQOiASE1UKAONKk2Y9UM~j5ltt98amKDNEVejF6W26IYyaCTBWeF9lwR95j0iENjYPk9LBFYP4jxLVLDGvY62XCO4LhCRSELVFVYfCCwXuiqrgMCHP86xbPNW6oVAT7igowT85YMAGcRGr-yw__",
                }}
              />
              <View style={styles.pet_info_top}>
                <Text style={styles.txt}>Name: {item?.name}</Text>
                <Text style={styles.txt}>Sex: Male</Text>
                <Text style={styles.txt}>Date of Birth: 10.May.2020</Text>
              </View>
            </View>
            <View style={styles.pet_info_cards}>
              <View style={styles.card}>
                <Text style={styles.card_txt}>Breed: {item?.breed}</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.card_txt}>Age: {item?.age}</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.card_txt}>Weight: {item?.weight}</Text>
              </View>
            </View>
            <View style={styles.bottom_card}>
              <View style={styles.icons_container}>
                <View style={styles.icon_text_container}>
                  <View style={styles.icon_container}>
                    <FontAwesome6 name="pencil" size={24} color="black" />
                  </View>
                  <Text style={styles.txt_icon}>Edit Profile</Text>
                </View>
                <View style={styles.icon_text_container}>
                  <View style={styles.icon_container}>
                    <Ionicons
                      name="add-circle-outline"
                      size={24}
                      color="black"
                    />
                  </View>
                  <Text style={styles.txt_icon}>Add Medical Record</Text>
                </View>
                <View style={styles.icon_text_container}>
                  <View style={styles.icon_container}>
                    <FontAwesome6
                      name="pen-to-square"
                      size={24}
                      color="black"
                    />
                  </View>
                  <Text style={styles.txt_icon}>Update Diet Plan</Text>
                </View>
              </View>
              <View>
                <View style={styles.head_title_card}>
                  <Text style={styles.head_card_txt}>Health Records:</Text>
                </View>
                <Text style={[styles.inside_txt, styles.margin_edits]}>
                  Vaccinations: {item?.healthRecords.vaccinations}.
                </Text>
                <Text style={[styles.inside_txt, styles.margin_edits]}>
                  Allergies: {item?.healthRecords.allergies}.
                </Text>
                <View style={styles.records}>
                  <Text style={[styles.inside_txt, styles.margin_edits]}>
                    Chronic Conditions: {item?.healthRecords.chronicConditions}
                  </Text>

                  {item?.hasRecord && (
                    <Text
                      onPress={() => navigation.navigate("HealthReacords")}
                      style={styles.record}
                    >
                      Health Records
                    </Text>
                  )}
                </View>
              </View>
              <View>
                <View style={styles.head_title_card}>
                  <Text style={styles.head_card_txt}>Dietary Details:</Text>
                </View>
                <Text style={styles.inside_txt}>
                  {item?.healthRecords.dietaryDetails}
                </Text>
              </View>
              <View>
                <View style={styles.head_title_card}>
                  <Text style={styles.head_card_txt}>Recent Activity:</Text>
                </View>
                <Text style={styles.inside_txt}>
                  {item?.healthRecords.recentActivity}
                </Text>
              </View>
              <View>
                <View style={styles.head_title_card}>
                  <Text style={styles.head_card_txt}>Gallery:</Text>
                </View>
                <View style={styles.galery}>
                  <Image
                    style={styles.img}
                    height={85}
                    width={70}
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/6fd8/63d3/68b409de594c057205795498e26621b3?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fo26QftX0ZjZOAN6YrKUa4LmRRisEoBZtDBtIl0XbPwFnQQ-A76vBxM4OY1Wx1KkFmR8u1xNZN6Olly1BaFakyi-F56fFiovmU0wegjXxxik9APi0vJd1h1XQFz7LfwlCjfe7NeqOCtnm~GJ8u49Pm2gETHWF5m1qRISMXHrq2yT0lxq3TOocz~avqjjXbg29P9IPUyoDj5tNGCEM0MPgiKBzWIS0XFLGdHU4W1itos0ktU68OEqBDKgJVk5VGn70lGV8IRSkdTgauEoNDEMUzOKC49-FcN7i2rZAKnqb8Nig1KM87~t3yUFpkzfTJv3ZUqY2k5mF7RodPfUnF2HlA__",
                    }}
                  />
                  <Image
                    style={styles.img}
                    height={85}
                    width={70}
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/78f3/c58b/a246a79eb4c2b43ae2c70658042ba96e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FZ8fpbgHgZWU0uh8DZZEid-ISdjRMjy~kVX4LwYZ53lGi6xXuRZ3F0yhImxu05EXrPCwNt86oCMkH5DAovvxaZ4ay1PjqxBwpgPY9~4Y6y-s46rILknVUBLUk6keSp7UDMHqztxcEZ3xoyaLKkawoodzkM06Q3CTbyBeb6al93B6vrPy7xuwaD3fRBDA6ak1hcuEnsuqjwXoGU2RO2EhAmvU2xKzMPnCwNLq0OF7A5zdlNJbYp9U01MgKzVAXRvadi798HbCoXityufX6E1X1tCbEEqS4IlYNOUsL8OLzldCPrmseFs93w0yLRCCWHwyOKDbydzNSSUUf4O~2y2NfA__",
                    }}
                  />
                  <Image
                    style={styles.img}
                    height={85}
                    width={70}
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/b119/fe92/58d2d7cbbc214161a2630c5c8e46089f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qW8o4JDN0KTxpmaOhmsrAOdcC80Ra~qpU5yo5AuKTg61qevnfw2Q9QEtsqNiy2oP8JcfRuU~Y3bgVX7pExwiUg6UYRF6l4WH1a9WIYVso73IXtFwDO3BHUkTpBt7A98rzESN-BkdxF2eI3mSua0IWeAlBv8J-7NjZNB4eran27WNxnHCBwqC9DOq2Id237UuuI-83A54~fnhlwrk3il0fE5kMqteenBxi59xmMCMLkPB-MS7H5so12J~FEIj4dfZA5RNphYienh-2IOVdtpfqQTcTkPFrb2y123YFhEgUqT8ZUIaDUaLhBNcqFbbqaQyt0ly5faqTHp035VQOJmNpQ__",
                    }}
                  />
                  <Image
                    style={styles.img}
                    height={85}
                    width={70}
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/a4d5/2b73/1602eef7bf3dd6a75e5e7f5643a9b5e4?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kq~OLSscGRNxi2xAo3SPwXdyCowQ9uHPmU8xx1hp3cDvZrLlgEK-wLmu0DxLSHlkTo5mtsYeVu8aG7bTAlH4kiNRzoThmNhNsafhci0VCfKIj2honEI7EuXKtVsWyenz8s-9bSy9IxXHObii1uxVBxHRFnUWarosXKXQyb54jQjtZjihnS4LRkUVS8D8cfAgedlc6HOpNdA-C4ob9ncklKfRFORY9ydhWkDnGkYFJh5agd0qvXVBS3d0fg~aS3pl-W6fIXlatmWF0ataSVxQd2uj81BdwFLYgIq49KoAF6R6lx-kLw9bj9ubuGLnCA4KhWCFCF9X2JMYLYLJggx8zw__",
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  back_button: {
    top: 10,
    left: 15,
  },
  head_container: {
    padding: 10,
    marginTop: 5,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  pet_info_top: {
    gap: 5,
  },
  avatar_img: {
    borderWidth: 2,
    borderColor: "white",
  },
  txt: {
    color: "white",
    fontWeight: "bold",
  },
  pet_info_cards: {
    gap: 3,
  },
  card: {
    borderWidth: 2,
    borderColor: "white",
    marginHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  card_txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottom_card: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  icons_container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon_text_container: {
    alignItems: "center",
    gap: 7,
  },
  icon_container: {
    borderColor: "#DEDEDE",
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  txt_icon: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 10,
  },
  head_title_card: {
    backgroundColor: "#471863",
    paddingVertical: 10,
    borderRadius: 100,
    paddingHorizontal: 10,
  },
  head_card_txt: {
    color: "white",
    fontWeight: "bold",
  },
  inside_txt: {
    paddingVertical: 10,
    paddingLeft: 10,
  },
  galery: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  img: {
    borderRadius: 10,
  },
  vaccinations_alergic: {
    marginTop: -10,
  },
  margin_edits: {
    marginVertical: -8,
  },
  records: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  record: {
    left: -20,
    bottom: 2,
    color: "#C9A67E",
    fontWeight: "bold",
  },
});

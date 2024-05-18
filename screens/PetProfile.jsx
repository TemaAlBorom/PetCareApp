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
                  uri: "https://s3-alpha-sig.figma.com/img/d9c5/69cb/75625053170581cad7e84909828d2a1f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kq~orwTvlGt40U4XgeigVG~huSN~DLWCwzOyJ9cYy~MPal0mZHSwyCRokfwbV5fpXy-ISwBiisp3lzxs58piDRJi2TLub29VUGPgHnxMXuDOmIXIkJxcqZUiz0ntGehuWX3akiEoVlqG~iYKUFO7mdbTEDPI-0GKSuplBHD7saUud~3TPHsHBr68PWPNRp08ACUF0kBAhBwISY4L0n8cw96LWYOfVciX5X~CaKtyea8rKxQRg6kFVtXKD1RyRsyZOnGSQb2ZVZ6IgKeS3NuGRrym0b4TyxWd8e8NWNNIAyMW4zRND5ZLIf4ultROlAiVWfsIhlDUbRG0NRjkt12Syg__",
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
                      uri: "https://s3-alpha-sig.figma.com/img/2785/892d/0f6d3ac759088a342cbad0021254a8dd?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pFg1FJASNqvTL14yJXVLEV8l9Bas7WxRgbEc~MABwscZ5cQ9QSRFVuVOEQvoK3j7-uMXJ3-JHxD7h-URYhvCMtKkH~tQp9r1Q3UGFdx2OiMj~OI3DHXv-6UFnTfRbrodLYsJ0Udi24D1OCGejGb7CacoG9OOVN7NbzlotYz9xhBX3u86wW44-W7EreUhgJzBE6SC3xxD8ilF2XczMui7FK985SoNUGrp6VxEIgnaP2kDwgoajwlouD-RfLiNgBW~GpOWyn~YUDaripeJbPNtGg7Byw9mCDEwwM2K-1yH6XtOKzUVz9NDtMTsTXIT6MnsLs3rgn2bx2XHNRLDzSJPNw__",
                    }}
                  />
                  <Image
                    style={styles.img}
                    height={85}
                    width={70}
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/b9ce/ddb3/81e878e76c581db8de9efcbd34ec016f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wam~U3UehMmxYcLh9V1~jmf8LXcvtt6FqpT2YlEpVFWvbxldJt1cVeUI6YW~E4qhdLn8jDDjU8HIiQa2i~oEvtlZ3u1WbY~hcKKngueVSEpO7ETfa1w92XTrDW2Qs4Aix~yF33tTAtml64mnCVBbWhripGK3b5Ogz505zZ63wbHyWSS2GF5wtUJdr04WzMZuysbTxqQtPEtuVwn42OmxEQATha791KmlCgxytJWV0racYtaQ43u3K~oRkNBEH8Sgn7nwbetM1mFRQ6315tSSo--aAM1zlaxsnzSMQxurLaGV9zCKGice20oO7oidPbrnxqIO6H-5usFGsgBVwnWcvg__",
                    }}
                  />
                  <Image
                    style={styles.img}
                    height={85}
                    width={70}
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/caf4/8346/34287aef1bc619c27cc6b13cebbc2ca6?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPTZFscnoVf01SivrytrUmAyJbTxmoxlusgK9kN1w36RC4dujgAUr5j8Z-~CduKV-8NdA1Uylkv1n7c5RH11cITuLGFTfcO1s9phiL4Q1giilKQvoI6Jokh6JumpRZZqKE6clyAtkAtQvGyCvYo8N0xheTEU3nxIQNiMF34otcv5lnLdBIho7Z82ZUbw8QUatfdm5lkrAZf~qtLxpgUGgZTXj9RxmFcQbeEPsjDXn25QBAq0p84HThVVd~F16E4wJnWErv72hul35vp56gnJWAfu0IzOPYNpkMxVvNn4Gg2QTjGpxk0~FUrFnDrWjl1XdRVxvnCJutZnhS8IsoOS7g__",
                    }}
                  />
                  <Image
                    style={styles.img}
                    height={85}
                    width={70}
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/d1a4/7d93/18a6a1a47023224c8874fa88973c4d39?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pm1Q655KOCCsiz4JCGcnnRLHO-ctFQoqLc8~1JYLiMicSFnowcCDEZJlwC5tXjuRFSzVlN7F7Op-elXHVjreCp4XgDjIB3hOP5IPue6Nio4MOM0sITX~ndqC1MuA-o4rTk-WcK6xCeLVUc5TDsZ0E0eMR4ZUqnKO2rSEHS2GshH21PFVcQZplVhZaGVgDrTJWLIN56GWssNMoxmutCwasEkxbzn0rUWXbeaYXg8wpU5-1mVPxDOOJ8kBco1rKd8xyn0Cm0LiFlbkiuelL1yTpg4GxH52AUvEvXJmgYw5wHEDZt7~0aqmG0QRAXbIglvJlPP892B7-I1RuHLU40cDkQ__",
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

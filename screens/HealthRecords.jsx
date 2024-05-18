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
                uri: "https://s3-alpha-sig.figma.com/img/d9c5/69cb/75625053170581cad7e84909828d2a1f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CHiraIMVemErf77Nt~ZrwRXY-sF5V3osGgElmWVA8vNvSZ~SFjTVMoqMNZDLrfpt1uJ-HkadbS87khQSnn1PxaH3MQQI5dj8W4gTCBUX~XHX6FFLjvh4FhRznBxgpE8cz~2fgIQuO8XAd3mUCdx9VBpFlzGphCC6Gn1CwBUlmL2cfmPAeciDsmcYPZalzHc3k4DzsnQOiASE1UKAONKk2Y9UM~j5ltt98amKDNEVejF6W26IYyaCTBWeF9lwR95j0iENjYPk9LBFYP4jxLVLDGvY62XCO4LhCRSELVFVYfCCwXuiqrgMCHP86xbPNW6oVAT7igowT85YMAGcRGr-yw__",
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
                    uri: "https://s3-alpha-sig.figma.com/img/a8fb/27ac/69491fb6bef4f8bee2ebd824a2704c7a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UaBmA7z6BwDIsr-EPuJ00bwVmzfJLGKmbvie35kgsir~QBcWML9W2J2ENi5UN9axQDnwAVTMqqzJlf8HBzoXcEjqa8gnRz2Tfct8VbuG4-gi1S3bSaZ-p6VVqLR5VthWEwsiG6Lub6HUM6V~Ah5vl-pM7I1I-LsTm6PRU1~kKMpgHbvgnNNuQgmr8ZG78X8uemXdU~3fEJv0qJWY3Yrd6oGpzodGCfr7zX6Jwc3ZtlqguED0J-ljlZK4WFaY9LsYxuMsqClayIzC~OxqZOcgL0R80nAv2kYo~cPiooRvx8fOe5Ss5Uy3zTePd7XuGUKNxGmvsOgxo8YdlPoeIccz8A__",
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
                    uri: "https://s3-alpha-sig.figma.com/img/4b51/b42d/70a8a4466894e47c0e7785f0188ec0f5?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cCFk-tm3czLZzfwdFPKjGqLPWT8SDFhGd-30BvadHGz-YCLBZnH0CupPFEB1DC0vg-A1546F1InCX-8ooDMkQyWf32rsZ84kybtuGjXuEKZihZ7jxmzGWj8i~2i4QP12bMIzuxxE0-Cj3H6xsFOWtS~L1FqokV6ZX7CkOMDk3wxQcR40u9rZgG2VH5LDzglrUzxnoK9QLWE~vQ36pzIUjf2IiH9HwFksSD6HkkNEWUmmDtq0wY5EQa2f7xokJscLTwbZvpu8f3JFRkfAelUe6y~It7gwgolCe8QAODaV2RFW4nZnhC~Hi5H8F~9PO6DErv7hzBeWN6wmWmC~vHA-2A__",
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
                    uri: "https://s3-alpha-sig.figma.com/img/5796/238e/ea8d18396f4836b206679c60d1114da4?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UnoM3ZZx0laz4SwQ7ZqeUWWhF~rqw7OrcET7~0mQfJoh0ZNcZlU-3f9udt18eOrFe4~TpIPziPUBCEuk69ODnDey61SyXAM4DakCNUfPwmD7KS4K5SP3IUinu0x-OUurpSZRqKvaHMOBTFwxV~6YpSb5pZjb-LtzI6Axvii~7WFUoZ3B3cKIP6kBSk1TwiSip8UyY6I036u3PmJFmNTo5xLzxYVWwK96XnbZUiF82u3d58mju770r8BGGuxvFuAwlBdJiaviGppiDwZ-kCbr5ij7fp6VzwyR1FlNTLruergADEzMBJniTTbq54a4uwoD1LAOaTwn5IeV509VwTobLw__",
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

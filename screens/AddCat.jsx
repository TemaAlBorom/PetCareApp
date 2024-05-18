import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const { height, width } = Dimensions.get("window");

const firebaseConfig = {
  apiKey: "AIzaSyCsXLgBeQDDNZgLgSZDMdkcpDixnUOH9-I",
  authDomain: "temaa-auth-b9466.firebaseapp.com",
  projectId: "temaa-auth-b9466",
  storageBucket: "temaa-auth-b9466.appspot.com",
  messagingSenderId: "543048213631",
  appId: "1:543048213631:web:9635cdebd4d22d07600b4a",
  measurementId: "G-J7V3K86KC7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default function AddCat({ navigation }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setDob] = useState("");

  const addCatToFirestore = async () => {
    try {
      await addDoc(collection(db, "cats"), {
        name: name,
        breed: breed,
        gender: gender,
        birth: birth,
        treatment: true,
        vaccination: true,
      });
      console.log("Cat added successfully");
      Alert.alert("Cat added successfully !");
      // You can navigate to another screen after adding the cat if needed
    } catch (error) {
      console.error("Error adding cat: ", error);
    }
  };
  return (
    <View style={styles.container}>
      <AntDesign
        onPress={() => navigation.goBack()}
        style={styles.back_button}
        name="arrowleft"
        size={27}
        color="black"
      />
      <View style={styles.head_contianer}>
        <Image style={styles.fingers} source={require("../cat.png")} />
        <Text style={styles.head_txt1}>Let`s add a new cat!</Text>
        <Text style={styles.head_txt2}>
          Please provide the following details.
        </Text>
      </View>
      <View style={styles.inputs_container}>
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>
        <View>
          <Text style={styles.label}>Breed</Text>
          <TextInput
            style={styles.input}
            value={breed}
            onChangeText={setBreed}
          />
        </View>
        <View>
          <Text style={styles.label}>Gender</Text>
          <TextInput
            style={styles.input}
            value={gender}
            onChangeText={setGender}
          />
        </View>
        <View>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput style={styles.input} value={birth} onChangeText={setDob} />
        </View>
      </View>
      <View style={styles.pic_contianer}>
        <Text style={styles.picture_txt}>Pictures</Text>
        <View style={styles.images_container}>
          <Image
            height={80}
            width={80}
            borderRadius={20}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/d622/3850/fdef9f4b6e70749d1baeefa985f975c4?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tj1GCwpaJrSYE~08q3biyfPGSalZ3euF0~FICh6BD20Q-2N4oV9WGpfVP7lvp-ZS~HFiKQncu8iCJqHV3KdpKGGF6M2~tSkyKwp6LYgxB1EVTuE9bv-8f4VRcsKpz2VvodocEGTHSHOTgbPZUUOW8wSEhvrR43Sf3U2h9RfjFwH3B7OxkliPLeAszVJFf0GPVU3b1Gf6gHEtX4DG3UGc1KXuaezxNVHKBqnyqWuxnYoNcdnR1cO1lnUZUcw82gRYd2B07dRewyW5DwN4GHNi9-nfTGWR4Oj9E96m6LBRC0x-quA~3y7qOSvU5he4mOlSZ0Rn17-q8YIWyMmc9g1anA__",
            }}
          />
          <Image
            height={80}
            width={80}
            borderRadius={20}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/d20f/b36e/e49222f458a6e4f02042a555d64cc4e8?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MBZUzNfwMNCJ1~H06nWHsnZEhbqtHD4C9rMH2FcqohzejLreVDKd5b~ZvIajm8M6yop6oYXo73bSHMaNHGcnpZ0gsor56hV0LoVSk9iN5eK229nfUmFFQqEnsUXc87nK6lBIppuBDK85gfwJo48riiqZCz9cGyHxi3FIcS-5ckv4ic9nqwQ6wZBIxBJhEFkK6WDnMdc75qk6sXZUKpb9eMIjohtID4r3d1Kxd7Nu5-k7LeN206aUtAC6MIV5RUrjbbkd4JKobc3on6FZ28rEWcPKQSX8WpBuOAu26lj34Z6mJlR3LoVHp7EzfgM5k1976r4qJo8luA-iQVlmv8fduA__",
            }}
          />
          <Image
            height={80}
            width={80}
            borderRadius={20}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/892e/47b3/fb465fc688a9897bb6aa9095061d0b89?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n4Hp4CAy1kz5e2nn0JhWTcClTgbeBH1R9nNmMRV9eXM8QBNswT5o~suGzlaQRXlvnKiKNx59V9pN4qIYNxzp6ZZlwCTWsRcbjWTlFPxItD7U1TmscfTLTVzm~gH8mqvdrSmZiZjQfbgDudBRh7lz3xu7jJo1Sc2Al5050MXMFyZe87JR~3XRJC52OT2QxNWfS4BKgrX0uBIOmSpPKmxxlm18k~KRriVV2-nHQrzzxRLi1M5xJvb9Gny-Y-zqa16gZ0VZ3VeEA7j6GCdrAMCTcmkJaqeVCQ1Pbh3cAss1I9qORZWP8Nfvx6mNdzlFrn-DvQSp7d2~CJSuWIaIIK5RXg__",
            }}
          />
          <View style={styles.add_image}>
            <AntDesign name="plus" size={24} color="gray" />
          </View>
        </View>
        <View style={styles.vacc_container}>
          <Text style={styles.vacc_txt}>Vaccination</Text>
          <View style={styles.options}>
            <Text style={styles.yes}>Yes</Text>
            <Text style={styles.no}>No</Text>
          </View>
        </View>
        <View style={styles.vacc_container}>
          <Text style={styles.vacc_txt}>Ongoing Treatment</Text>
          <View style={styles.options}>
            <Text style={styles.yes}>Yes</Text>
            <Text style={styles.no}>No</Text>
          </View>
        </View>
        <View style={styles.add_button}>
          <Text onPress={addCatToFirestore} style={styles.add_txt}>
            Add
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor: "white",
  },
  head_contianer: {
    alignItems: "center",
  },
  fingers: {
    width: 50,
    height: 50,
  },
  head_txt1: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 25,
  },
  head_txt2: {
    marginTop: 5,
    opacity: 0.7,
  },
  inputs_container: {
    padding: 20,
    gap: 10,
  },
  label: {
    fontWeight: "500",
    fontSize: 17,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 20,
    paddingVertical: 5,
  },
  pic_contianer: {
    paddingHorizontal: 20,
  },
  picture_txt: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  images_container: {
    flexDirection: "row",
    gap: 18,
  },
  add_image: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    borderStyle: "dotted",
    borderColor: "gary",
    borderWidth: 1,
    borderRadius: 20,
  },
  vacc: {
    marginTop: 20,
  },
  vacc_txt: {
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 15,
  },
  options: {
    flexDirection: "row",
    gap: 20,
  },
  yes: {
    backgroundColor: "#1E7FD41C",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1E7ED4",
  },
  no: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  add_button: {
    alignItems: "center",
    marginTop: 25,
    backgroundColor: "#471863",
    borderRadius: 100,
    width: width - 60,
    alignSelf: "center",
    paddingVertical: 5,
  },
  add_txt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  back_button: {
    top: 35,
    left: 15,
  },
});

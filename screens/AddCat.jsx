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
              uri: "https://s3-alpha-sig.figma.com/img/d622/3850/fdef9f4b6e70749d1baeefa985f975c4?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZyMhJI~ucFFyI1p7Fb2iaOBF-F7cz6iLWsrx6qGzYSlaiiCI4BFu7mvt6o4jUW-Q-AgNuwKe5byKbjtOtz3vTCCScccLWZt7U3nV65uddhbCCse1h2dQvZlawCy~2QRcxmgcDgkvh05FJ0tAEWNulYNZpWve2ctwzSj9ylajyq6Bip9at5RQEdT-IswQ6z3Ne3XcfvzEtPYV15sdchkUTx82fJt7PniEMLTqYaQkFfrejooKVdfNXrNOG7r~NfubohmbcezvdA56w3StL14XrSZNt~A0vG6-mO~sZtFeDp~-3lZUluzxK6lxK0ePlrkpcM7wDN1LAGYViLhtvVxY9w__",
            }}
          />
          <Image
            height={80}
            width={80}
            borderRadius={20}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/20af/cac2/0a5a2ea9768eeacfc8bbeb21566ea5e8?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e6deVAlJsYAklikKoERXfmwRs-Zdw~r~e7KuF6eY929-ps~BY-uUBcbk4H9nI-6du81ISTURGE8yK0OjYcGceGDbrBFAjA9~73HGfSVXWCH7m~7AwD0R7JHpOGYAPMULUJageuPyCoVMtGz94uAOW8IudUemp~tfVxyesg3ItO6ecNaj9Fl8g9ksPEfPOEYJJ1rsIw3JkBK2DJEtKs3z7lkMdUd1spzNYOz3i7Fv-aX4Z3kAZcPFMXlVlpaDkT~IIPXAYvdjsnIhhve11S8qvB7d3Ts~1KKa2G1jzbXYm-ULvWst3ZPaiP6QgRWtJbv716TEtnOqxmeQ7jciDZacCg__",
            }}
          />
          <Image
            height={80}
            width={80}
            borderRadius={20}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/892e/47b3/fb465fc688a9897bb6aa9095061d0b89?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F5O3lcQ3hV-hU67kiDQZkfDFWi-FlUctBcNwjKZjL9NIR3DiM~m5rIKduPYMi~AhyuSA0fG6tbPdQwDhD8CVgWVzndhMSZ6XZyuo6haIrORGD6Y23pasnbNoIB2oRe7MA8l9aL~zNwFf00mtGRqbnxO47t6IpJypbkJcprn4oQhUG7BE8tPl6Vs14Qo5tNn0r~BKxszPxxziP7IIP1FK-j6CLUz2C1TwM8hVJH0diJWH0CBJUnB7FY8J1B3JboS~v5298yRGzivQkxVHVa0HlfIemogA-zTxWy7WmZTaKNFJNefJVFW22IaZBiywNpq4zgY787BPdmtWzjaIPywOWQ__",
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

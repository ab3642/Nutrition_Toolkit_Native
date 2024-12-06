import { useState } from "react";

import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";

export default function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "BWT", value: "bwt" },
    { label: "WR", value: "wr" },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.background}
        colors={["rgba(0,160,175, 1)", "rgba(235,233,240, 0.5)"]}
      />
      <View style={styles.titleContainer}>
        <View style={styles.titleRow}>
          <Image
            source={require("../assets/images/apple.png")}
            style={styles.titleImage}
          />
          <Text style={styles.titleText}>Nutrition Toolkit Login</Text>
        </View>
        <View style={styles.inputRow}>
          <TextInput style={styles.input} placeholder="Username" />
        </View>
        <View style={styles.inputRow}>
          <TextInput style={styles.input} placeholder="Password" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "80%",
            paddingLeft: 30,
          }}>
          <DropDownPicker
            placeholder="Choose a location"
            open={open}
            items={items}
            value={value}
            setOpen={setOpen}
            setItems={setItems}
            setValue={setValue}
            style={styles.inputDropDown}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("this has been submitted")}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "110%",
  },
  titleImage: { height: 30, width: 30 },
  titleText: { fontSize: 18, alignSelf: "flex-end", marginLeft: 5 },
  titleContainer: {
    backgroundColor: "#fff",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 10,
    width: 300,
    height: 325,
    padding: 25,
    justifyContent: "center",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: "75%",
  },
  inputDropDown: {
    marginTop: 10,
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 10,
    paddingLeft: 30,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    parddingHorizontal: 32,
    width: 64,
    borderRadius: 4,
    backgroundColor: "#f94848",
  },
});

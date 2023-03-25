/* import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import * as Progress from "react-native-progress";

const Signup = () => {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  return (
    <View
      style={{
        marginTop: 100,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Lets get to know you
      </Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Full name"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Major"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Skills"
        onChangeText={setName}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          margin: 10,
          paddingVertical: 10,

          borderRadius: 10,
        }}
        onPress={() => {}}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Signup;
 */
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

const SignUp = ({ navigation, route }: any) => {
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [skills, setSkills] = useState("");
  const [goal, setGoal] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleSignUp = async () => {
    // Handle sign up logic here
    console.log("Name:", name);
    console.log("Major:", major);
    console.log("Skills:", skills);
    console.log("Goal:", goal);
    console.log("City:", city);
    console.log("State:", state);
    await AsyncStorage.setItem("count", "0");
    navigation.navigate("Tabs", {
      user: {
        name,
        major,
        skills: skills.split(","),
        location: `${city}, ${state}`,
        goal,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's get to know you</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Major"
        style={styles.input}
        value={major}
        onChangeText={(text) => setMajor(text)}
      />
      <TextInput
        placeholder="Skills (comma separated)"
        style={styles.input}
        value={skills}
        onChangeText={(text) => setSkills(text)}
      />
      <TextInput
        placeholder="Professional Goal"
        style={styles.goal}
        value={goal}
        onChangeText={(text) => setGoal(text)}
      />
      <View style={styles.location}>
        <TextInput
          placeholder="City"
          style={styles.inputLocation}
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <TextInput
          placeholder="State"
          style={styles.inputLocation}
          value={state}
          onChangeText={(text) => setState(text)}
        />
      </View>
      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    //justifyContent: "center",
    marginTop: 80,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#003366",
  },
  goal: {
    borderWidth: 1,
    borderColor: "#003366",
    borderRadius: 10,
    padding: 10,
    paddingVertical: 30,
    marginBottom: 10,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#003366",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  location: {
    flexDirection: "row",
    width: "100%",
  },
  inputLocation: {
    borderWidth: 1,
    borderColor: "#003366",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#003366",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default SignUp;

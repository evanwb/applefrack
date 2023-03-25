import {
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

          borderRadius: 5,
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

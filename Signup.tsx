import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

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
        AppleFrack
      </Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Full name"
        onChangeText={setName}
      />
      <TextInput />
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

import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleAnswerVisibility = async () => {
    const count = parseInt((await AsyncStorage.getItem("count")) ?? "0");
    await AsyncStorage.setItem("count", `${count + 1}`);

    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {isAnswerVisible && <Text style={styles.answer}>{answer}</Text>}
      <TouchableOpacity onPress={toggleAnswerVisibility} style={styles.button}>
        <Text style={styles.buttonText}>
          {isAnswerVisible ? "Hide Answer" : "Reveal Answer"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  question: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    color: "#003366",
  },
  answer: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#003366",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Question;

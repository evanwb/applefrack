import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from "react-native";
import * as Progress from "react-native-progress";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomePage = ({ user }) => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  AsyncStorage.getItem("count").then((count) => {
    setCount(parseInt(count ?? "0"));
  });
  useEffect(() => {}, []);
  return (
    <View style={{ ...styles.container, marginTop: 80, height: "100%" }}>
      <View style={styles.header}>
        <Image
          style={styles.profilePic}
          source={{
            uri: `https://api.dicebear.com/5.x/initials/png?seed=${user.name}`,
          }}
        />
        <Text style={styles.welcomeMessage}>
          Welcome, {user.name.split(" ")[0]}!
        </Text>
      </View>
      <View style={styles.userInfo}>
        <View style={styles.infoSection}>
          <Text style={styles.label}>Major:</Text>
          <Text style={styles.value}>{user.major}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.label}>Skills:</Text>
          <Text style={styles.value}>{user.skills.join(", ")}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>{user.location}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.label}>Professional Goal:</Text>
          <Text style={styles.value}>{user.goal}</Text>
        </View>
      </View>
      <View style={{ margin: 10, flex: 1 }}>
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#003366",
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            Daily Goal
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 10,
              width: "100%",
              textAlign: "center",
            }}
          >
            {count < 5
              ? ` Almost there, do ${
                  5 - count
                } more practice questions to hit your goal`
              : "Congrats! you hit your goal 🥳🎉"}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Jobs", { user })}
            style={{
              width: "30%",
              paddingVertical: 10,
              borderRadius: 20,
              alignItems: "center",

              justifyContent: "center",

              backgroundColor: "#003366",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              View Jobs
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: -100,
            justifyContent: "center",
            flex: 1,
            flexDirection: "row",
          }}
        >
          <Progress.Pie progress={count / 5} color="#003366" size={120} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    // backgroundColor: "#fff",
    //padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    margibnTop: 100,
    marginHorizontal: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeMessage: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#003366",
  },
  userInfo: {
    // backgroundColor: "#fff",
    marginTop: 10,
    //padding: 10,
  },
  infoSection: {
    padding: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#003366",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default HomePage;

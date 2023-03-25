import React from "react";
import { View, Text, ScrollView } from "react-native";
import jobs from "./jobs.json";

const Jobs = () => {
  return (
    <View
      style={{
        marginTop: 80,
        flex: 1,
      }}
    >
      <Text
        style={{
          marginHorizontal: 30,
          fontWeight: "bold",
          fontSize: 40,
        }}
      >
        Let's find a job
      </Text>
      <View
        style={{
          margin: 20,
        }}
      >
        <ScrollView>
          {jobs.map((job) => (
            <View
              style={{
                marginHorizontal: 5,
                marginVertical: 10,
                padding: 10,
                borderWidth: 1,
                borderRadius: 10,
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text>{job.type}</Text>
                <View
                  style={{
                    marginHorizontal: 5,
                    backgroundColor: "black",
                    padding: 1,
                    height: 1,
                    marginTop: 7,
                  }}
                ></View>
                <Text>{job.location}</Text>
              </View>
              <Text
                style={{
                  fontSize: 22,
                }}
              >
                {job.position}
              </Text>
              <Text>{job.company}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Jobs;

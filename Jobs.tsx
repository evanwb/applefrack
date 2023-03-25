import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import jobsraw from "./jobs2.json";
import { useNavigation } from "@react-navigation/native";

const Jobs = ({ route, user }: any) => {
  //const user = route.params.user;
  const [filter, setFilter] = useState("all");
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    var jobsr;
    if (filter === "best fit") {
      jobsr = jobsraw.filter((j) => {
        var res;
        user.skills.forEach(
          (s) => (res = j.skills.includes(s) || j.major === user.major)
        );
        return res;
      });
    } else if (filter === "near me") {
      jobsr = jobsraw.filter((j) => j.location === user.location);
    } else {
      if (search !== "")
        jobsr = jobsraw.filter(
          (j) =>
            j.position.includes(search) ||
            j.company.includes(search) ||
            j.description.includes(search)
        );
      else jobsr = jobsraw;
    }
    /* switch (filter) {
      default:
        jobsr = jobsraw;
      case "all":
        jobsr = jobsraw;
      case "best fit": {
        jobsr = jobsraw.filter((j) => {
          var res;
          skills.forEach((s) => (res = j.skills.includes(s)));
          return res;
        });
      }
    } */
    setJobs(jobsr);
  }, [filter, search]);
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
        Let's find you a job
      </Text>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          backgroundColor: "white",
          paddingVertical: 12,
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => setFilter("all")}
          style={{
            backgroundColor: filter === "all" ? "#003366" : "white",
            borderRadius: 120,
            marginHorizontal: 5,
            borderColor: "#003366",
            borderWidth: filter === "all" ? 0 : 1,
          }}
        >
          <Text
            style={{
              color: filter !== "all" ? "#003366" : "white",
              paddingVertical: 5,
              paddingHorizontal: 12,
            }}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilter("best fit")}
          style={{
            backgroundColor: filter === "best fit" ? "#003366" : "white",
            borderRadius: 120,
            marginHorizontal: 5,
            borderColor: "#003366",
            borderWidth: filter === "best fit" ? 0 : 1,
          }}
        >
          <Text
            style={{
              color: filter !== "best fit" ? "#003366" : "white",
              paddingVertical: 5,
              paddingHorizontal: 12,
            }}
          >
            Best fit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilter("near me")}
          style={{
            backgroundColor: filter === "near me" ? "#003366" : "white",
            borderRadius: 120,
            marginHorizontal: 5,
            borderColor: "#003366",
            borderWidth: filter === "near me" ? 0 : 1,
          }}
        >
          <Text
            style={{
              color: filter !== "near me" ? "#003366" : "white",
              paddingVertical: 5,
              paddingHorizontal: 12,
            }}
          >
            Near Me
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder="Search"
        style={{
          borderWidth: 1,
          borderColor: "#003366",
          borderRadius: 10,
          backgroundColor: "white",
          padding: 10,
          margin: 10,
        }}
        onChangeText={setSearch}
      ></TextInput>
      <View
        style={{
          marginVertical: 0,
        }}
      >
        <ScrollView>
          {jobs.map((job, i) => (
            <View
              key={job.position + job.location}
              style={{
                marginHorizontal: 0,
                marginVertical: 10,
                paddingVertical: 15,
                paddingHorizontal: 30,

                backgroundColor: "white",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text style={{ fontSize: 16 }}>{job.type}</Text>
                  <View
                    style={{
                      marginHorizontal: 5,
                      backgroundColor: "black",
                      padding: 1,
                      height: 1,
                      marginTop: 10,
                    }}
                  ></View>
                  <Text style={{ fontSize: 16 }}>{job.location}</Text>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#003366",
                    marginBottom: 6,
                  }}
                >
                  {job.position}
                </Text>
                <Text style={{}}>{job.company}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Job", { job: job });
                }}
                style={{
                  margin: 10,
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: "#003366",
                }}
              >
                <Text style={{ color: "white" }}>Apply</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Jobs;

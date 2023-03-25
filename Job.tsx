import { useState, useEffect } from "react";
import { key } from "./secrets";
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Configuration, OpenAIApi } from "openai";
import "react-native-url-polyfill/auto";
import Question from "./Question";

const get_questions = async (job: any) => {
  const configuration = new Configuration({
    apiKey: key,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 1000,
    temperature: 0,
    prompt:
      "generate a list of 3 comma seperated json objects with fields for 'question' and 'answer' to help improve this skills for this job " +
      job.skills,
  });
  return JSON.parse(`${completion.data.choices[0].text}`);
};

const Job = ({ navigation, route }: any) => {
  const job = route.params.job;
  const { position, major, skills, location, company, type, description } = job;
  const [questions, setQuestions] = useState<
    { question: string; answer: string }[]
  >([]);

  useEffect(() => {
    get_questions(job).then((q) => {
      if (questions.length === 0) setQuestions(q);
    });
  }, [questions]);
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            backgroundColor: "#003366",
            padding: 10,
            width: 60,
            borderRadius: 10,
            marginBottom: 10,
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Back</Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.position}>{position}</Text>
          <Text style={styles.major}>{major}</Text>
        </View>
        <View style={styles.skillsContainer}>
          {skills.map((skill: string) => (
            <View key={skill} style={{ ...styles.skill }}>
              <Text key={skill} style={{ color: "white" }}>
                {skill}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.footer}>
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.company}>{company}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>

      {questions.length > 0 ? (
        <ScrollView>
          <Text
            style={{
              backgroundColor: "white",
              color: "#003366",
              fontWeight: "bold",
              fontSize: 30,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            Let's get you prepared
          </Text>
          <View>
            {questions.splice(0, 3).map((q) => (
              <Question
                key={q.question}
                question={q.question}
                answer={q.answer}
              />
            ))}
          </View>
          <View>{""}</View>
        </ScrollView>
      ) : (
        <View
          style={{
            backgroundColor: "white",

            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              color: "#003366",
              textAlign: "center",
              paddingVertical: 10,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Generating questions...
          </Text>
          <ActivityIndicator />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  header: {
    // alignItems: "center",
    marginBottom: 10,
  },
  position: {
    fontWeight: "bold",
    fontSize: 30,
    marginRight: 10,
    color: "#003366",
  },
  major: {
    fontSize: 18,
    color: "#444",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
    borderRadius: 5,
  },
  skill: {
    backgroundColor: "#003366",
    color: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,

    marginRight: 5,
    marginBottom: 5,
    fontSize: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    color: "#666",
    fontSize: 16,
  },
  company: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#003366",
  },
  type: {
    color: "#666",
    fontSize: 16,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 24,
  },
});
export default Job;

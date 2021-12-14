import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import {
  EvilIcons,
  MaterialIcons,
  Fontisto,
  Entypo,
  AntDesign,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <MaterialIcons
          style={{ alignSelf: "center", marginTop: 20 }}
          name="keyboard-arrow-left"
          size={35}
          color="#fff"
        />
        <View style={styles.TextInput}>
          <EvilIcons style={styles.Icon} name="search" size={30} color="#fff" />
          <TextInput style={styles.Input} />
        </View>

        <MaterialIcons
          style={{ alignSelf: "center", marginTop: 20 }}
          name="keyboard-arrow-right"
          size={35}
          color="#fff"
        />
      </View>

      <View style={styles.Options}>
        <View style={styles.BoxOption}>
          <Text style={styles.TextOption}>Home</Text>
          <Text style={styles.TextOption}>Post</Text>
          <Text style={styles.TextOption}>Video</Text>
          <Text style={styles.TextOption}>Photos</Text>
          <Text style={styles.TextOption}>Community</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.PostContainer}>
          <View style={styles.HeaderPost}>
            <View style={styles.Photo}></View>

            <View style={styles.NameAndTimer}>
              <View style={styles.Name}>
                <Text>João Pedro Siqueira</Text>
              </View>

              <View style={styles.TimeInsert}>
                <Text>3 horas</Text>
                <Fontisto
                  style={{ marginLeft: 5 }}
                  name="world"
                  size={14}
                  color="#3b3b3b"
                />
              </View>
            </View>
          </View>

          <View style={styles.Description}>
            <Text>Hoje eu fiz um projeto de React native, tão legal!!</Text>
          </View>

          <View style={styles.Image}>
            <Image
              source={{
                uri: "https://i.pinimg.com/originals/79/d6/d8/79d6d8aae2d4ff5eb6fdaa00c0e1e6e1.gif",
              }}
              style={{ width: "90%", height: 250, borderRadius: 10, }}
            />
          </View>

          <View style={styles.Likes}>
            <Text></Text>
          </View>

          <View style={styles.Sections}>
            <View style={styles.Section}>
              <AntDesign name="like2" size={24} color="black" />
              <Text style={{marginLeft: 5,}}>Like</Text>
            </View>
            <View style={styles.Section}>
              <FontAwesome5 name="comment-alt" size={24} color="black" />
              <Text style={{marginLeft: 5,}}>Comment</Text>
            </View>
            <View style={styles.Section}>
              <Ionicons name="md-share-outline" size={24} color="black" />
              <Text style={{marginLeft: 5,}}>Share</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.Footer}>
        <TouchableOpacity style={styles.Learn}>
          <Text style={styles.LearnText}>Learn More</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Messenger}>
          <Fontisto name="messenger" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.More}>
          <Entypo name="dots-three-horizontal" size={20} color="#3D7BE2" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  Header: {
    width: "100%",
    height: 120,
    backgroundColor: "#4369B0",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "center",
  },

  PostContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    width: "100%",
    marginBottom: 100,
  },

  Photo: {
    width: 55,
    height: 55,
    borderRadius: 40,
    backgroundColor: "red",
  },

  HeaderPost: {
    flexDirection: "row",
  },

  NameAndTimer: {
    alignSelf: "center",
    marginLeft: 10,
  },

  Section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 50,
  },

  Name: {},

  TimeInsert: {
    flexDirection: "row",
    alignItems: "center",
  },

  Description: {
    marginTop: 5,
    marginBottom: 5,
  },

  Image: {},

  Likes: {},

  Sections: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  Input: {
    width: 285,
    height: 50,
    borderRadius: 35,
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#2C4877",
    paddingLeft: 50,
  },

  TextInput: {
    flexDirection: "row",
    alignSelf: "center",
  },

  Icon: {
    position: "absolute",
    top: 35,
    left: 10,
    zIndex: 100,
  },

  Options: {},

  BoxOption: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    elevation: 6,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row",
    paddingTop: 13,
  },

  TextOption: {
    fontSize: 14,
    color: "#575757",
  },

  Footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    position: "absolute",
    bottom: 20,
  },

  Learn: {
    backgroundColor: "#3D7BE2",
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 15,
  },

  Messenger: {
    backgroundColor: "#3D7BE2",
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 5,
  },

  More: {
    backgroundColor: "#fff",
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#3D7BE2",
    borderWidth: 1,
    borderRadius: 5,
  },

  LearnText: {
    color: "#fff",
  },
});

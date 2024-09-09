import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Avatar from "./Avatar";
import AntDesign from "@expo/vector-icons/AntDesign";

const CommentItem = ({ avatarUrl }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 10,
      }}
    >
      <View
        style={{
          padding: 5,
          height: "100%",
        }}
      >
        <Avatar size={40} border={true} avatarUrl={avatarUrl} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "col",
          padding: 5,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 14 }}>
          Your Name <Text style={{ color: "#b2b2b2" }}> • 1 menit</Text>
        </Text>
        <Text style={{ fontSize: 16, textAlign: "justify" }}>
          Your Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          dicta magni a debitis eligendi fugit obcaecati nesciunt officia
          reiciendis placeat dignissimos aspernatur necessitatibus at, ducimus
          aperiam earum. Ducimus, omnis quae.
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 14, color: "#b2b2b2" }}>Balas</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "col",
          padding: 5,
          margin: 5,
          alignItems: "center",
          width: 40,
        }}
      >
        <TouchableOpacity>
          <AntDesign name="hearto" size={24} color="#000000" />
        </TouchableOpacity>
        <Text style={{ color: "#000000" }}>0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CommentItem;

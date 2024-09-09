import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Header from "../components/homePage/Header";
import Story from "../components/homePage/Story";
import { stories, posts } from "../data/data";
import Post from "../components/homePage/Post";
import RBSheet from "react-native-raw-bottom-sheet";
import Avatar from "../components/homePage/Avatar";
import CommentItem from "../components/homePage/CommentItem";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const HomePage = () => {
  const refRBSheet = React.useRef();
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%", height: "87%" }}
      >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ width: "100%", padding: 10, marginTop: 5 }}
        >
          <View style={{ marginRight: 10 }}>
            <Story
              avatarUrl={
                "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D"
              }
              username="Your Story"
              border={false}
            />
            <AntDesign
              style={{ position: "absolute", bottom: 30, right: 15 }}
              name="pluscircle"
              size={18}
              color="#005ed9"
            />
          </View>
          {stories.map((story, index) => {
            return (
              <Story key={index} avatarUrl={story.url} username={story.name} />
            );
          })}
        </ScrollView>
        {posts.map((post, index) => {
          return (
            <Post
              key={index}
              username={post.username}
              avatarUrl={post.imageUrl}
              postImageUrl={post.feed.imageUrl}
              captions={post.feed.caption}
              amountLikes={post.feed.totalLikes}
              amountCommments={post.feed.totalComments}
              postDate={post.feed.postDate}
              border={post.hasActiveStory}
              onPress={() => refRBSheet.current.open()}
            />
          );
        })}
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        draggable
        customStyles={{ container: { height: "70%" } }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginBottom: 10,
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              borderBottomColor: "#c8c8c8",
              borderBottomWidth: 0.5,
              padding: 10,
              width: "100%",
              textAlign: "center",
            }}
          >
            Commentar
          </Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width: "100%", height: 100 }}
          >
            <CommentItem avatarUrl={posts[0].imageUrl} />
            <CommentItem avatarUrl={posts[0].imageUrl} />
            <CommentItem avatarUrl={posts[0].imageUrl} />
            <CommentItem avatarUrl={posts[0].imageUrl} />
          </ScrollView>
          <View
            style={{
              padding: 10,
              width: "100%",
              borderTopColor: "#c8c8c8",
              borderTopWidth: 0.5,
            }}
          >
            <Text>Emoji</Text>
          </View>
          <View
            style={{
              padding: 10,
              width: "100%",
              flexDirection: "row",
            }}
          >
            <Avatar size={40} border={true} avatarUrl={posts[0].imageUrl} />
            <View style={{ flex: 1 }}>
              <TextInput
                placeholder="Add a comment..."
                style={{ padding: 10, flex: 1 }}
              />
            </View>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="send-circle"
                size={40}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default HomePage;

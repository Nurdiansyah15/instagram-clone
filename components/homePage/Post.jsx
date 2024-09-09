import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import moment from "moment";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Avatar from "./Avatar";
import { useState } from "react";

export default function Post({
  username,
  avatarUrl,
  postImageUrl,
  amountLikes,
  captions,
  amountCommments,
  postDate,
  border = false,
  onPress,
}) {
  const [openCaptions, setOpenCaptions] = useState(false);
  return (
    <View
      id="posts"
      style={{
        width: "100%",
        borderTopWidth: 0.5,
        borderTopColor: "#dedede",
        marginBottom: 10,
      }}
    >
      <View
        id="post-header"
        style={{
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          id="post-header-left"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Avatar border={border} size={40} avatarUrl={avatarUrl} />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {username}
          </Text>
        </View>
        <View
          id="post-header-right"
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={18}
            color="black"
            style={{ alignSelf: "end" }}
          />
        </View>
      </View>
      <View id="post-images">
        <Image
          style={{
            width: "100%",
            height: 400,
            resizeMode: "cover",
          }}
          source={{
            uri: postImageUrl,
          }}
        />
      </View>
      <View
        id="post-buttons"
        style={{
          flexDirection: "row",
          padding: 10,
          paddingHorizontal: 15,
          justifyContent: "space-between",
          marginBottom: 4,
        }}
      >
        <View
          id="post-header-left"
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          }}
        >
          <FontAwesome6 name="heart" size={24} color="black" />
          <FontAwesome6 name="comment" size={24} color="black" />
          <FontAwesome6 name="paper-plane" size={24} color="black" />
        </View>
        <View
          id="post-header-right"
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          }}
        >
          <FontAwesome6 name="bookmark" size={24} color="black" />
        </View>
      </View>
      <View id="post-body">
        <View id="post-likes" style={{ marginBottom: 4 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 14,
              paddingHorizontal: 10,
            }}
          >
            {amountLikes} likes
          </Text>
        </View>
        <View id="post-caption" style={{ marginBottom: 4 }}>
          <Text
            style={{
              paddingHorizontal: 10,
              fontSize: 14,
              fontWeight: "regular",
            }}
            numberOfLines={openCaptions ? undefined : 2}
          >
            <Text style={{ fontWeight: "bold", marginRight: 5 }}>
              {username + " "}
            </Text>
            {captions}
          </Text>
          {!openCaptions && (
            <TouchableOpacity onPress={() => setOpenCaptions(!openCaptions)}>
              <Text style={{ paddingHorizontal: 10, color: "#a5a5a5" }}>
                More
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          onPress={onPress}
          id="post-comments"
          style={{ marginBottom: 4 }}
        >
          <Text
            style={{
              paddingHorizontal: 10,
              fontSize: 14,
              color: "#a5a5a5",
              fontWeight: "regular",
            }}
          >
            View all {amountCommments} comments
          </Text>
        </TouchableOpacity>
        <View id="post-time">
          <Text
            style={{
              paddingHorizontal: 10,
              fontSize: 11,
              color: "#a5a5a5",
              fontWeight: "regular",
            }}
          >
            {moment(postDate).fromNow()}
          </Text>
        </View>
      </View>
    </View>
  );
}

import { Text, View } from "react-native";
import Avatar from "./Avatar";
export default function Story({ avatarUrl, username, border = true }) {
  return (
    <View style={{ marginRight: 10 }}>
      <Avatar border={border} avatarUrl={avatarUrl} size={70} />
      <Text style={{ marginTop: 5, textAlign: "center", fontSize: 12 }}>
        {username}
      </Text>
    </View>
  );
}

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View
      id="header"
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 62,
        borderBottomWidth: 0.5,
        borderBottomColor: "#dedede",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            marginRight: 5,
            fontFamily: "StyleScript-Regular",
          }}
        >
          Instagram
        </Text>
        <AntDesign
          name="down"
          size={12}
          color="black"
          style={{ alignSelf: "center" }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <AntDesign name="hearto" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5
            name="facebook-messenger"
            size={22}
            color="black"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "react-native";
export default function Avatar({ avatarUrl, size, border = true }) {
  return (
    <LinearGradient
      colors={
        border
          ? ["#515BD4", "#8134AF", "#DD2A7B", "#FEDA77", "#F58529"]
          : ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        borderRadius: 50,
        padding: Math.floor(size / 22),
        width: "fit-content",
        height: "fit-content",
        backgroundColor: "#e6ff04",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          borderRadius: 50,
          padding: Math.floor(size / 22),
          width: "fit-content",
          height: "fit-content",
          backgroundColor: "#ffffff",
        }}
      >
        <Image
          style={{
            width: size,
            height: size,
            borderRadius: 50,
          }}
          source={{ uri: avatarUrl }}
        />
      </View>
    </LinearGradient>
  );
}

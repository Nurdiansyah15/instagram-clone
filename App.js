import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ContentPage from "./pages/ContentPage";
import HomePage from "./pages/HomePage";
import ReelsPage from "./pages/ReelsPage";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";

const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();
export default function App() {
  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          "StyleScript-Regular": require("./assets/fonts/StyleScript-Regular.ttf"),
        });
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      }
    };
    prepare();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              padding: 10,
              paddingBottom: 10,
              height: 70,
            },
            tabBarInactiveTintColor: "gray",
            tabBarActiveTintColor: "black",
          }}
        >
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => {
                return <Octicons name="home" color={color} size={size} />;
              },
            }}
            name="Home"
            component={HomePage}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="search" color={color} size={size} />
              ),
            }}
            name="Search"
            component={SearchPage}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="add-box" color={color} size={size} />
              ),
            }}
            name="Content"
            component={ContentPage}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons
                  name="video-collection"
                  size={size}
                  color={color}
                />
              ),
            }}
            name="Reels"
            component={ReelsPage}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome6 name="user" color={color} size={size} />
              ),
            }}
            name="User"
            component={UserPage}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar animated={true} style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

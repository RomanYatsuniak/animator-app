import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  SlideInDown,
  SlideInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Swipe from "./components/Swipe";
import { useEffect } from "react";

export default function App() {
  const shared = useSharedValue(1);
  const scale = useSharedValue(1);
  const reanimatedStyle = useAnimatedStyle(() => ({
    opacity: shared.value,
  }));

  const reanimatedSquareStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    scale.value = withSpring(2);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Animated.View style={styles.container}>
        <Animated.View style={{ backgroundColor: "red", flex: 1 }}>
          <TouchableOpacity onPress={() => (shared.value = 0)}>
            <Animated.Text style={[{ color: "blue" }, reanimatedStyle]}>
              Test
            </Animated.Text>
          </TouchableOpacity>

          <Swipe />
        </Animated.View>
        <Animated.View
          style={{
            backgroundColor: "yellow",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Animated.View
            style={[
              { width: 100, height: 100, backgroundColor: "blue" },
              reanimatedSquareStyle,
            ]}
          ></Animated.View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

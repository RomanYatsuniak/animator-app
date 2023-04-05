import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  SlideInDown,
  SlideInUp,
  useAnimatedStyle,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useEffect, useState } from "react";

export default function Swipe() {
  const [pressed, setPressed] = useState<boolean>(false);
  useEffect(() => {
    console.log("mounted");
  }, []);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      // {
      // translateY: withRepeat(
      //   withSequence(
      //     withTiming(-20),
      //     withDelay(3500, withTiming(-20)),
      //     withTiming(0)
      //   )
      // ),
      // translateY: withSequence(
      //   withTiming(-20, { duration: 1000 }),
      //   withDelay(3500, withTiming(-20)),
      //   withTiming(0),
      //   withDelay(3500, withTiming(0)),
      //   withTiming(-20)
      // ),
      // },
      {
        translateX: withSequence(
          withTiming(pressed ? 0 : 50),
          withDelay(1000, withTiming(100, { duration: 3000 }))
        ),
      },
    ],
    opacity: withDelay(5500, withTiming(0.5)),
  }));
  return (
    <Animated.View style={styles.container}>
      <TouchableOpacity onPress={() => setPressed(!pressed)}>
        <Animated.Text style={[styles.text, animatedStyle]}>
          Swipe
        </Animated.Text>
        <Animated.Text style={[styles.text, animatedStyle]}>Test</Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "yellow",
    fontWeight: "700",
    fontSize: 20,
    opacity: 100,
  },
});

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { Video } from "expo-av";

const Login = () => {
  const [assets] = useAssets(require("@/assets/videos/intro.mp4"));
  
  return (
    <View style={styles.container}>
      {assets && <Video source={{ uri: assets[0].uri }}></Video>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  video: {
    
  }
});

export default Login;

import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import ListScreen from "../Phone/ListScreen";
import CombinedScreen from "../Tablet/CombinedScreen";
import DeviceInfo from "react-native-device-info";

const Home: React.FC = () => {
  const isTablet: boolean = DeviceInfo.isTablet();
  return (
    <View style={styles.container}>
      {isTablet ? (
        <CombinedScreen />
      ) : (
        <>
          <ListScreen />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
});

export default Home;

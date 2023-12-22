import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
  ImageStyle,
} from "react-native";
import { dummyImage, imagePath } from "../../constants/Constants";

interface DetailScreenProps {
  route: {
    params?: {
      item?: {
        Text?: string;
        Icon?: {
          URL?: string;
        };
      };
    };
  };
}

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const { item } = route?.params || {};
  const window = useWindowDimensions();
  const Height = window.height;
  const Width = window.width;
  const imageHeightWidth = Width > Height ? Width * 0.4 : Width * 0.6;
  const splitData = item?.Text?.split("-");
  const title = splitData ? splitData[0] : "";
  const description = splitData ? splitData[1] : "";
  const imageUrl = item?.Icon?.URL ? imagePath + item?.Icon?.URL : dummyImage;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView
        style={[
          styles.container,
          { flexDirection: Width > Height ? "row" : "column" },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={[
              styles.imageStyle,
              {
                width: imageHeightWidth,
                height: imageHeightWidth,
                marginTop: Width > Height ? 0 : "25%",
              },
            ]}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  imageStyle: {
    resizeMode: "contain",
  } as ImageStyle,
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 16,
    textAlign: "center",
  },
});

import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
  TextInput,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import { dummyImage, imagePath } from "../../constants/Constants";
import { fetchData } from "../../utils/Utils";

const windowWidth = Dimensions.get("window").width;

interface Character {
  Text: string;
  Icon?: {
    URL: string;
  };
}

const CombinedScreen: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const data = await fetchData();
        setCharacters(data?.data?.RelatedTopics || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchValues();
  }, []);

  useEffect(() => {
    const filtered = characters.filter((item: Character) =>
      item?.Text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCharacters(filtered);
  }, [searchQuery, characters]);

  const renderItem = ({ item, index }: { item: Character; index: number }) => {
    const splitData = item?.Text.split("-");
    const title = splitData ? splitData[0] : "";
    const description = splitData ? splitData[1] : "";
    const imageUrl = item?.Icon?.URL ? imagePath + item?.Icon?.URL : dummyImage;

    return (
      <SafeAreaView>
        <View style={styles.flatMain}>
          <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.descStyle}>{description}</Text>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search characters..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.input}
      />
      <FlatList
        data={searchQuery ? filteredCharacters : characters}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatMain: {
    marginTop: "10%",
    alignItems: "center",
    marginHorizontal: "4%",
  },
  imageStyle: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.5,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 16,
    marginTop: 30,
    width: windowWidth / 2,
  },
  titleStyle: {
    fontSize: moderateScale(16),
    marginVertical: "3%",
  },
  descStyle: {
    fontSize: moderateScale(12),
  },
});

export default CombinedScreen;

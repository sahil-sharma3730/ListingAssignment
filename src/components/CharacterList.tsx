import React, { useState, useEffect } from "react";
import {
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Character {
  Text: string;
}

interface CharacterListProps {
  characters: Character[];
}

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Character[]>([]);

  const navigateTo = (item: Character) => {
    //@ts-ignore
    navigation.navigate("DetailScreen", { item });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = characters.filter((item: Character) =>
      item?.Text.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    setFilteredData(characters);
  }, [characters]);

  const renderItem = ({ item, index }: { item: Character; index: number }) => {
    const splitData = item?.Text.split("-");
    const title = splitData ? splitData[0] : "";

    return (
      <SafeAreaView>
        <Text style={styles.item} onPress={() => navigateTo(item)}>
          {title}
        </Text>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search characters..."
        onChangeText={handleSearch}
        value={searchQuery}
        style={styles.input}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredData}
        renderItem={renderItem}
        style={styles.flatList}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4%",
    width: width,
    height: height,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
    width: "80%",
  },
  item: {
    fontSize: 18,
    height: 44,
    textAlign: "center",
    marginBottom: 10,
  },
  flatList: {
    flex: 1,
    width: "100%",
  },
});

export default CharacterList;

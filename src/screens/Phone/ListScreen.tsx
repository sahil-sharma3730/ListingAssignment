import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import CharacterList from "../../components/CharacterList";
import { fetchData } from "../../utils/Utils";

interface Character {
  FirstURL: string;
  Icon: {
    URL: string;
  };
  Result: string;
  Text: string;
}

const ListScreen: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchValues = async () => {
      try {
        const response = await fetchData();
        const data: { data: { RelatedTopics: Character[] } } | undefined =
          response;
        setCharacters(data?.data?.RelatedTopics || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchValues();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CharacterList characters={characters} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default ListScreen;

import React, { useEffect, useState } from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { getDeckId } from "../../services/axiosClient";
import { styles } from "./styles";
import bgImg from "../../images/AAAA.webp";

const Home = ({ navigation }) => {

  const inciarPartida = async () => {
    navigation.navigate("Jogar", {
      
    });
  };

  return (
    <ImageBackground
      source={bgImg}
      style={styles.container}
      imageStyle={{ flex:1 }}
    >
      <Text style={styles.title}>Jogo de Cartas</Text>
      <View style={{ flex: 2, justifyContent: "center", paddingTop: "25%" }}>
        <Button title="Iniciar Partida" onPress={inciarPartida} />
      </View>
    </ImageBackground>
  );
};

export default Home;
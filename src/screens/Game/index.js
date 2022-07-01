import { useEffect, useState } from "react";
import { getCards } from "../../services/axiosClient";
import styled from 'styled-components/native';
import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import { TouchableOpacity } from "react-native-web";
import Jogar from "../Jogar";



export const Container = styled.View`
  
`;


const Game = ({ route, navigation }) => {
  const { deckId } = route.params;
  const [cards, setCards] = useState(null);


  useEffect(() => {
    const get = async () => {
      const deck = await getCards(deckId, 1);
      setCards(deck);
    };
    get();
  }, []);

  useEffect(() => {
    // if (cards.length === 0) return;
    console.log(cards);
  }, [cards]);

  const Cartas = async () => {
    navigation.navigate("Jogar", {
      
    });
  };


  return (

    <View style={{ 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: 'green', flex: 1
    }}>
      <TouchableOpacity onPress={Cartas}>
      
      {cards && cards.cards.map((card) => {
      
        <Image source={{ uri: card.image }}
        style={{ 
          width: 250, 
          height: 350 }}
          />     
})}

          </TouchableOpacity>
          
    </View>
  );
};

export default Game;

export const Logo = styled.Image`
    width: 120px;
    height: 130px;
    box-shadow: 3px 4px 4px rgba(0, 0 , 0, 0.25);
`



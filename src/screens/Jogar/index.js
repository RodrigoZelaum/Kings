import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import baralho from '../../images/baralho.png';
import { getDeckId } from "../../services/axiosClient";
import { useEffect, useState } from "react";




const Jogar = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    const [idDeck, setIdDeck] = useState(null);
  
    useEffect(() => {
      const get = async () => {
        setLoading(true);
        const id = await getDeckId();
        setIdDeck(id);
        setLoading(false);
      };
      get();
    }, []);

    const Virar = async () => {
        navigation.navigate("Game", {
          deckId: idDeck,
        });
    };
  
       
    return (
        
        <View style={{ 
            justifyContent: "center", 
            alignItems: "center", 
            backgroundColor: 'green', flex: 1 }}>
            <TouchableOpacity onPress={Virar}>
                <Image source={baralho} style={{ width: 250, height: 350 }} />
            </TouchableOpacity>
        </View>
    );
};

export default Jogar;

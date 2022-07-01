import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Game from "../screens/Game";
import Jogar from "../screens/Jogar";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Jogar"
          component={Jogar}
          options={{ title: "Jogar" }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{ title: "Jogar" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

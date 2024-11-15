import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Screen = ({ children }) => {
  //Initialisations.............
  //State.....
  //Handlers....
  //view....
  return (
    <View style={style.Screen}>
      {children}
      <StatusBar style="light" />
    </View>
  );
};

const style = StyleSheet.create({
  Screen: {
    padding: 15,
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default Screen;

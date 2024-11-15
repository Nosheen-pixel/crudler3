import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Screen from "../layout/Screen";
import Icons from "../UI/Icons";
import { Button, ButtonTray } from "../UI/Button";

const defaultModule = {
  ModuleID: null, // Math.floor(100000 + Math.random() * 900000),
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage: null,
  // "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg",
};

const ModuleAddScreen = ({ navigation, route }) => {
  //Initialisations.............
  const { onAdd } = route.params;
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImage =
    "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg";

  //State.....
  const [module, setModule] = useState(defaultModule);
  //Handlers....
  const handleAdd = () => onAdd(defaultModule);
  const handleCancel = navigation.goBack;

  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });

  //view....

  return (
    <Screen>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module Code</Text>
        <TextInput
          value={module.ModuleCode}
          onChangeText={(value) => handleChange("ModuleCode", value)}
          style={styles.ItemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module Name</Text>
        <TextInput
          value={module.ModuleName}
          onChangeText={(value) => handleChange("ModuleName", value)}
          style={styles.ItemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module level</Text>
        <TextInput
          value={module.ModuleLevel}
          onChangeText={(value) => handleChange("ModuleLevel", value)}
          style={styles.ItemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module leader</Text>
        <TextInput
          value={module.ModuleLeaderName}
          onChangeText={(value) => handleChange("ModuleLeaderName", value)}
          style={styles.ItemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module image URL</Text>
        <TextInput
          value={module.ModuleImage}
          onChangeText={(value) => handleChange("ModuleImage", value)}
          style={styles.ItemTextInput}
        />
      </View>
      <ButtonTray>
        <Button label="Add" icon={<Icons.Add />} onClick={handleAdd} />
        <Button label="Cancel" icon={<Icons.Cancel />} onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  ItemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgray",
  },
});
export default ModuleAddScreen;

import { useState } from "react";
import { LogBox, StyleSheet } from "react-native";
import Screen from "../layout/Screen";
//import ignoreWarnings from "../../utils/ignoreWarnings";
import ModuleList from "../entity/modules/ModuleList";
import initialModules from "../../data/modules";
import { Button, ButtonTray } from "../UI/Button";
import Icons from "../UI/Icons";
import ModuleAddScreen from "./ModuleAddScreen";
import ModuleViewScreen from "./ModuleViewScreen";

const ModuleListScreen = ({ navigation }) => {
  //Initialisations.............
  //ignoreWarnings();
  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);
  //let modules = initialModules;
  //State.....
  const [modules, setModules] = useState(initialModules);

  //Handlers....

  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  const handleAdd = (module) => setModules([...modules, module]);

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const gotoViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete });
  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  // {if (item.ModuleID !== module.ModuleID) return true;
  //else return false; });

  //view....
  return (
    <Screen>
      <ButtonTray>
        <Button label={"Add"} icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};
const styles = StyleSheet.create({});
export default ModuleListScreen;

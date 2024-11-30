import { useState } from "react";
import { StyleSheet } from "react-native";
import Icons from "../../UI/Icons";
import Form from "../../UI/Form";

const defaultModule = {
  ModuleID: null,
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage: null,
};

const ModuleForm = ({ onSubmit, onCancel }) => {
  //Initialisations.............
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImage =
    "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg";
  //State.....
  const [module, setModule] = useState(defaultModule);
  //Handlers....
  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });

  const handleSubmit = () => onSubmit(module);
  //view....
  const submitLabel = "Add";
  const submitIcon = <Icons.Add />;

  return (
    <Form
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={submitLabel}
      submitIcon={submitIcon}
    >
      <Form.InputText
        label="Module code"
        value={module.ModuleCode}
        onChange={(value) => handleChange("ModuleCode", value)}
      />
      <Form.InputText
        label="Module Name"
        value={module.ModuleName}
        onChange={(value) => handleChange("ModuleName", value)}
      />
      <Form.InputText
        label="Module level"
        value={module.ModuleLevel}
        onChange={(value) => handleChange("ModuleLevel", value)}
      />
      <Form.InputText
        label="Module leader"
        value={module.ModuleLeaderName}
        onChange={(value) => handleChange("ModuleLeaderName", value)}
      />

      <Form.InputText
        label="Module image URL"
        value={module.ModuleImage}
        onChange={(value) => handleChange("ModuleImage", value)}
      />
    </Form>
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

export default ModuleForm;

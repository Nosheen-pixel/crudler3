import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button, ButtonTray } from "./Button";
import Icons from "./Icons";

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
  //Initialisation
  //State
  //Handler
  //View
  return (
    <View style={styles.formContainer}>
      <View style={styles.formItems}>{children}</View>
      <ButtonTray>
        <Button label={submitLabel} icon={submitIcon} onClick={onSubmit} />
        <Button label="Cancel" icon={<Icons.Cancel />} onClick={onCancel} />
      </ButtonTray>
    </View>
  );
};

const InputText = ({ label, value, onChange }) => {
  //Initialisation
  //State
  //Handler
  //View
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.ItemTextInput}
      />
    </View>
  );
};

//Compose components
Form.InputText = InputText;
//Styles

const styles = StyleSheet.create({
  formContainer: {
    gap: 10,
  },
  formItems: {
    gap: 5,
  },
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
  item: {
    fontSize: 16,
  },
});
export default Form;

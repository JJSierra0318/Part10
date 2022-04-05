import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingLeft: 10,
    width: 350,
    height: 60,
    margin: 15,
  },
  error: {
    borderColor: 'red',
    borderWidth: 1
  }
});


const TextInput = ({ error, ...props }) => {
  if (error) console.log(error)
  const textInputStyle = [
    styles.input,
    error && styles.error
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
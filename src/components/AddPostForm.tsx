import { Formik } from "formik"
import { Button, Text, TextInput, View, StyleSheet } from "react-native"
import * as Yup from "yup"
import { Colors } from "../utils/constant"
import { ImagePicker } from "./ImagePicker"
import ReusableButton from "./UI/ReusableButton"
interface AddPostFormProps {

}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Please enter a title"),
  body: Yup.string().required("Please enter a description"),
})

const AddPostForm = ({ }: AddPostFormProps) => {
  const handleSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          title: "",
          body: "",
        }}
        onSubmit={(values, actions) => {
          actions.resetForm()
          handleSubmit(values)
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, isSubmitting }) => (
          <>
            <TextInput
              value={values.title}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              placeholder="Add a concise title"
              style={styles.input}
            />
            {touched.title && errors.title && <Text style={styles.errorText}>{errors.title}</Text>}
            <TextInput
              value={values.body}
              onChangeText={handleChange("body")}
              onBlur={handleBlur("body")}
              placeholder="Add some helpful description"
              style={[styles.input, styles.multilineInput]}
              multiline={true}
            />
            {touched.body && errors.body && <Text style={styles.errorText}>{errors.body}</Text>}
            
            <ImagePicker></ImagePicker>
            
            <ReusableButton
              text="Submit"
              onPress={() => {
                handleSubmit()
              }
              }
              backgroundColor= {Colors.primary}
              textColor={Colors.white}
              borderColor={Colors.primaryDark}
            />
          </>
        )}
      </Formik>
    </View>
  )
}


export default AddPostForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryLight,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
    padding: 10,
    margin: 5,
    width: "100%",
  },
  multilineInput: {
    height: 100,
    width: "100%",
    textAlignVertical: "top",
  }, 
  errorText:{
    color: Colors.error,
    fontSize: 14,
    marginBottom: 5
  }
});

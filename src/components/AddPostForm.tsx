import { Formik } from "formik"
import { Button, Text, TextInput, View } from "react-native"
import * as Yup from "yup"
interface AddPostFormProps {

}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  body: Yup.string().required("Body is required"),
})

const AddPostForm = ({ }: AddPostFormProps) => {
  const handleSubmit = (values: any) => {
    console.log(values)
  }
  return (
    <View>
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
          <View>
            <TextInput
              value={values.title}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              placeholder="Title"

            />
            {touched.title && errors.title && <Text>{errors.title}</Text>}
            <TextInput
              value={values.body}
              onChangeText={handleChange("body")}
              onBlur={handleBlur("body")}
              placeholder="Body"
            />
            {touched.body && errors.body && <Text>{errors.body}</Text>}
            <Button title="Submit" onPress={()=> handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
  )
}


export default AddPostForm;

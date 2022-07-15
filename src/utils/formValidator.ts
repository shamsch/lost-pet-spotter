import { Form, FormValidatorReturn } from "../typescript/types";



export const formValidator = (form: Form): FormValidatorReturn => {
    const errors: FormValidatorReturn = {};
    if (!form.title) {
        errors.title = "Title is required";
    }
    if (!form.body) {
        errors.body = "Body is required";
    }
    if(form.latitude === 61.4978 || form.longitude === 23.761){
        errors.location = "Location is not yet set, please set or get location";
    }
    return errors;
};

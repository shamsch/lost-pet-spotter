import { Form, FormValidatorReturn } from "../typescript/types";
import { DEFAULT_LOCATION } from "./constant";

export const formValidator = (form: Form): FormValidatorReturn => {
    const errors: FormValidatorReturn = {};
    if (!form.title) {
        errors.title = "Title is required";
    }
    if (!form.body) {
        errors.body = "Body is required";
    }
    if(form.latitude === DEFAULT_LOCATION.latitude || form.longitude === DEFAULT_LOCATION.longitude){
        errors.location = "Location is not yet set, please set or get location";
    }
    return errors;
};

import { Form, FormValidatorReturn } from "../typescript/types";
import { DEFAULT_LOCATION } from "./constant";

export const formValidator = (form: Form): FormValidatorReturn => {
    const errors: FormValidatorReturn = {
        title: "",
        body: "",
        location: "",
    };
    if (!form.title) {
        errors.title = "Title is required";
    }
    else if (form.title.length> 100){
        errors.title = "Title must be less than 100 characters";
    }
    if (!form.body) {
        errors.body = "Description is required";
    }
    else if (form.body.length> 500){
        errors.body = "Description must be less than 500 characters";
    }
    if(form.latitude === DEFAULT_LOCATION.latitude || form.longitude === DEFAULT_LOCATION.longitude){
        errors.location = "Location is not yet set, please set or get location";
    }
    return errors;
};

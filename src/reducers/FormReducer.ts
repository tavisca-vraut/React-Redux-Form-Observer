import {IAction} from "../contracts/IAction";
import {IInputInfo} from "../contracts/IInputInfo";
import { IForm } from "../contracts/IForm";

import FormActions from "../actions/FormActions";

function getInitialFormData(name: string): IInputInfo {
    return {
        name,
        value: '',
        isTouched: false,
        isFocused: false
    };
}

const initialFormState: IForm = {
    "First Name": getInitialFormData("First Name"),
    "Last Name": getInitialFormData("Last Name")
};

export default function(state = initialFormState, action: IAction) {
    return FormActions.processAction(state, action);
};

import {IAction} from "../contracts/IAction";
import {IInputInfo} from "../contracts/IInputInfo";
import { IForm } from "../contracts/IForm";
import {IForms} from "../contracts/IForms";

import FormActions from "../actions/FormActions";

function getInitialInputInfo(name: string): IInputInfo {
    return {
        name,
        value: '',
        isTouched: false,
        isFocused: false
    };
}

function getInitialFormInfo(): IForm {
    return {
        "First Name": getInitialInputInfo("First Name"),
        "Last Name": getInitialInputInfo("Last Name")
    };
}

const initialFormState: IForms = {
    "form1": getInitialFormInfo(),
    "form2": getInitialFormInfo()
};


export default function(state = initialFormState, action: IAction) {
    return FormActions.processAction(state, action);
};

import { IAction } from "../contracts/IAction";
import {IForms} from "../contracts/IForms";

import Actions from "./ActionsTypes"

class FormActions {
    static actionHandlerMap: { [key: string]: (state: IForms, action: IAction) => IForms } = {
        [Actions.CHANGE_VALUE]: FormActions.onValueChange,
        [Actions.FOCUSED]: FormActions.onFocusHandler,
        [Actions.BLURRED]: FormActions.onBlurHandler,
    };

    static processAction(state: IForms, action: IAction) {
        if (this.actionHandlerMap[action.type] === undefined) {
            return state;
        }

        return this.actionHandlerMap[action.type](state, action);
    }

    static onValueChange(state: IForms, action: IAction): IForms {
        const new_state = { ...state };
        new_state[action.fieldName] = { ...state[action.fieldName] };

        new_state[action.fieldName].value = action.payload;

        return new_state;
    }
    static onFocusHandler(state: IForms, action: IAction): IForms {
        const new_state = { ...state };
        new_state[action.fieldName] = { ...state[action.fieldName] };

        new_state[action.formName][action.fieldName].isTouched = true;
        new_state[action.formName][action.fieldName].isFocused = true;

        return new_state;
    }
    static onBlurHandler(state: IForms, action: IAction): IForms {
        const new_state = { ...state };
        new_state[action.fieldName] = { ...state[action.fieldName] };

        new_state[action.formName][action.fieldName].isFocused = false;

        return new_state;
    }
}

export default FormActions;

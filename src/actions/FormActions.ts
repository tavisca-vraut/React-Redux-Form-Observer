import { IAction } from "../contracts/IAction";
import { IForm } from "../contracts/IForm";

import Actions from "./ActionsTypes"

class FormActions {
    static actionHandlerMap: { [key: string]: (state: IForm, action: IAction) => IForm } = {
        [Actions.CHANGE_VALUE]: FormActions.onValueChange,
        [Actions.FOCUSED]: FormActions.onFocusHandler,
        [Actions.BLURRED]: FormActions.onBlurHandler,
    };

    static processAction(state: IForm, action: IAction) {
        if (this.actionHandlerMap[action.type] === undefined) {
            return state;
        }

        return this.actionHandlerMap[action.type](state, action);
    }

    static onValueChange(state: IForm, action: IAction): IForm {
        const new_state = { ...state };
        new_state[action.fieldName] = { ...state[action.fieldName] };

        new_state[action.fieldName].value = action.payload;

        return new_state;
    }
    static onFocusHandler(state: IForm, action: IAction): IForm {
        const new_state = { ...state };
        new_state[action.fieldName] = { ...state[action.fieldName] };

        new_state[action.fieldName].isTouched = true;
        new_state[action.fieldName].isFocused = true;

        return new_state;
    }
    static onBlurHandler(state: IForm, action: IAction): IForm {
        const new_state = { ...state };
        new_state[action.fieldName] = { ...state[action.fieldName] };

        new_state[action.fieldName].isFocused = false;

        return new_state;
    }
}

export default FormActions;

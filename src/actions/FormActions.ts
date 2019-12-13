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

    static getDuplicateState(state: IForms, action: IAction): IForms {
        // const newState = { ...state };
        // newState[action.formName] = { ...state[action.formName] };
        // newState[action.formName][action.fieldName] =
        //     { ...state[action.formName][action.fieldName] };
        //
        // return newState;
        return JSON.parse(JSON.stringify(state));
    }

    static onValueChange(state: IForms, action: IAction): IForms {
        const newState = FormActions.getDuplicateState(state, action);

        newState[action.formName][action.fieldName].value = action.payload;

        return newState;
    }
    static onFocusHandler(state: IForms, action: IAction): IForms {
        const newState = FormActions.getDuplicateState(state, action);

        newState[action.formName][action.fieldName].isTouched = true;
        newState[action.formName][action.fieldName].isFocused = true;

        return newState;
    }
    static onBlurHandler(state: IForms, action: IAction): IForms {
        const newState = FormActions.getDuplicateState(state, action);

        newState[action.formName][action.fieldName].isFocused = false;

        return newState;
    }
}

export default FormActions;

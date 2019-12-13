import { applyMiddleware, combineReducers, createStore  } from "redux";
import { createLogger } from "redux-logger";
import formReducer from "./reducers/FormReducer";

import { composeWithDevTools } from 'redux-devtools-extension';


export default createStore(combineReducers({
        formReducer: formReducer
    }),
    {},
    composeWithDevTools(
        applyMiddleware(createLogger())
    )
);

import React, {Component} from 'react';
import { connect } from "react-redux";

import './input.info.component.css';

class InputInfo extends Component {
    render() {
        const inputInfo = this.props.form[this.props.formName][this.props.fieldName];
        return (
            <div className="container">
                <h2>{ this.props.fieldName }</h2>
                <p><span>Value</span>: { inputInfo.value }</p>
                <p><span>hasFocus</span>: { `${inputInfo.isFocused}` }</p>
                <p><span>isTouched</span>: { `${inputInfo.isTouched}` }</p>
            </div>
        );
    }
}

export default connect(
    state => {
        return { form: state.formReducer };
    }
)(InputInfo);

import React, {Component} from 'react';
import { connect } from "react-redux";

import './input.info.component.css';

class InputInfo extends Component {
    render() {
        const form = this.props.form[this.props.fieldName];
        return (
            <div className="container">
                <h2>{ this.props.fieldName }</h2>
                <p><span>Value</span>: { form.value }</p>
                <p><span>hasFocus</span>: { `${form.isFocused}` }</p>
                <p><span>isTouched</span>: { `${form.isTouched}` }</p>
            </div>
        );
    }
}

export default connect(
    state => {
        return { form: state.formReducer };
    }
)(InputInfo);

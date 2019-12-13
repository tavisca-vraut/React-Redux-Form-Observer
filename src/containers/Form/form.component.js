import React, {Component} from 'react';
import {connect} from "react-redux";

import './form.component.css';
import InputComponent from "../Input/input.component";

import Actions from "../../actions/ActionsTypes";


class FormComponent extends Component {
    onInputChange(fieldName, e) {
        this.props.changeValue(this.props.name, e.target.value, fieldName);
    }
    onInputFocus(fieldName, e) {
        this.props.inputFocus(this.props.name, fieldName);
    }
    onInputBlur(fieldName, e) {
        this.props.inputBlur(this.props.name, fieldName);
    }
    formSubmitHandler(e) {
        e.preventDefault();
        console.log(this.props.formControls)
    }

    render() {
        return (
            <div className="form">
                <form>
                    <InputComponent
                        name={ this.props.formControls[this.props.name]["First Name"].name }
                        onChange={ this.onInputChange.bind(this) }
                        onFocus={ this.onInputFocus.bind(this) }
                        onBlur={ this.onInputBlur.bind(this) }
                    />
                    <InputComponent
                        name={ this.props.formControls[this.props.name]["Last Name"].name }
                        onChange={ this.onInputChange.bind(this) }
                        onFocus={ this.onInputFocus.bind(this) }
                        onBlur={ this.onInputBlur.bind(this) }
                    />
                    <button
                        className="submit"
                        onClick={ this.formSubmitHandler.bind(this) }
                        type="submit"
                    >Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        formControls: state.formReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeValue: (formName, value, fieldName) => {
            dispatch({
                type: Actions.CHANGE_VALUE,
                fieldName,
                formName,
                payload: value
            });
        },
        inputFocus: (formName, fieldName) => {
            dispatch({
                type: Actions.FOCUSED,
                fieldName,
                formName
            });
        },
        inputBlur: (formName, fieldName) => {
            dispatch({
                type: Actions.BLURRED,
                fieldName,
                formName
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);

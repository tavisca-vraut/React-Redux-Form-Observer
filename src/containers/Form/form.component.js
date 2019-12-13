import React, {Component} from 'react';
import {connect} from "react-redux";

import './form.component.css';
import InputComponent from "../Input/input.component";

import Actions from "../../actions/ActionsTypes";

class FormComponent extends Component {
    onInputChange(fieldName, e) {
        this.props.changeValue(e.target.value, fieldName);
    }
    onInputFocus(fieldName, e) {
        this.props.inputFocus(fieldName);
    }
    onInputBlur(fieldName, e) {
        this.props.inputBlur(fieldName);
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
                        name={ this.props.formControls["First Name"].name }
                        onChange={ this.onInputChange.bind(this) }
                        onFocus={ this.onInputFocus.bind(this) }
                        onBlur={ this.onInputBlur.bind(this) }
                    />
                    <InputComponent
                        name={ this.props.formControls["Last Name"].name }
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
        changeValue: (value, fieldName) => {
            dispatch({
                type: Actions.CHANGE_VALUE,
                fieldName,
                payload: value
            });
        },
        inputFocus: fieldName => {
            dispatch({
                type: Actions.FOCUSED,
                fieldName
            });
        },
        inputBlur: fieldName => {
            dispatch({
                type: Actions.BLURRED,
                fieldName
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);

import React, {Component} from 'react';
import './input.component.css';

class InputComponent extends Component {
    onFocus(e) {
        this.props.onFocus(this.props.name, e);
    }

    onBlur(e) {
        this.props.onBlur(this.props.name, e);
    }

    onChange(e) {
        console.log(e);
        this.props.onChange(this.props.name, e);
    }

    render() {
        return (
            <div>
                <label htmlFor={ this.props.name }>{ this.props.name }: </label>
                <input
                    type="text"
                    onFocus={ this.onFocus.bind(this) }
                    onBlur={ this.onBlur.bind(this) }
                    onChange={ this.onChange.bind(this) }
                    placeholder={ this.props.name}
                    autoComplete="off"
                />
            </div>
        );
    }
}

export default InputComponent;

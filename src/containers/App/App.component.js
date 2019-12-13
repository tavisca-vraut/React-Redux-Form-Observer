import React from 'react';

import './App.component.css';
import FormComponent from "../Form/form.component";
import InputInfo from "../InputInfo/input.info.component";

function AppComponent() {
  return (
    <div className="App">
        <div className="form-n">
            <FormComponent />

            <div className="form-info-container">
                <InputInfo fieldName="First Name" />
                <InputInfo fieldName="Last Name" />
            </div>
        </div>
        <div className="form-n">
            <FormComponent />

            <div className="form-info-container">
                <InputInfo fieldName="First Name" />
                <InputInfo fieldName="Last Name" />
            </div>
        </div>
    </div>
  );
}

export default AppComponent;

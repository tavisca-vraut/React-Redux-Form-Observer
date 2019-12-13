import React from 'react';

import './App.component.css';
import FormComponent from "../Form/form.component";
import InputInfo from "../InputInfo/input.info.component";

function AppComponent() {
  return (
    <div className="App">
        <div className="form-n">
            <FormComponent name="form1" />

            <div className="form-info-container">
                <InputInfo fieldName="First Name" formName="form1" />
                <InputInfo fieldName="Last Name" formName="form1" />
            </div>
        </div>
        <div className="form-n">
            <FormComponent name="form2" />

            <div className="form-info-container">
                <InputInfo fieldName="First Name" formName="form2" />
                <InputInfo fieldName="Last Name" formName="form2" />
            </div>
        </div>
    </div>
  );
}

export default AppComponent;

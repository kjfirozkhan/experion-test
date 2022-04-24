import React, { Fragment } from 'react';
import ColorCircle from '../color-circle/ColorCircle';
import './checkbox.scss';

const Checkbox = props => {
    return (
        <div className="checkbox-wrap">
            <div className="form-group">
                <input type="checkbox" id={props.checkboxLabel}></input>
                <label for={props.checkboxLabel}>{props.checkboxLabel}</label>
            </div>
        </div>
    )
}

export default Checkbox;
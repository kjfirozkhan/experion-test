import './checkbox.scss';

const Checkbox = props => {
    return (
        <div className="checkbox-wrap">
            <div className="form-group">
                <input type="checkbox" id={props.checkboxLabel}></input>
                <label for={props.checkboxLabel}>{props.checkboxLabel}</label>
                <span className="count-span">({props.count})</span>
            </div>
        </div>
    )
}

export default Checkbox;
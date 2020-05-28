import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputEle = null;
    const inputClasses = [classes.InputEle];
    let validationError = null;
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
        validationError = <p className={classes.errorMsg}>{props.errorMsg}</p>
    }
    
    switch (props.eleType) {
        case ("input"):
            inputEle = <input 
                className={inputClasses.join(" ")}
                {...props.eleConfig}
                value={props.value}
                onChange={props.changed}
            />
            break;
        case ("textarea"):
            inputEle = <textarea 
                className={inputClasses.join(" ")}
                {...props.eleConfig}
                value={props.value}
                onChange={props.changed}
                style={{resize:"none"}}
            />
            break;
        case ("select"):
            inputEle = (
                <select
                    className={inputClasses.join(" ")}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.eleConfig.options.map(option =>(
                        <option
                            key={option.value}
                            value={option.value}
                        >{option.label}</option>
                    ))}
                </select>
            );
            break;
        default:
            inputEle = <input 
                className={inputClasses.join(" ")}
                {...props.eleConfig}
                value={props.value}
                onChange={props.changed}
            />
            break;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputEle}
            {validationError}
        </div>
    );
}

export default input;
import { useState } from "react";
import {ErrorMessage, Field} from "formik";
import classes from './style.module.scss';

const TimePicker = ({nameHour, nameMinute, values}) => {
    return (
        <div className={classes.timePicker}>

            The begining of the work day
            <div>
                <div>
                <label>
                    <div className={classes.name}>Hours</div>
            <Field name={nameHour} component="select" className={classes.select} >
                <option value="">Hours</option>
                {Array.from(Array(24).keys()).map((hour) => (
                    <option key={hour} value={hour}>
                        {hour}
                    </option>
                ))}
            </Field>
                </label>
                    <ErrorMessage className={classes.error} name={nameHour} component="div"/>
                </div>
                <div>
                <label>
                    <div className={classes.name}>Minutes</div>
            <Field name={nameMinute} component="select" className={classes.select}>
                <option value="">Minutes</option>
                {Array.from(Array(60).keys()).map((minute) => (
                    <option key={minute} value={minute}>
                        {minute}
                    </option>
                ))}
            </Field>
                </label>
                    <ErrorMessage className={classes.error} name={nameMinute} component="div"/>
                </div>
                {values?.[nameHour] && values?.[nameMinute] && <div className={classes.time}>Time  <div>
                    {values?.[nameHour].toString().padStart(2, "0") +
                    ":" + values?.[nameMinute].toString().padStart(2, "0")}</div>
                </div>}
            </div>
        </div>
    );
};

export default TimePicker;
import React, {Component, Fragment, useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const TKDatePicker = (props) => {

    const {refer, label, min, max, placeholder, date,handleOnChange,value,dateFormat} = props

    const initialProps = {
        dateFormat : 'dd/MM/yyyy',
        ...props
    }

    const  handleDateSelect = () => {

    };

    const handleDateChange = (val) =>{
        handleOnChange(val,refer)
    };


    console.log(value)
        return (
            <Fragment>
                {label &&
                    <label htmlFor="sel1" style={{fontSize:'14px'}}>{label}</label>
                }
                <div>
                    <DatePicker
                        selected={value}
                        onSelect={handleDateSelect} //when day is clicked
                        onChange={handleDateChange} //only when value has changed
                        {...initialProps}
                    />
                </div>
            </Fragment>
        )

}

export default TKDatePicker
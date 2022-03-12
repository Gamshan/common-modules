import React from 'react'
import DatePicker from "react-datepicker";
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css"

const TKDatePicker = (props) => {

    const {refer, label, min, max, placeholder,handleOnChange,value,dateFormat,returnFormat} = props


    const [date, setDate] = React.useState(value ? new Date(value) : new Date());

    // useEffect(()=>{
    //     handleCalendarClose()
    // },[])
    //
    // useEffect(()=>{
    //     if(value)
    //         setDate(new Date(value))
    // },[value])


    const initialProps = {
        dateFormat :  dateFormat ? dateFormat : 'yyyy-MM-dd',
    }

    const  handleDateSelect = (val) => {
    };

    const  handleCalendarClose = () => {
        const returnValue = returnFormat && moment(date).format(returnFormat) ?
            moment(date).format(returnFormat) : date
        handleOnChange(returnValue,refer)
    };

    const handleDateChange = (val) =>{
        setDate(val)
    };



    return (
            <div>
                {label &&
                    <label htmlFor="sel1" style={{fontSize:'14px'}}>{'label OOO xx'}</label>
                }
                <div>
                    {/*<DatePicker*/}
                    {/*    ref={myRef}*/}
                    {/*    selected={date}*/}
                    {/*    className="form-control"*/}
                    {/*    onSelect={handleDateSelect} //when day is clicked*/}
                    {/*    onChange={handleDateChange} //only when value has changed*/}
                    {/*    onCalendarClose={handleCalendarClose}*/}
                    {/*    {...initialProps}*/}
                    {/*/>*/}
                </div>
            </div>
        )

}

export default TKDatePicker

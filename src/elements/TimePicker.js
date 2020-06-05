import React, { Component, Fragment } from 'react'
import $ from 'jquery'
import TimePicker from "rc-time-picker/es/TimePicker";

class DatePicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value:'',
            format : props.format ? props.format :'HH:mm a'
        };
        if (props.value)
            this.state.value = props.value


    }

    componentDidMount() {
        this.props.handleOnChange(this.props.defaultValue.format('YYYY-MM-DD HH:mm Z'),this.props.refer);

    }

    componentWillReceiveProps(nextProps, nextContext) {
       if(nextProps.value)
           this.state.value = nextProps.value;
        this.forceUpdate()

    }

    handleOnChange (refer,value) {

    if(value){
      this.state.value = value.format(this.props.format);
      this.props.handleOnChange(value.format('YYYY-MM-DD HH:mm Z'), refer);

    }

        this.forceUpdate()
    }

    render () {
        const {refer,label,format ,defaultValue} = this.props

        return (
            <Fragment>
                {label &&
                    <label htmlFor="sel1" style={{fontSize:'14px'}}>{label}</label>
                }
                <div>
                    <TimePicker
                        showSecond={false}
                        defaultValue={defaultValue ? defaultValue : this.state.value}
                        id={refer}
                        ref={refer}
                        className="xxx"
                        onChange={this.handleOnChange.bind(this,refer)}
                        format={this.state.format}
                        // value = {createReq.pickupTime}
                        use12Hours
                        inputReadOnly
                    />

                </div>
            </Fragment>
        )
    }
}

export default DatePicker
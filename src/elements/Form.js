import React, { Component, Fragment } from 'react'
import $ from 'jquery'
import Select from "./Select";
import Input from "./Input";
import Radio from "./Radio";
import Checkbox from "./CheckBox";
import TimePicker from "./TimePicker";
import DatePicker from "./DatePicker";
import MultiSelect from "./MultiSelect";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
          req : props.req
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.req)
            this.setState({req:nextProps.req})

        // if (nextProps.isHidden){
        //     let {req} = this.state
        //     delete req[nextProps.refer]
        //     this.setState({req})
        // }

    }

    handleOnChange (value, refer) {
        let {req} = this.state;
        req[refer] = value;

        this.props.schema.map(element=>{
            if (element.isHidden && eval(element.isHidden)){
                delete req[element.refer]
            }
        })

        this.setState({req})
        this.props.handleOnChange(req)

    }

    isHiddenElement(schema){
       if(!schema.isHidden)
           return false;
        let {req} = this.state;
        return eval(schema.isHidden)
    }

    render () {
        const {schema,req,} = this.props;

        return (
            <div>
                {schema.map(element=>{
                    if (!this.isHiddenElement(element))
                         return <Fragment>
                            {element.type === 'SELECT' &&
                                <Select {...element}
                                        value = {req[element.refer]}
                                        handleOnChange={this.handleOnChange.bind(this)}
                                />
                            }
                             {element.type === 'INPUT' &&
                                 <Input{...element}
                                       value = {req[element.refer]}
                                       handleOnChange={this.handleOnChange.bind(this)}
                                 />
                             }
                             {element.type === 'RADIO' &&
                                 <Radio{...element}
                                       value = {req[element.refer]}
                                       handleOnChange={this.handleOnChange.bind(this)}
                                 />
                             }
                             {element.type === 'CHECKBOX' &&
                                 <Checkbox{...element}
                                       value = {req[element.refer]}
                                       handleOnChange={this.handleOnChange.bind(this)}
                                 />
                             }
                             {element.type === 'DATE_PICKER' &&
                                 <DatePicker{...element}
                                       value = {req[element.refer]}
                                       handleOnChange={this.handleOnChange.bind(this)}
                                 />
                             }
                             {element.type === 'TIME_PICKER' &&
                                 <TimePicker{...element}
                                       value = {req[element.refer]}
                                       handleOnChange={this.handleOnChange.bind(this)}
                                 />
                             }
                             {element.type === 'MULTI_SELECT' &&
                                 <MultiSelect{...element}
                                       value = {req[element.refer]}
                                       handleOnChange={this.handleOnChange.bind(this)}
                                 />
                             }
                </Fragment>
            })}

            </div>

        )
    }
}

export default Form
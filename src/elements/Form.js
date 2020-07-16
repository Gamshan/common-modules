import React, { Component, Fragment } from 'react'
import $ from 'jquery'
import Select from "./Select";
import Input from "./Input";
import Radio from "./Radio";
import Checkbox from "./CheckBox";
import TimePicker from "./TimePicker";
import DatePicker from "./DatePicker";
import MultiSelect from "./MultiSelect";
import 'bootstrap/dist/css/bootstrap.min.css'


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

    }

    isHiddenElement(schema){
       if(!schema.isHidden)
           return false;
        let {req} = this.state;
        return eval(schema.isHidden)
    }

    getItemsList(element){
        if (element.items)
            return element.items
        return this.props.getItemsList(element.refer)

    }

    render () {
        const {schema,req,} = this.props;

        return (
            <Fragment>
                {schema.map(element=>{
                    if (!this.isHiddenElement(element))
                         return <label className={element.className ? element.className : 'col-3'}>
                            {element.type === 'SELECT' &&
                                <Select {...element}
                                        items={this.getItemsList(element) }
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
                                       items={this.getItemsList(element) }
                                       value = {req[element.refer]}
                                       handleOnChange={this.handleOnChange.bind(this)}
                                 />
                             }
                             {element.type === 'CHECKBOX' &&
                                 <Checkbox{...element}
                                       items={this.getItemsList(element) }
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
                                       items={this.getItemsList(element) }
                                       value = {req[element.refer]}
                                       handleOnChange={this.handleOnChange.bind(this)}
                                 />
                             }
                </label>
            })}

            </Fragment>


        )
    }
}

export default Form
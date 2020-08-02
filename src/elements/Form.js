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
          req : props.req,
          schema : props.schema
        };
        this.setDependencies(props)
    }

    setDependencies(props){
        props.schema.forEach(element=>{
            if(element.dependencies){
                let array =[]
                element.dependencies.forEach(dependencyRefer=>{
                    let findElement = props.schema.find(e=>{return dependencyRefer === e.refer})
                    if(findElement && findElement.dependencies) {
                        array = array.concat(findElement.dependencies)
                    }
                })
                element.dependencies = element.dependencies.concat(array)
            }
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.req)
            this.setState({req:nextProps.req})

    }

    handleOnChange (value, refer) {
        let {req} = this.state;
        req[refer] = value;

        let element = this.props.schema.find(e => e.refer === refer);

        if(element && element.dependencies && Array.isArray(element.dependencies)){
            element.dependencies.forEach(dependRefer =>{
                let dependentElement = this.props.schema.find(e => e.refer === dependRefer);
                if (dependentElement && req[dependentElement.refer]){
                        req[dependentElement.refer] = ""
                }
            })
        }

        this.setState({req})

    }

    isHiddenElement(schema){
       if(!schema.isHidden)
           return false;
        let {req} = this.state;
        return eval(schema.isHidden)
    }

    getItemsList(index){
        let {schema} = this.state
        let element = schema[index]
        const elementTypes = ['SELECT', 'RADIO', 'CHECKBOX', 'MULTI_SELECT'];
            if (elementTypes.indexOf(element.type) > -1) {
            let {items} = this.state;
            element.items =  element.isDynamicOptions || !element.items ?  this.props.getItemsList(element.refer) : element.items;
            this.setState({schema})
        }
    }

    render () {
        const {req} = this.props;
        const {items,schema} = this.state

        return (
            <Fragment>
                {schema.map((element,index)=>{
                    if (!this.isHiddenElement(element))
                         return <label className={element.className ? element.className : 'col-3'} onFocus={this.getItemsList.bind(this,index)}>
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
                                       items={items}
                                       value = {req[element.refer]}
                                       handleOnChange={this.handleOnChange.bind(this)}
                                 />
                             }
                             {element.type === 'CHECKBOX' &&
                                 <Checkbox{...element}
                                          items={items}
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
                                             items={items}
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
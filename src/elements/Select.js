import React, { Component, Fragment } from 'react'
import $ from 'jquery'

class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value:'',
            options:props.items ? props.items : []
        };

        if (props.value || props.value === "")
                this.state.value = props.value

    }

    componentDidMount() {
        // $('#mySelect').selectpicker();
    }

    componentWillReceiveProps(nextProps, nextContext) {
       if (nextProps.value || nextProps.value === "")
           this.state.value = nextProps.value;
       if (nextProps.items)
           this.state.options = nextProps.items
        this.forceUpdate()

    }

    handleOnChange (event, refer) {
        let subValue = undefined;
        if(this.props.subValueField && this.props.items[event.target.selectedIndex-1])
            subValue = this.props.items[event.target.selectedIndex-1][this.props.subValueField]

        this.state.value = event.target.value;
        this.props.handleOnChange(event.target.value, refer,subValue);
        this.forceUpdate()
    }

    render () {
        const { refer, items, label, disabled,value,optionKey,optionValue,placeholder,hidden} = this.props

        return (
            <Fragment>
                {label && !hidden &&
                <label htmlFor="sel1" style={{fontSize: '14px'}}>{label}</label>
                }
                {!hidden &&
                    <div onChange={event => this.handleOnChange(event, refer)}>
                        <select id="mySelect" data-show-content="true"
                                disabled={disabled ? disabled : false}
                                className="form-control" value={this.state.value}>
                            <option>{placeholder ? placeholder : 'Select'}</option>
                            {
                                this.state.options.map((item, key) => {
                                    return (
                                        <option key={key}
                                                value={optionKey ? item[optionKey] : item.key}> {optionValue ? item[optionValue] : item.value} </option>

                                    )
                                })
                            }
                        </select>
                    </div>
                }
            </Fragment>
        )
    }
}

export default Select
import React, { Component, Fragment } from 'react'
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
class MyTypeahead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value:'',
            options:props.items ? props.items : []
        };
        if (props.value)
            this.state.value = props.value

        this.myRef = React.createRef();

    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.value)
            this.state.value = nextProps.value;
        else
            this.state.value = ''

        if (nextProps.items)
            this.state.options = nextProps.items
        this.forceUpdate()

    }

    handleOnChange (event, refer) {
            this.props.handleOnChange(event[0], refer);
    }

    render () {
        const { refer, items, label, placeholder,optionKey,hidden,optionValue,caseSensitive } = this.props
        const {value} = this.state
        return (
            <Fragment className='bg-light'>
                {label && !hidden &&
                    <label htmlFor="sel1" style={{fontSize:'14px'}}>{label}</label>
                }
                {!hidden &&
                    <Typeahead
                        ref={this.myRef}
                        id={refer}
                        selected={value ? [value] : []}
                        placeholder={placeholder}
                        onChange={event => this.handleOnChange(event, refer)}
                        caseSensitive={caseSensitive}
                        options={items}
                        labelKey={option => `${option[optionValue ? optionValue : 'value']}`}

                    />
                }
            </Fragment>
        )
    }
}

export default MyTypeahead

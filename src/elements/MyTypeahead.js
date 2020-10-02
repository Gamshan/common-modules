import React, { Component, Fragment } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

class MyTypeahead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected:[],
            options: props.items ? props.items : []
        };


    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.items)
            this.state.options = nextProps.items
        this.forceUpdate()

    }

    handleOnChange (refer,selected) {
        this.setState({selected : selected})
        let optionKey = this.props.optionKey ? this.props.optionKey : 'key';
        if(selected && selected.length > 0)
            this.props.handleOnChange(selected[0][optionKey], refer);

    }

    render () {
        const { refer, label, disabled,value,optionKey,optionValue,placeholder,hidden } = this.props
        return (
            <Fragment>
                {label && !hidden &&
                    <label htmlFor="sel1" style={{fontSize:'14px'}}>{label}</label>
                }
                {!hidden &&
                    <Typeahead
                        id={refer}
                        labelKey={optionValue ? optionValue : 'value'}
                        onChange={this.handleOnChange.bind(this, refer)}
                        options={this.state.options}
                        placeholder={placeholder}
                        selected={this.state.selected}
                    />
                }
            </Fragment>
        )
    }
}

export default MyTypeahead
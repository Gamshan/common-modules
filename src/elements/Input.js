import React, { Component, Fragment } from 'react'

class Input extends Component {

    constructor (props) {
        super(props)
        this.state = {
            value: '',
        }
        if (props.value)
            this.state.value = props.value

    }

    componentWillReceiveProps (nextProps, nextContext) {

        this.state.value = nextProps.value ? nextProps.value : ''
        this.forceUpdate()

    }

    handleOnChange (event, refer) {
        if (event.target.type === 'number') {
            this.state.value = parseInt(event.target.value)
            this.props.handleOnChange((event.target.value), refer)
        } else {
            this.state.value = event.target.value
            this.props.handleOnChange(event.target.value, refer)
        }

        this.forceUpdate()
    }

    imposeMinMax (el,refer) {
        if (el.target.value !== '' && el.target.type === 'number') {
            if (el.target.min && parseInt(el.target.value) < parseInt(el.target.min)) {
                this.setState({value:el.target.min})
                this.props.handleOnChange(el.target.min, refer)
            }
            if (el.target.max && parseInt(el.target.value) > parseInt(el.target.max)) {
                this.setState({value:el.target.max})
                this.props.handleOnChange(el.target.max, refer)
            }
        }
    }

    render () {
        const { refer, label,disabled, inputType, min, max, step, placeholder,className } = this.props

        return (
            <Fragment >
                {label &&
                <label htmlFor="sel1" style={{ fontSize: '14px' }}>{label}</label>
                }
                {inputType !== 'textArea' &&
                <input
                    ref={refer}
                    type={inputType ? inputType : 'text'}
                    step={step}
                    min={min}
                    max={max}
                    className={`form-control ${className}`}
                    onBlur={event => this.imposeMinMax(event,refer)}
                    placeholder={placeholder}
                    disabled={disabled}
                    onChange={event => this.handleOnChange(event, refer)}
                    value={this.state.value}/>
                }

                {inputType === 'textArea' &&
                <textarea
                    className="form-control"
                    placeholder={placeholder}
                    onChange={event => this.handleOnChange(event, refer)}
                    value={this.state.value}/>
                }
            </Fragment>
        )
    }
}

export default Input